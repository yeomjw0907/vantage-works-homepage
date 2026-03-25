import Container from "@/components/site/Container";
import SectionHeader from "@/components/site/SectionHeader";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";

const faqs = [
  {
    q: "MOQ(최소수량)는 어떻게 되나요?",
    a: "품목/공정/옵션에 따라 달라집니다. 기성 소싱은 비교적 유연하며, OEM·ODM은 금형/공정 여부에 따라 최소수량이 설정됩니다."
  },
  {
    q: "샘플 제작 기간은 어느 정도인가요?",
    a: "일반적으로 2~3주 범위에서 산정되며, 공정/자재/인쇄 난이도에 따라 변동될 수 있습니다."
  },
  {
    q: "양산 리드타임은 보통 어느 정도인가요?",
    a: "품목과 수량에 따라 상이하며, 샘플 승인 이후 양산 일정은 마일스톤 기준으로 역산하여 안내드립니다."
  },
  {
    q: "납기는 어떤 기준으로 산정하나요?",
    a: "납기일을 기준으로 선적/검수/포장/샘플 승인 등의 마일스톤을 역산해 일정표를 구성합니다."
  },
  {
    q: "검수는 어떤 범위까지 진행하나요?",
    a: "OK/NG 기준에 따라 외관/수량/포장 상태 등 합의된 범위 내에서 진행하며, 필요 시 증빙을 공유합니다."
  },
  {
    q: "포장/동봉/라벨 작업도 가능한가요?",
    a: "가능합니다. 다만 구성과 공정에 따라 작업 범위와 일정이 달라지므로 사전에 확정이 필요합니다."
  },
  {
    q: "중국 소싱만 의뢰할 수도 있나요?",
    a: "가능합니다. 후보 리스트 및 비교 정보를 제공하며, 필요 시 샘플 수배까지 연결 가능합니다."
  },
  {
    q: "구매대행은 어떤 방식으로 진행되나요?",
    a: "웨이하이 운영팀이 발주–검수–출고까지 관리합니다. 품목/수량/출고 방식에 따라 진행 범위를 협의합니다."
  },
  {
    q: "1:1 소싱투어는 어떤 고객에게 적합한가요?",
    a: "이우 현장에서 ‘결정’이 필요한 고객에게 적합합니다. 목적/품목/예산을 기반으로 동선을 맞춤 설계합니다."
  },
  {
    q: "진행 중 변경/추가 요청은 어떻게 관리되나요?",
    a: "납기와 품질에 영향을 주는 변경은 승인 절차로 관리합니다. 변경 시 일정/비용 영향까지 함께 안내드립니다."
  }
];

export default function FaqPage() {
  return (
    <Container>
      <section className="py-12 md:py-16">
        <SectionHeader eyebrow="FAQ" title="FAQ" subtitle="자주 묻는 질문에 대한 답변을 정리했습니다." />

        <Card className="p-6">
          <Accordion type="single" collapsible defaultValue={faqs[0]?.q}>
            {faqs.map((item) => (
              <AccordionItem key={item.q} value={item.q}>
                <AccordionTrigger>{item.q}</AccordionTrigger>
                <AccordionContent>{item.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Card>
      </section>
    </Container>
  );
}

