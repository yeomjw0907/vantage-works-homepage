import Container from "@/components/site/Container";
import SectionHeader from "@/components/site/SectionHeader";
import ContactForm from "@/components/contact/ContactForm";

export default function ContactPage() {
  return (
    <Container>
      <section className="py-12 md:py-16">
        <SectionHeader
          eyebrow="문의하기"
          title="문의하기"
          subtitle="프로젝트 조건에 맞춰 가능 범위와 일정부터 정리해드립니다. 아래 정보를 남겨주시면 확인 후 회신드리겠습니다."
        />

        <ContactForm />
      </section>
    </Container>
  );
}

