import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/site/Footer";
import Header from "@/components/site/Header";

export const metadata: Metadata = {
  title: {
    default: "Vantageworks - 굿즈 제작/중국 소싱/운영 파트너",
    template: "%s | Vantageworks"
  },
  description: "굿즈 OEM·ODM | 중국 소싱 | 구매대행(웨이하이) | 1:1 소싱투어(이우)"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>
        <div className="min-h-screen bg-white">
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}

