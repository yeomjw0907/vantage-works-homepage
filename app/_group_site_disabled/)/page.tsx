import Link from "next/link";
import { CheckCircle2, ShieldCheck, Truck, Workflow } from "lucide-react";

import Container from "@/components/site/Container";
import SectionHeader from "@/components/site/SectionHeader";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function HomePage() {
  return (
    <Container>
      {/* Hero */}
      <section className="pt-12 md:pt-16">
        <div className="grid gap-8 md:grid-cols-2 md:items-center">
          <div>
            <Badge variant="default">One Team 운영</Badge>

            <h1 className="mt-4 text-3xl font-bold leading-[1.25] tracking-tight text-slate-900 md:text-5xl">
              굿즈 제작부터 중국 소싱, OEM·ODM까지 한 팀으로 운영합니다.
            </h1>

            <p className="mt-5 text-base leading-relaxed text-slate-700 md:text-lg">
              한국 사무실에서 기획·커뮤니케이션을 정리하고, 중국 현지 조직이 실행을 맡습니다.
              <br />
              이우 소싱, 제작관리팀과 웨이하이 구매대행 전담팀이 샘플–양산–검수–출고까지 흐름을 끊김 없이 관리합니다.
            </p>

            <div className="mt-5 text-sm font-semibold text-primary md:text-base">
              굿즈 OEM·ODM | 중국 소싱 | 구매대행(웨이하이) | 1:1 소싱투어(이우)
            </div>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button asChild variant="default">
                <Link href="/contact">문의하기</Link>
              </Button>
              <Button asChild variant="secondary">
                <Link href="/services">서비스 보기</Link>
              </Button>
            </div>

            <div className="mt-4 text-sm text-slate-600">
              프로젝트는 ‘연결’이 아니라 ‘운영’으로 완성됩니다.
            </div>
          </div>

          {/* Visual (placeholder) */}
          <Card className="relative overflow-hidden p-6 md:p-8">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/10" />
            <div className="relative">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-lg border border-slate-200 bg-white">
                  <Workflow className="h-5 w-5 text-primary" />
                </div>
                <div className="text-sm font-semibold text-slate-900">운영 체계</div>
              </div>

              <div className="mt-5 grid gap-4">
                <div className="rounded-lg border border-slate-200 bg-white p-4">
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 grid h-8 w-8 place-items-center rounded-md bg-slate-50">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-slate-900">한국 사무실</div>
                      <div className="mt-1 text-sm leading-6 text-slate-600">
                        기획·커뮤니케이션 정리, 요구사항과 일정 확정
                      </div>
                    </div>
                  </div>
                </div>

                <div className="rounded-lg border border-slate-200 bg-white p-4">
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 grid h-8 w-8 place-items-center rounded-md bg-slate-50">
                      <ShieldCheck className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-slate-900">이우 사무실</div>
                      <div className="mt-1 text-sm leading-6 text-slate-600">
                        전문 소싱·공장 핸들링, 샘플/생산 커뮤니케이션
                      </div>
                    </div>
                  </div>
                </div>

                <div className="rounded-lg border border-slate-200 bg-white p-4">
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 grid h-8 w-8 place-items-center rounded-md bg-slate-50">
                      <Truck className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-slate-900">웨이하이 사무실</div>
                      <div className="mt-1 text-sm leading-6 text-slate-600">
                        구매대행·검수·출고 운영, 리스크 관리 포함
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 text-xs font-semibold text-slate-600">
                * 비주얼은 향후 포트폴리오 이미지/프로세스 그래픽으로 치환합니다.
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* 3축 운영 체계 */}
      <section className="mt-16 md:mt-24">
        <SectionHeader
          eyebrow="핵심 차별"
          title="한 번 맡기면, 각 팀이 역할대로 움직입니다."
          subtitle="한국 사무실은 요구사항을, 이우와 웨이하이는 현지 실행을 책임집니다."
        />

        <div className="grid gap-4 md:grid-cols-3">
          <Card className="p-6">
            <div className="text-sm font-semibold text-slate-900">한국 사무실</div>
            <div className="mt-2 text-sm leading-7 text-slate-600">
              기획·커뮤니케이션: 요구사항 정리, 일정 확정, 진행 상황 공유
            </div>
          </Card>
          <Card className="p-6">
            <div className="text-sm font-semibold text-slate-900">이우 사무실</div>
            <div className="mt-2 text-sm leading-7 text-slate-600">
              전문 소싱·공장 핸들링: 공급처 선별, 샘플링, 생산 커뮤니케이션
            </div>
          </Card>
          <Card className="p-6">
            <div className="text-sm font-semibold text-slate-900">웨이하이 사무실</div>
            <div className="mt-2 text-sm leading-7 text-slate-600">
              구매대행·검수·출고 운영: 발주/검수/포장/출고, 리스크 관리
            </div>
          </Card>
        </div>
      </section>

      {/* 리스크 제거 */}
      <section className="mt-16 md:mt-24">
        <SectionHeader
          eyebrow="리스크 제거"
          title="납기와 품질이 흔들리는 지점을 먼저 줄입니다."
          subtitle="샘플-양산의 차이, 납기 변동, 커뮤니케이션 누락을 운영 기준으로 관리합니다."
        />

        <div className="grid gap-4 md:grid-cols-2">
          <Card className="p-6">
            <div className="text-sm font-semibold text-slate-900">샘플–양산 차이</div>
            <div className="mt-2 text-sm leading-7 text-slate-600">
              스펙 확정·승인 기준으로 관리
            </div>
          </Card>
          <Card className="p-6">
            <div className="text-sm font-semibold text-slate-900">납기 변동</div>
            <div className="mt-2 text-sm leading-7 text-slate-600">
              마일스톤 기반 역산 타임라인으로 관리
            </div>
          </Card>
          <Card className="p-6 md:col-span-2">
            <div className="text-sm font-semibold text-slate-900">커뮤니케이션 누락</div>
            <div className="mt-2 text-sm leading-7 text-slate-600">
              현지 실행 조직 + 증빙 중심 리포트로 관리
            </div>
          </Card>
        </div>
      </section>

      {/* 서비스 요약 4개 카드 */}
      <section className="mt-16 md:mt-24">
        <SectionHeader eyebrow="서비스" title="서비스" subtitle="샘플부터 출고까지, 목적에 맞춰 운영합니다." />

        <div className="grid gap-4 md:grid-cols-2">
          <Card className="p-6">
            <div className="text-sm font-semibold text-slate-900">굿즈 OEM·ODM</div>
            <div className="mt-2 text-sm leading-7 text-slate-600">
              샘플–양산–검수–출고까지 프로젝트 단위 운영
            </div>
          </Card>
          <Card className="p-6">
            <div className="text-sm font-semibold text-slate-900">중국 소싱</div>
            <div className="mt-2 text-sm leading-7 text-slate-600">
              기성/제작 분기, 공급처 선별, 단가·납기 범위 제안
            </div>
          </Card>
          <Card className="p-6">
            <div className="text-sm font-semibold text-slate-900">구매대행(웨이하이)</div>
            <div className="mt-2 text-sm leading-7 text-slate-600">
              발주–검수–출고 관리(운영팀 기반)
            </div>
          </Card>
          <Card className="p-6">
            <div className="text-sm font-semibold text-slate-900">1:1 소싱투어(이우)</div>
            <div className="mt-2 text-sm leading-7 text-slate-600">
              방문 목적/품목 중심 동선·매장·공장 미팅 맞춤 설계
            </div>
          </Card>
        </div>
      </section>

      {/* 포트폴리오 프리뷰 */}
      <section className="mt-16 md:mt-24">
        <SectionHeader
          eyebrow="포트폴리오"
          title="실제 납품 사례를 기반으로 운영합니다."
          subtitle="업종·프로젝트 유형별 진행 사례와 결과를 공유합니다. 포트폴리오는 순차적으로 업데이트됩니다."
        />

        <div className="grid gap-4 md:grid-cols-3">
          {[
            { projectType: "리테일 굿즈", items: "키링·뱃지·패키징", qty: "수천~수만 EA", lead: "샘플 2~3주 / 양산 3~5주" },
            { projectType: "프로모션 굿즈", items: "마그넷·스티커·동봉 구성", qty: "수천~수만 EA", lead: "샘플 2~3주 / 양산 3~5주" },
            { projectType: "브랜드 굿즈", items: "브랜딩 패키징 + QC 기준", qty: "수천~수만 EA", lead: "샘플 2~3주 / 양산 3~5주" }
          ].map((c) => (
            <Card key={c.projectType} className="overflow-hidden p-0">
              <div className="h-36 border-b border-slate-200 bg-slate-50" aria-hidden />
              <div className="p-5">
                <div className="text-sm font-semibold text-slate-900">{c.projectType}</div>
                <div className="mt-2 space-y-1 text-sm text-slate-600">
                  <div>품목: {c.items}</div>
                  <div>수량 범위: {c.qty}</div>
                  <div>리드타임 범위: {c.lead}</div>
                </div>
                <div className="mt-4">
                  <Button asChild variant="secondary" size="sm">
                    <Link href="/portfolio">포트폴리오 보기</Link>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* 운영 기준 Proof */}
      <section className="mt-16 md:mt-24">
        <SectionHeader
          eyebrow="Proof"
          title="프로젝트 운영 기준"
          subtitle="마일스톤/OKNG/증빙 기반으로 흔들리지 않게 운영합니다."
        />

        <div className="grid gap-4 md:grid-cols-2">
          <Card className="p-6">
            <div className="text-sm font-semibold text-slate-900">마일스톤 기반 일정 관리</div>
            <div className="mt-2 text-sm leading-7 text-slate-600">역산 타임라인으로 진행</div>
          </Card>
          <Card className="p-6">
            <div className="text-sm font-semibold text-slate-900">OK/NG 기준 검수</div>
            <div className="mt-2 text-sm leading-7 text-slate-600">증빙 중심으로 기록 관리</div>
          </Card>
          <Card className="p-6 md:col-span-2">
            <div className="text-sm font-semibold text-slate-900">이슈 발생 시 즉시 공유 및 대안 제시</div>
            <div className="mt-2 text-sm leading-7 text-slate-600">현지 실행 조직 기반 핸들링</div>
          </Card>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="mt-16 md:mt-24 pb-16">
        <Card className="relative overflow-hidden p-8 md:p-10">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-accent/10" aria-hidden />
          <div className="relative">
            <div className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
              굿즈 OEM 또는 중국 소싱이 필요하신가요?
            </div>
            <div className="mt-3 text-sm leading-7 text-slate-700 md:text-base">
              프로젝트 조건에 맞춰 가능 범위와 일정부터 정리해드립니다.
            </div>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Button asChild variant="default" size="lg">
                <Link href="/contact">문의하기</Link>
              </Button>
              <Button asChild variant="secondary" size="lg">
                <Link href="/portfolio">포트폴리오 보기</Link>
              </Button>
            </div>
          </div>
        </Card>
      </section>
    </Container>
  );
}

