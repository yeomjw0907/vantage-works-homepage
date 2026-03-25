import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-slate-200 bg-white">
      <div className="mx-auto w-full max-w-6xl px-4 py-10">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <div className="text-sm font-semibold text-slate-900">회사정보</div>
            <div className="mt-3 space-y-2 text-sm text-slate-600">
              <div>주소: (추후 입력)</div>
              <div>연락처: (추후 입력)</div>
              <div>
                이메일:{" "}
                <a className="underline" href="mailto:contact@vantageworks.kr">
                  contact@vantageworks.kr
                </a>
              </div>
            </div>
          </div>

          <div>
            <div className="text-sm font-semibold text-slate-900">서비스 빠른 링크</div>
            <div className="mt-3 flex flex-col gap-2 text-sm text-slate-600">
              <Link href="/services#oem" className="hover:text-slate-900">
                굿즈 OEM·ODM
              </Link>
              <Link href="/services#sourcing" className="hover:text-slate-900">
                중국 소싱
              </Link>
              <Link href="/services#agency" className="hover:text-slate-900">
                구매대행(웨이하이)
              </Link>
              <Link href="/services#tour" className="hover:text-slate-900">
                1:1 소싱투어(이우)
              </Link>
            </div>
          </div>

          <div>
            <div className="text-sm font-semibold text-slate-900">정책</div>
            <div className="mt-3 flex flex-col gap-2 text-sm text-slate-600">
              <Link href="/privacy" className="hover:text-slate-900">
                개인정보처리방침
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8 text-xs text-slate-500">
          © {new Date().getFullYear()} Vantageworks. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

