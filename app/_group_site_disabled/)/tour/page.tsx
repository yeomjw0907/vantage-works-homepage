import Container from "@/components/site/Container";
import SectionHeader from "@/components/site/SectionHeader";
import { Card } from "@/components/ui/card";

export default function TourPage() {
  return (
    <Container>
      <section className="py-12 md:py-16">
        <SectionHeader
          eyebrow="1:1 맞춤 소싱투어"
          title="1:1 맞춤 소싱투어"
          subtitle="이우 현장에서 ‘보고 끝나는 투어’가 아니라, 필요한 품목을 ‘결정’하는 투어를 설계합니다. 목적과 조건에 맞춰 동선과 미팅을 구성하고, 후속 실행까지 연결합니다."
        />

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {[
            { title: "사전 정리", desc: "목표 품목/예산/수량/필수 조건 확인" },
            { title: "현장 진행", desc: "매장·공장 미팅, 샘플/견적 포인트 체크" },
            { title: "후속 실행", desc: "샘플 수배, 견적 정리, 발주/생산 연결(필요 시)" }
          ].map((s) => (
            <Card key={s.title} className="p-6">
              <div className="text-sm font-semibold text-slate-900">{s.title}</div>
              <div className="mt-3 text-sm leading-7 text-slate-600">{s.desc}</div>
            </Card>
          ))}
        </div>

        <div className="mt-12">
          <SectionHeader
            eyebrow="추천 대상"
            title="이런 분께 적합합니다"
            subtitle="목표가 명확하고, 후속 실행까지 연결하고 싶을 때 가장 효과적입니다."
          />

          <div className="grid gap-4 md:grid-cols-2">
            <Card className="p-6">
              <div className="text-sm font-semibold text-slate-900">발주/제작까지 연결하고 싶은 경우</div>
              <div className="mt-3 text-sm leading-7 text-slate-600">
                이우 방문 목적이 명확하고 실제 발주·제작까지 연결하고 싶은 경우에 적합합니다.
              </div>
            </Card>
            <Card className="p-6">
              <div className="text-sm font-semibold text-slate-900">동선/우선순위 정리가 필요한 경우</div>
              <div className="mt-3 text-sm leading-7 text-slate-600">
                품목이 많아 동선/우선순위를 정리하고 싶을 때, 맞춤 설계로 진행합니다.
              </div>
            </Card>
            <Card className="p-6 md:col-span-2">
              <div className="text-sm font-semibold text-slate-900">OEM 가능성까지 확인하고 싶은 경우</div>
              <div className="mt-3 text-sm leading-7 text-slate-600">
                기성 소싱이 아닌 OEM 가능성을 확인하고, 후속 실행까지 연결하고 싶은 분들께 추천합니다.
              </div>
            </Card>
          </div>
        </div>
      </section>
    </Container>
  );
}

