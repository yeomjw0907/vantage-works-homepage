import Link from "next/link";
import Container from "@/components/site/Container";
import SectionHeader from "@/components/site/SectionHeader";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { createSupabaseAnonClient } from "@/lib/supabase/anon";

export default async function PortfolioPage() {
  const supabase = createSupabaseAnonClient();
  let items: any[] = [];
  if (supabase) {
    const { data: cases, error } = await supabase
      .from("portfolio_cases")
      .select(
        "id,slug,project_type,title,items,quantity_range,lead_time_range,management_points"
      )
      .eq("is_published", true)
      .order("created_at", { ascending: false });

    // 초기 단계에서는 데이터가 없을 수 있으므로 에러를 조용히 처리합니다.
    items = !error && cases ? cases : [];
  }

  return (
    <Container>
      <section className="py-12 md:py-16">
        <SectionHeader
          eyebrow="포트폴리오"
          title="포트폴리오"
          subtitle="업종 및 프로젝트 유형별 진행 사례와 결과를 공유합니다. 사진·상세 사례는 순차적으로 업데이트됩니다."
        />

        <div className="grid gap-4 md:grid-cols-3">
          {items.map((c) => (
            <Card key={c.slug} className="overflow-hidden p-0">
              <div className="h-28 bg-slate-50" aria-hidden />
              <div className="p-5">
                <div className="text-sm font-semibold text-slate-900">{c.project_type}</div>
                <div className="mt-3 space-y-2 text-sm text-slate-600">
                  <div>품목: {c.items ?? "-"}</div>
                  <div>수량 범위: {c.quantity_range ?? "-"}</div>
                  <div>리드타임 범위: {c.lead_time_range ?? "-"}</div>
                  <div>관리 포인트: {c.management_points ?? "-"}</div>
                </div>
                <div className="mt-4">
                  <Button asChild variant="secondary" size="sm" className="w-full">
                    <Link href={`/portfolio/${c.slug}`}>상세 보기</Link>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </Container>
  );
}

