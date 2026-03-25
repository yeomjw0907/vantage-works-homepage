# Supabase Storage 버킷 가이드

Admin에서 업로드한 파일이 Public에서 노출되려면 Storage 설정이 필요합니다.

## 추천 버킷(3개)
1. `portfolio-images`
   - 목적: 포트폴리오 결과 이미지 업로드
   - 권한: (초기) Public read 권장
   - 저장 경로 규칙: `portfolio_images/{portfolio_case_id}/{sort_order}.jpg`

2. `partner-logos`
   - 목적: 협력사 로고 이미지 업로드
   - 권한: (초기) Public read 권장
   - 저장 경로 규칙: `partners/{id}.png`

3. `documents-proposals`
   - 목적: 제안서/PDF 업로드
   - 권한: (초기) Public read 권장
   - 저장 경로 규칙: `documents/{id}/{filename}.pdf`

## Public 노출 방식
- Public 페이지는 DB의 `is_published=true` 항목만 조회한 뒤,
- `storage_path`를 기반으로 Storage Public URL을 생성해서 이미지/다운로드 링크를 표시합니다.

## 보안(권장 다음 단계)
- 민감 문서가 있다면 Storage를 Private로 바꾸고 signed URL을 사용하는 방식으로 전환합니다.

