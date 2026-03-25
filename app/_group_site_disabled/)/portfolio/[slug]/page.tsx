import { notFound } from "next/navigation";
import Container from "@/components/site/Container";
import SectionHeader from "@/components/site/SectionHeader";
import { Card } from "@/components/ui/card";
import { createSupabaseAnonClient } from "@/lib/supabase/anon";

export default async function PortfolioDetailPage({ params }: { params: { slug: string } }) {
  const supabase = createSupabaseAnonClient();
  if (!supabase) notFound();

  const { data: portfolioCase, error } = await supabase
    .from("portfolio_cases")
    .select("id,slug,project_type,title,summary,items,quantity_range,lead_time_range,management_points")
    .eq("slug", params.slug)
    .eq("is_published", true)
    .maybeSingle();

  if (error || !portfolioCase) notFound();

  const { data: images } = await supabase
    .from("portfolio_images")
    .select("storage_path,sort_order,alt")
    .eq("portfolio_case_id", portfolioCase.id)
    .order("sort_order", { ascending: true });

  return (
    <Container>
      <section className="py-12 md:py-16">
        <SectionHeader
          eyebrow={portfolioCase.project_type}
          title={portfolioCase.title}
          subtitle="목적 → 구성 → 일정 흐름 → 관리 포인트 → 결과 이미지 순서로 공유합니다."
        />

        <div className="grid gap-4 md:grid-cols-2">
          <Card className="p-6">
            <div className="text-sm font-semibold text-slate-900">목적</div>
            <div className="mt-3 text-sm leading-7 text-slate-600">
              {portfolioCase.summary ?? "업로드된 포트폴리오 케이스 요약을 표시합니다."}
            </div>
          </Card>
          <Card className="p-6">
            <div className="text-sm font-semibold text-slate-900">제품 구성</div>
            <div className="mt-3 text-sm leading-7 text-slate-600">
              {portfolioCase.items ? `품목: ${portfolioCase.items}` : "-"}
            </div>
          </Card>
          <Card className="p-6 md:col-span-2">
            <div className="text-sm font-semibold text-slate-900">일정 흐름</div>
            <div className="mt-3 text-sm leading-7 text-slate-600">
              샘플/양산 리드타임 범위: {portfolioCase.lead_time_range ?? "-"}
              <br />
              수량 범위: {portfolioCase.quantity_range ?? "-"}
            </div>
          </Card>
          <Card className="p-6 md:col-span-2">
            <div className="text-sm font-semibold text-slate-900">관리 포인트</div>
            <div className="mt-3 text-sm leading-7 text-slate-600">
              {portfolioCase.management_points ?? "-"}
            </div>
          </Card>
        </div>

        {/* 결과 이미지 영역(업로드 시 연결) */}
        <div className="mt-6">
          <Card className="p-6">
            <div className="text-sm font-semibold text-slate-900">결과 이미지</div>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {(images ?? []).map((img, idx) => (
                <div
                  key={`${img.storage_path}-${idx}`}
                  className="h-36 rounded-lg border border-slate-200 bg-slate-50"
                  aria-label={img.alt ?? "portfolio image"}
                >
                  {/* 실제 이미지 노출은 추후 Signed URL/Next Image 연결 */}
                  <div className="flex h-full items-center justify-center text-xs font-semibold text-slate-500">
                    {`IMG ${idx + 1}`}
                  </div>
                </div>
              ))}
              {(!images || images.length === 0) ? (
                <div className="h-36 rounded-lg border border-slate-200 bg-slate-50" aria-label="result placeholder" />
              ) : null}
            </div>
            <div className="mt-3 text-xs text-slate-500">
              * 실제 구현 시, Admin 업로드 이미지가 이 영역에 순차적으로 노출됩니다.
            </div>
          </Card>
        </div>
      </section>
    </Container>
  );
}

