import Container from "@/components/site/Container";
import SectionHeader from "@/components/site/SectionHeader";
import { Card } from "@/components/ui/card";

export default function ServicesPage() {
  return (
    <Container>
      <section className="py-12 md:py-16">
        <SectionHeader
          eyebrow="서비스"
          title="서비스"
          subtitle="굿즈 OEM을 중심으로 중국 소싱, 구매대행, 1:1 소싱투어까지 프로젝트 목적에 맞춰 선택할 수 있습니다."
        />

        <div className="space-y-8">
          <section id="oem">
            <Card className="p-6">
              <div className="text-lg font-bold text-slate-900">굿즈 OEM·ODM</div>
              <div className="mt-2 text-sm leading-7 text-slate-600">
                브랜드/리테일 납품용 굿즈를 샘플부터 출고까지 프로젝트 단위로 운영합니다.
              </div>
              <div className="mt-5">
                <div className="text-sm font-semibold text-slate-900">제공 범위</div>
                <ul className="mt-3 list-inside list-disc space-y-2 text-sm leading-6 text-slate-600">
                  <li>제품 기획 보완(옵션/포장/구성) 협의</li>
                  <li>공급처 매칭 및 샘플링</li>
                  <li>양산 일정 관리 및 변경 승인 프로세스</li>
                  <li>검수(OK/NG 기준) 및 증빙 관리</li>
                  <li>포장/동봉/라벨 작업(요청 시) 및 출고</li>
                </ul>
              </div>
              <div className="mt-5 text-sm font-semibold text-slate-900">
                빠르게 만드는 것보다, 흔들리지 않게 납품하는 방식으로 진행합니다.
              </div>
            </Card>
          </section>

          <section id="sourcing">
            <Card className="p-6">
              <div className="text-lg font-bold text-slate-900">중국 소싱</div>
              <div className="mt-2 text-sm leading-7 text-slate-600">
                기성 제품부터 OEM 제작까지, 목적과 조건에 맞는 공급처를 선별해 제안합니다.
              </div>
              <div className="mt-5">
                <div className="text-sm font-semibold text-slate-900">제공 범위</div>
                <ul className="mt-3 list-inside list-disc space-y-2 text-sm leading-6 text-slate-600">
                  <li>기성 vs 제작(금형/몰드 여부) 가능성 판단</li>
                  <li>후보 공급처 리스트업 및 비교(사양/단가/리드타임/리스크)</li>
                  <li>샘플 수배 및 후속 OEM 진행 연결</li>
                </ul>
              </div>
            </Card>
          </section>

          <section id="agency">
            <Card className="p-6">
              <div className="text-lg font-bold text-slate-900">구매대행(웨이하이)</div>
              <div className="mt-2 text-sm leading-7 text-slate-600">
                웨이하이 운영팀이 발주–검수–출고까지 흐름을 관리합니다.
              </div>
              <div className="mt-5">
                <div className="text-sm font-semibold text-slate-900">제공 범위(예시)</div>
                <ul className="mt-3 list-inside list-disc space-y-2 text-sm leading-6 text-slate-600">
                  <li>발주/수량 확인 및 일정 관리</li>
                  <li>검수 및 불량 확인(필요 시 증빙)</li>
                  <li>포장 및 출고 자료 정리</li>
                  <li>출고/송장 정보 공유</li>
                </ul>
              </div>
            </Card>
          </section>

          <section id="tour">
            <Card className="p-6">
              <div className="text-lg font-bold text-slate-900">1:1 소싱투어(이우)</div>
              <div className="mt-2 text-sm leading-7 text-slate-600">
                이우 방문 목적과 품목에 맞춰 동선·매장·공장 미팅까지 맞춤 설계합니다.
              </div>
              <div className="mt-5">
                <div className="text-sm font-semibold text-slate-900">제공 범위(예시)</div>
                <ul className="mt-3 list-inside list-disc space-y-2 text-sm leading-6 text-slate-600">
                  <li>사전 미팅: 목표 품목/예산/수량/리스크 포인트 정리</li>
                  <li>현장 동선 설계: 시장/매장/공장 미팅</li>
                  <li>후속 실행: 샘플 수배, 견적/발주 연결</li>
                </ul>
              </div>
            </Card>
          </section>
        </div>
      </section>
    </Container>
  );
}

