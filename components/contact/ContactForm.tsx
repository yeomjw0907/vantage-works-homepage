"use client";

import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

type InquiryType = "oem" | "sourcing" | "agency" | "tour";

export default function ContactForm() {
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const [form, setForm] = useState({
    inquiryType: "oem" as InquiryType,
    referenceLink: "",
    quantity: "",
    budgetRange: "",
    desiredDeliveryDate: "",
    requiredOptions: "",
    notes: "",
    companyName: "",
    contactName: "",
    phone: "",
    email: ""
  });

  const isReady = useMemo(() => {
    return Boolean(
      form.inquiryType &&
        form.companyName.trim() &&
        form.contactName.trim() &&
        form.email.trim() &&
        form.requiredOptions.trim()
    );
  }, [form]);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    if (!isReady) {
      setError("필수 입력을 확인해 주세요.");
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch("/api/public/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: form.inquiryType,
          reference: form.referenceLink || null,
          quantity: form.quantity || null,
          budget_range: form.budgetRange || null,
          desired_delivery_date: form.desiredDeliveryDate || null,
          required_options: form.requiredOptions ? { text: form.requiredOptions } : null,
          notes: form.notes || null,
          company_name: form.companyName,
          contact_name: form.contactName,
          phone: form.phone || null,
          email: form.email
        })
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body?.message || "제출에 실패했습니다.");
      }

      setSuccess("접수가 완료되었습니다. 확인 후 회신드리겠습니다.");
      setForm({
        inquiryType: "oem",
        referenceLink: "",
        quantity: "",
        budgetRange: "",
        desiredDeliveryDate: "",
        requiredOptions: "",
        notes: "",
        companyName: "",
        contactName: "",
        phone: "",
        email: ""
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : "알 수 없는 오류가 발생했습니다.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <Card className="p-6 md:p-8">
      <form onSubmit={onSubmit} className="space-y-6">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-2 md:col-span-2">
            <Label htmlFor="inquiryType">의뢰 유형</Label>
            <select
              id="inquiryType"
              value={form.inquiryType}
              onChange={(e) => setForm((p) => ({ ...p, inquiryType: e.target.value as InquiryType }))}
              className="h-10 w-full rounded-md border border-slate-200 bg-white px-3 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30"
            >
              <option value="oem">굿즈 OEM/ODM</option>
              <option value="sourcing">중국 소싱</option>
              <option value="agency">구매대행</option>
              <option value="tour">소싱투어</option>
            </select>
          </div>

          <div className="md:col-span-2 space-y-2">
            <Label htmlFor="referenceLink">레퍼런스 이미지/링크</Label>
            <Input
              id="referenceLink"
              value={form.referenceLink}
              onChange={(e) => setForm((p) => ({ ...p, referenceLink: e.target.value }))}
              placeholder="예: 이미지 URL 또는 자료 링크"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="quantity">예상 수량</Label>
            <Input
              id="quantity"
              value={form.quantity}
              onChange={(e) => setForm((p) => ({ ...p, quantity: e.target.value }))}
              placeholder="예: 5000"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="budgetRange">목표 단가 범위(선택)</Label>
            <Input
              id="budgetRange"
              value={form.budgetRange}
              onChange={(e) => setForm((p) => ({ ...p, budgetRange: e.target.value }))}
              placeholder="예: 500~800원"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="desiredDeliveryDate">희망 납기</Label>
            <Input
              id="desiredDeliveryDate"
              type="date"
              value={form.desiredDeliveryDate}
              onChange={(e) => setForm((p) => ({ ...p, desiredDeliveryDate: e.target.value }))}
            />
          </div>
          <div className="space-y-2 md:col-span-2">
            <Label htmlFor="requiredOptions">필수 옵션(재질/사이즈/인쇄/포장)</Label>
            <Input
              id="requiredOptions"
              value={form.requiredOptions}
              onChange={(e) => setForm((p) => ({ ...p, requiredOptions: e.target.value }))}
              placeholder="예: A재질, 50mm, 로고 인쇄, 패키징 포함"
            />
          </div>

          <div className="space-y-2 md:col-span-2">
            <Label htmlFor="notes">기타 요구사항/제약조건</Label>
            <Textarea
              id="notes"
              value={form.notes}
              onChange={(e) => setForm((p) => ({ ...p, notes: e.target.value }))}
              placeholder="예: 무게/색상/마감, MOQ 제한, 납기 유연성 등"
            />
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="companyName">회사명</Label>
            <Input
              id="companyName"
              value={form.companyName}
              onChange={(e) => setForm((p) => ({ ...p, companyName: e.target.value }))}
              placeholder="예: ABC 주식회사"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="contactName">담당자명</Label>
            <Input
              id="contactName"
              value={form.contactName}
              onChange={(e) => setForm((p) => ({ ...p, contactName: e.target.value }))}
              placeholder="예: 홍길동"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">연락처</Label>
            <Input
              id="phone"
              value={form.phone}
              onChange={(e) => setForm((p) => ({ ...p, phone: e.target.value }))}
              placeholder="예: 010-0000-0000"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">이메일</Label>
            <Input
              id="email"
              type="email"
              value={form.email}
              onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
              placeholder="name@company.com"
            />
          </div>
        </div>

        {error ? <div className="rounded-md border border-rose-200 bg-rose-50 p-3 text-sm text-rose-800">{error}</div> : null}
        {success ? (
          <div className="rounded-md border border-emerald-200 bg-emerald-50 p-3 text-sm text-emerald-800">
            {success}
          </div>
        ) : null}

        <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="text-xs text-slate-500">
            아래 정보를 남겨주시면 확인 후 회신드리겠습니다.
          </div>
          <Button type="submit" disabled={!isReady || submitting} variant="default">
            {submitting ? "제출 중..." : "제출하기"}
          </Button>
        </div>
      </form>
    </Card>
  );
}

