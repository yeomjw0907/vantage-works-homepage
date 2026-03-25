# Vantageworks Homepage (Next.js + Supabase)

## 1) 환경변수 설정
프로젝트 루트에 `.env`를 만들고 `.env.example`을 기반으로 값을 채웁니다.

필수:
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY`

## 2) Supabase 초기 세팅
1. `supabase/schema.sql`을 Supabase SQL Editor에서 실행해 테이블/폴리시를 만듭니다.
2. Storage 버킷은 `supabase/storage.md` 가이드를 참고해 생성/권한을 설정합니다.
3. Supabase Auth 사용자 중 최소 1명을 `public.profiles.role='admin'`으로 만들어야 Admin 업로드가 동작합니다.

## 3) 로컬 실행
```bash
npm install
npm run dev
```

## 4) 주요 기능 경로
- 공개 홈페이지
  - `/` 홈
  - `/about` 회사소개
  - `/services` 서비스
  - `/portfolio` 포트폴리오
  - `/tour` 소싱투어(1:1)
  - `/faq` FAQ
  - `/contact` 문의하기
  - `/documents` 문서 다운로드(업로드 기반)
  - `/partners` 협력사 로고(업로드 기반)
- Admin
  - `/admin` 대시보드
  - `/admin/login` 로그인
  - `/admin/documents` 제안서(PDF) 업로드
  - `/admin/partners` 협력사 로고 업로드

