import Container from "@/components/site/Container";
import SectionHeader from "@/components/site/SectionHeader";
import { Card } from "@/components/ui/card";

export default function AboutPage() {
  return (
    <Container>
      <section className="py-12 md:py-16">
        <SectionHeader
          eyebrow="운영으로 완성되는 중국 제작 파트너"
          title="운영으로 완성되는 중국 제작 파트너"
          subtitle={
            "밴티지웍스는 굿즈 OEM을 중심으로 중국 소싱, 구매대행, 현장 소싱투어까지 제공합니다.\n" +
            "한국 사무실에서 기획과 커뮤니케이션을 정리하고, 중국 현지 조직이 실행을 맡아 프로젝트를 안정적으로 운영합니다."
          }
        />

        <div className="grid gap-4 md:grid-cols-2">
          <Card className="p-6">
            <div className="text-sm font-semibold text-slate-900">브랜드 스토리</div>
            <div className="mt-3 whitespace-pre-line text-sm leading-7 text-slate-600">
              굿즈 제작은 작은 선택들이 겹치며 결과가 달라집니다. 재질, 인쇄, 포장, 납기 같은 결정이 흔들리면 프로젝트 전체가 불안정해집니다.\n
              밴티지웍스는 ‘공장 연결’이 아니라 ‘프로젝트 운영’에 초점을 맞춰, 샘플부터 출고까지 기준과 기록을 남기며 진행합니다. 같은 방식으로 일을 끝내는 것이 가장 강한 신뢰라고 믿습니다.
            </div>
          </Card>

          <Card className="p-6">
            <div className="text-sm font-semibold text-slate-900">조직 구조(3축 운영)</div>
            <div className="mt-3 space-y-4">
              <div>
                <div className="text-sm font-semibold text-slate-900">한국사무실</div>
                <div className="mt-1 text-sm leading-6 text-slate-600">프로젝트 요건 정리, 일정 확정, 고객 커뮤니케이션</div>
              </div>
              <div>
                <div className="text-sm font-semibold text-slate-900">이우사무실</div>
                <div className="mt-1 text-sm leading-6 text-slate-600">공급처 선별, 샘플/양산 커뮤니케이션, 현장 이슈 대응</div>
              </div>
              <div>
                <div className="text-sm font-semibold text-slate-900">웨이하이 사무실</div>
                <div className="mt-1 text-sm leading-6 text-slate-600">구매대행, 검수, 포장, 출고 운영</div>
              </div>
            </div>
          </Card>
        </div>

        <div className="mt-12">
          <SectionHeader eyebrow="일하는 방식" title="프로세스" subtitle="요건 정리 → 샘플링 → 양산 → 검수 → 출고 흐름으로 운영합니다." />
          <div className="grid gap-4 md:grid-cols-5">
            {[
              ["요건 정리", "목적/수량/예산/납기/필수 옵션 확정"],
              ["샘플링", "기준 샘플 제작 및 승인 관리"],
              ["양산", "변경 사항 승인 절차로 관리"],
              ["검수", "OK/NG 기준으로 확인 및 증빙"],
              ["출고", "포장/동봉/자료 공유 후 출고"]
            ].map(([t, d]) => (
              <Card key={t} className="p-5">
                <div className="text-sm font-semibold text-slate-900">{t}</div>
                <div className="mt-2 text-sm leading-6 text-slate-600">{d}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </Container>
  );
}

