-- Vantageworks DB schema (Next.js + Supabase)
-- 실행 순서
-- 1) Auth 연결된 Supabase 프로젝트에서 SQL Editor 실행
-- 2) 반드시 profiles.role 관리 로직(관리자 생성)을 확인

-- profiles: 관리자 판별용
create table if not exists public.profiles (
  user_id uuid primary key references auth.users (id) on delete cascade,
  role text not null default 'viewer' check (role in ('admin', 'viewer')),
  created_at timestamptz not null default now()
);

-- inquiries: 문의 저장(공개 페이지에서 제출)
create table if not exists public.inquiries (
  id uuid primary key default gen_random_uuid(),
  type text not null check (type in ('oem', 'sourcing', 'agency', 'tour')),
  reference text null,
  quantity text null,
  budget_range text null,
  desired_delivery_date date null,
  required_options jsonb null,
  notes text null,
  company_name text not null,
  contact_name text not null,
  email text not null,
  phone text null,
  status text not null default 'new' check (status in ('new', 'reviewing', 'resolved')),
  created_at timestamptz not null default now()
);

-- portfolio_cases: 포트폴리오(업로드 메타)
create table if not exists public.portfolio_cases (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  project_type text not null,
  title text not null,
  summary text null,
  items text null,
  quantity_range text null,
  lead_time_range text null,
  management_points text null,
  highlights jsonb null,
  is_published boolean not null default false,
  created_at timestamptz not null default now()
);

-- portfolio_images: 포트폴리오 결과 이미지(업로드 파일 경로)
create table if not exists public.portfolio_images (
  id uuid primary key default gen_random_uuid(),
  portfolio_case_id uuid not null references public.portfolio_cases (id) on delete cascade,
  storage_path text not null,
  sort_order int not null default 0,
  alt text null,
  created_at timestamptz not null default now()
);

-- partners: 협력사 로고
create table if not exists public.partners (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  storage_path text not null,
  link_url text null,
  sort_order int not null default 0,
  is_published boolean not null default false,
  created_at timestamptz not null default now()
);

-- documents: 제안서/PDF
create table if not exists public.documents (
  id uuid primary key default gen_random_uuid(),
  category text not null,
  title text not null,
  slug text null unique,
  description text null,
  storage_path text not null,
  mime_type text null,
  file_size int null,
  is_published boolean not null default false,
  created_at timestamptz not null default now()
);

-- =========================
-- RLS (Row Level Security)
-- =========================

alter table public.profiles enable row level security;
alter table public.inquiries enable row level security;
alter table public.portfolio_cases enable row level security;
alter table public.portfolio_images enable row level security;
alter table public.partners enable row level security;
alter table public.documents enable row level security;

-- Admin 판별 헬퍼 조건(반복 사용)
-- exists(select 1 from profiles where profiles.user_id = auth.uid() and role='admin')

create policy "profiles_self_read"
on public.profiles
for select
to authenticated
using (user_id = auth.uid());

create policy "profiles_admin_update"
on public.profiles
for update
to authenticated
using (
  exists(
    select 1 from public.profiles p
    where p.user_id = auth.uid() and p.role = 'admin'
  )
);

-- inquiries: public insert는 차단, admin만 select
create policy "inquiries_admin_read"
on public.inquiries
for select
to authenticated
using (
  exists(
    select 1 from public.profiles p
    where p.user_id = auth.uid() and p.role = 'admin'
  )
);

-- portfolio_cases: public select는 is_published=true만
create policy "portfolio_cases_public_read"
on public.portfolio_cases
for select
to anon
using (is_published = true);

create policy "portfolio_cases_admin_write"
on public.portfolio_cases
for all
to authenticated
using (
  exists(
    select 1 from public.profiles p
    where p.user_id = auth.uid() and p.role = 'admin'
  )
)
with check (
  exists(
    select 1 from public.profiles p
    where p.user_id = auth.uid() and p.role = 'admin'
  )
);

-- portfolio_images: public select는 부모가 publish된 경우만
create policy "portfolio_images_public_read"
on public.portfolio_images
for select
to anon
using (
  exists(
    select 1 from public.portfolio_cases c
    where c.id = portfolio_case_id and c.is_published = true
  )
);

create policy "portfolio_images_admin_write"
on public.portfolio_images
for all
to authenticated
using (
  exists(
    select 1 from public.profiles p
    where p.user_id = auth.uid() and p.role = 'admin'
  )
)
with check (
  exists(
    select 1 from public.profiles p
    where p.user_id = auth.uid() and p.role = 'admin'
  )
);

-- partners: public select는 is_published=true만
create policy "partners_public_read"
on public.partners
for select
to anon
using (is_published = true);

create policy "partners_admin_write"
on public.partners
for all
to authenticated
using (
  exists(
    select 1 from public.profiles p
    where p.user_id = auth.uid() and p.role = 'admin'
  )
)
with check (
  exists(
    select 1 from public.profiles p
    where p.user_id = auth.uid() and p.role = 'admin'
  )
);

-- documents: public select는 is_published=true만
create policy "documents_public_read"
on public.documents
for select
to anon
using (is_published = true);

create policy "documents_admin_write"
on public.documents
for all
to authenticated
using (
  exists(
    select 1 from public.profiles p
    where p.user_id = auth.uid() and p.role = 'admin'
  )
)
with check (
  exists(
    select 1 from public.profiles p
    where p.user_id = auth.uid() and p.role = 'admin'
  )
);

