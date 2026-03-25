import Container from "@/components/site/Container";
import SectionHeader from "@/components/site/SectionHeader";

export default function PrivacyPage() {
  return (
    <Container>
      <section className="py-12 md:py-16">
        <SectionHeader eyebrow="정책" title="개인정보처리방침" subtitle="초기에는 텍스트를 채워 넣고, 이후 실제 방침 문구로 교체합니다." />
        <div className="prose max-w-none text-sm text-slate-600">
          (추후 본문 입력)
        </div>
      </section>
    </Container>
  );
}

