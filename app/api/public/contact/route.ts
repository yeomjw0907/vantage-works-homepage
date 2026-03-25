import { NextResponse } from "next/server";
import { z } from "zod";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";

const inquirySchema = z.object({
  type: z.enum(["oem", "sourcing", "agency", "tour"]),
  reference: z.string().nullable().optional(),
  quantity: z.string().nullable().optional(),
  budget_range: z.string().nullable().optional(),
  desired_delivery_date: z.string().nullable().optional(),
  required_options: z.unknown().nullable().optional(),
  notes: z.string().nullable().optional(),
  company_name: z.string().min(1),
  contact_name: z.string().min(1),
  email: z.string().email(),
  phone: z.string().nullable().optional()
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const parsed = inquirySchema.parse(body);

    const supabase = createSupabaseAdminClient();

    const payload = {
      type: parsed.type,
      reference: parsed.reference ?? null,
      quantity: parsed.quantity ?? null,
      budget_range: parsed.budget_range ?? null,
      desired_delivery_date: parsed.desired_delivery_date ?? null,
      required_options: parsed.required_options ?? null,
      notes: parsed.notes ?? null,
      company_name: parsed.company_name,
      contact_name: parsed.contact_name,
      email: parsed.email,
      phone: parsed.phone ?? null,
      status: "new"
    };

    const { error } = await supabase.from("inquiries").insert(payload);
    if (error) {
      return NextResponse.json({ message: error.message }, { status: 400 });
    }

    // TODO: 이메일 알림(예: Resend/SMTP) + 스프레드시트/CRM 연동은 환경/도구 확정 후 연결

    return NextResponse.json({ ok: true });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Invalid request";
    return NextResponse.json({ message }, { status: 400 });
  }
}

