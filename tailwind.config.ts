import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Pretendard",
          "Noto Sans KR",
          "Apple SD Gothic Neo",
          "Segoe UI",
          "system-ui",
          "sans-serif"
        ]
      },
      colors: {
        // 토큰은 프로젝트에서 직접 사용(향후 로고 컬러로 교체 가능)
        primary: "#0F2A3A",
        accent: "#1BA6A6"
      }
    }
  },
  plugins: []
};

export default config;

