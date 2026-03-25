import { NextResponse } from "next/server";
import { z } from "zod";
import { requireAdmin, createSupabaseStorageAdminClient } from "@/lib/supabase/server";

const fieldsSchema = z.object({
  name: z.string().min(1),
  link_url: z.string().url().optional(),
  is_published: z.enum(["true", "false"]).optional(),
  sort_order: z.string().optional()
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

  const name = String(formData.get("name") ?? "");
  const linkUrl = formData.get("link_url");
  const is_published = String(formData.get("is_published") ?? "false");
  const sort_order = String(formData.get("sort_order") ?? "0");

  const parsed = fieldsSchema.safeParse({
    name,
    link_url: linkUrl ? String(linkUrl) : undefined,
    is_published,
    sort_order
  });

  if (!parsed.success) {
    return NextResponse.json({ message: "Invalid fields" }, { status: 400 });
  }

  const supabase = createSupabaseStorageAdminClient();

  const id = crypto.randomUUID();
  const ext = file.name.includes(".") ? file.name.split(".").pop() : "png";
  const storagePath = `partners/${id}.${ext}`;
  const bucket = "partner-logos";

  const arrayBuffer = await file.arrayBuffer();
  const contentType = file.type || "image/png";

  const uploadRes = await supabase.storage.from(bucket).upload(storagePath, Buffer.from(arrayBuffer), {
    contentType,
    upsert: false
  });

  if (uploadRes.error) {
    return NextResponse.json({ message: uploadRes.error.message }, { status: 400 });
  }

  const { error: insertError } = await supabase.from("partners").insert({
    id,
    name: parsed.data.name,
    storage_path: storagePath,
    link_url: parsed.data.link_url ?? null,
    sort_order: Number(parsed.data.sort_order ?? 0),
    is_published: parsed.data.is_published === "true",
    created_at: new Date().toISOString()
  });

  if (insertError) {
    return NextResponse.json({ message: insertError.message }, { status: 400 });
  }

  return NextResponse.json({ ok: true, id });
}

