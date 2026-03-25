import Container from "@/components/site/Container";
import SectionHeader from "@/components/site/SectionHeader";
import { Card } from "@/components/ui/card";
import { createSupabaseAnonClient } from "@/lib/supabase/anon";

export default async function PartnersPage() {
  const supabase = createSupabaseAnonClient();
  let items: any[] = [];
  if (supabase) {
    const { data: partners } = await supabase
      .from("partners")
      .select("id,name,storage_path,link_url,sort_order")
      .eq("is_published", true)
      .order("sort_order", { ascending: true });

    items = partners ?? [];
  }

  return (
    <Container>
      <section className="py-12 md:py-16">
        <SectionHeader eyebrow="협력사" title="협력사 로고" subtitle="업로드한 협력사 로고를 공개 화면에서 확인할 수 있습니다." />

        <div className="grid gap-4 md:grid-cols-3">
          {items.map((p) => {
            const img = supabase
              ? supabase.storage.from("partner-logos").getPublicUrl(p.storage_path).data.publicUrl
              : "";
            const content = (
              <Card key={p.id} className="p-5">
                <div className="flex h-20 items-center justify-center">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={img} alt={p.name} className="max-h-12 w-auto object-contain" />
                </div>
              </Card>
            );
            if (p.link_url) {
              return (
                <a key={p.id} href={p.link_url} target="_blank" rel="noreferrer" className="block">
                  {content}
                </a>
              );
            }
            return <div key={p.id}>{content}</div>;
          })}
        </div>
      </section>
    </Container>
  );
}

