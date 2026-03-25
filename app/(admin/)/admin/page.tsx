import Link from "next/link";
import { Card } from "@/components/ui/card";

export default function AdminDashboardPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12">
      <Card className="p-6 md:p-10">
        <div className="text-2xl font-bold tracking-tight text-slate-900">Admin 대시보드</div>
        <div className="mt-3 text-sm leading-7 text-slate-600">
          현재는 업로드 UI 골격을 시작 단계로 제공합니다. 실제 업로드는 아래 API가 관리자만 허용하며, Public 노출은 `is_published=true`로 제어됩니다.
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <Link href="/admin/documents" className="rounded-lg border border-slate-200 bg-slate-50 p-4 text-left text-sm text-slate-700 hover:bg-slate-100">
            <div className="font-semibold text-slate-900">1) 제안서(PDF) 업로드</div>
            <div className="mt-1">문서 분류/공개 여부/업로드 파일을 관리합니다.</div>
          </Link>
          <Link href="/admin/partners" className="rounded-lg border border-slate-200 bg-slate-50 p-4 text-left text-sm text-slate-700 hover:bg-slate-100">
            <div className="font-semibold text-slate-900">2) 협력사 로고 업로드</div>
            <div className="mt-1">로고 이미지/공개 여부/링크를 관리합니다.</div>
          </Link>
          <div className="rounded-lg border border-slate-200 bg-slate-50 p-4 text-left text-sm text-slate-700">
            <div className="font-semibold text-slate-900">3) 포트폴리오 케이스/이미지 관리</div>
            <div className="mt-1">다음 단계에서 케이스 생성/이미지 업로드 UI를 추가할 예정입니다.</div>
          </div>
        </div>
      </Card>
    </div>
  );
}

