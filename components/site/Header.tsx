import Link from "next/link";
import { ArrowRight } from "lucide-react";

const navItems = [
  { href: "/", label: "홈" },
  { href: "/about", label: "회사소개" },
  { href: "/services", label: "서비스" },
  { href: "/portfolio", label: "포트폴리오" },
  { href: "/tour", label: "소싱투어(1:1)" },
  { href: "/faq", label: "FAQ" }
];

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="text-lg font-semibold tracking-tight text-primary">
          Vantageworks
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm font-medium text-slate-700 hover:text-slate-900">
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-semibold text-white hover:bg-primary/90"
          >
            문의하기
            <ArrowRight className="h-4 w-4" />
          </Link>
        </nav>

        {/* 모바일: 추후 Sheet로 확장(현재는 접근 가능한 기본 링크 노출) */}
        <div className="flex items-center gap-3 md:hidden">
          <Link href="/contact" className="rounded-md border border-slate-200 px-3 py-2 text-sm font-semibold text-slate-900">
            문의
          </Link>
        </div>
      </div>
    </header>
  );
}

