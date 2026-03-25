import { NextResponse } from "next/server";
import { z } from "zod";
import { requireAdmin, createSupabaseStorageAdminClient } from "@/lib/supabase/server";

const fieldsSchema = z.object({
  category: z.string().min(1),
  title: z.string().min(1),
  description: z.string().optional(),
  slug: z.string().optional(),
  is_published: z.enum(["true", "false"]).optional(),
});

export async function POST(req: Request) {
  const admin = await requireAdmin();
  if (!admin.isAdmin) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  const formData = await req.formData();
  const file = formData.get("file");
  if (!(file instanceof File)) {
    return NextResponse.json({ message: "Missing file" }, { status: 400 });
  }

  const category = String(formData.get("category") ?? "");
  const title = String(formData.get("title") ?? "");
  const description = String(formData.get("description") ?? "").trim() || undefined;
  const slug = String(formData.get("slug") ?? "").trim() || undefined;
  const is_published = String(formData.get("is_published") ?? "false");

  const parsed = fieldsSchema.safeParse({ category, title, description, slug, is_published });
  if (!parsed.success) {
    return NextResponse.json({ message: "Invalid fields" }, { status: 400 });
  }

  const supabase = createSupabaseStorageAdminClient();

  const id = crypto.randomUUID();
  const ext = file.name.includes(".") ? file.name.split(".").pop() : "pdf";
  const storagePath = `documents/${id}.${ext}`;
  const bucket = "documents-proposals";

  // Storage 업로드
  const arrayBuffer = await file.arrayBuffer();
  const contentType = file.type || "application/pdf";
  const uploadRes = await supabase.storage.from(bucket).upload(storagePath, Buffer.from(arrayBuffer), {
    contentType,
    upsert: false
  });

  if (uploadRes.error) {
    return NextResponse.json({ message: uploadRes.error.message }, { status: 400 });
  }

  const { error: insertError } = await supabase.from("documents").insert({
    id,
    category: parsed.data.category,
    title: parsed.data.title,
    description: parsed.data.description ?? null,
    slug: parsed.data.slug ?? null,
    storage_path: storagePath,
    mime_type: contentType,
    file_size: file.size,
    is_published: parsed.data.is_published === "true",
    created_at: new Date().toISOString()
  });

  if (insertError) {
    return NextResponse.json({ message: insertError.message }, { status: 400 });
  }

  return NextResponse.json({ ok: true, id });
}

