"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function AdminDocumentsUploadPage() {
  const [category, setCategory] = useState("proposal");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [slug, setSlug] = useState("");
  const [is_published, setIsPublished] = useState(true);
  const [file, setFile] = useState<File | null>(null);

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    try {
      if (!file) throw new Error("PDF 파일을 선택해 주세요.");

      const formData = new FormData();
      formData.append("file", file);
      formData.append("category", category);
      formData.append("title", title);
      formData.append("description", description);
      if (slug.trim()) formData.append("slug", slug.trim());
      formData.append("is_published", String(is_published));

      const res = await fetch("/api/admin/documents/upload", {
        method: "POST",
        body: formData
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body?.message || "업로드 실패");
      }

      setMessage("업로드가 완료되었습니다.");
      setTitle("");
      setDescription("");
      setSlug("");
      setFile(null);
      setIsPublished(true);
    } catch (err) {
      setMessage(err instanceof Error ? err.message : "알 수 없는 오류가 발생했습니다.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <Card className="p-6 md:p-10">
        <div className="text-2xl font-bold tracking-tight text-slate-900">제안서(PDF) 업로드</div>
        <div className="mt-2 text-sm leading-6 text-slate-600">
          업로드된 문서는 `is_published=true`일 때만 공개 화면에서 노출됩니다.
        </div>

        <form onSubmit={onSubmit} className="mt-8 space-y-5">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="category">카테고리</Label>
              <Input id="category" value={category} onChange={(e) => setCategory(e.target.value)} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="is_published">공개 여부</Label>
              <select
                id="is_published"
                value={String(is_published)}
                onChange={(e) => setIsPublished(e.target.value === "true")}
                className="h-10 w-full rounded-md border border-slate-200 bg-white px-3 text-sm"
              >
                <option value="true">공개</option>
                <option value="false">비공개</option>
              </select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="title">제목</Label>
            <Input id="title" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="예: 밴티지웍스 제안서" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="description">설명(선택)</Label>
            <Input
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="예: 상담 시 제공되는 기본 제안서"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="slug">슬러그(선택)</Label>
            <Input id="slug" value={slug} onChange={(e) => setSlug(e.target.value)} placeholder="예: proposal-basic" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="file">PDF 파일</Label>
            <Input
              id="file"
              type="file"
              accept="application/pdf"
              onChange={(e) => setFile(e.target.files?.[0] ?? null)}
            />
          </div>

          {message ? (
            <div className="rounded-md border border-slate-200 bg-slate-50 p-3 text-sm text-slate-700">{message}</div>
          ) : null}

          <div className="flex justify-end">
            <Button type="submit" disabled={loading}>
              {loading ? "업로드 중..." : "업로드"}
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );
}

