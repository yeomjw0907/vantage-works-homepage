import Container from "@/components/site/Container";
import SectionHeader from "@/components/site/SectionHeader";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { createSupabaseAnonClient } from "@/lib/supabase/anon";

export default async function DocumentsPage() {
  const supabase = createSupabaseAnonClient();
  let items: any[] = [];
  if (supabase) {
    const { data: docs } = await supabase
      .from("documents")
      .select("id,category,title,description,storage_path")
      .eq("is_published", true)
      .order("created_at", { ascending: false });

    items = docs ?? [];
  }

  return (
    <Container>
      <section className="py-12 md:py-16">
        <SectionHeader eyebrow="제안서" title="문서 다운로드" subtitle="공개된 제안서/PDF를 확인하고 다운로드할 수 있습니다." />

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {items.map((d) => {
            const imgUrl = supabase
              ? supabase.storage.from("documents-proposals").getPublicUrl(d.storage_path).data.publicUrl
              : "";

            return (
              <Card key={d.id} className="p-6">
                <div className="text-sm font-semibold text-primary">{d.category}</div>
                <div className="mt-2 text-base font-bold text-slate-900">{d.title}</div>
                {d.description ? <div className="mt-2 text-sm leading-6 text-slate-600">{d.description}</div> : null}
                <div className="mt-5">
                  <Button asChild variant="secondary">
                    <a href={imgUrl} target="_blank" rel="noreferrer">
                      다운로드
                    </a>
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>

        {items.length === 0 ? (
          <div className="mt-10 rounded-lg border border-slate-200 bg-slate-50 p-6 text-sm text-slate-600">
            현재 공개된 문서가 없습니다. Admin에서 `is_published=true`로 설정하면 노출됩니다.
          </div>
        ) : null}
      </section>
    </Container>
  );
}

