# Supabase 설정 가이드

이 문서는 예약 시스템을 위한 Supabase 데이터베이스 설정 방법을 안내합니다.

## 1. Supabase 프로젝트 생성

1. [Supabase](https://supabase.com)에 접속하여 계정 생성/로그인
2. "New Project" 버튼 클릭
3. 프로젝트 정보 입력:
   - Name: `chinese-restaurant` (원하는 이름)
   - Database Password: 안전한 비밀번호 입력
   - Region: `Northeast Asia (Seoul)` 선택 (한국 서버)
4. "Create new project" 클릭

## 2. 데이터베이스 테이블 생성

### 방법 1: SQL Editor 사용 (권장)

1. 좌측 사이드바에서 "SQL Editor" 클릭
2. "New query" 클릭
3. 아래 SQL 코드를 복사하여 붙여넣기:

```sql
-- 예약 테이블 생성
CREATE TABLE reservations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(50) NOT NULL,
  phone VARCHAR(20) NOT NULL,
  date DATE NOT NULL,
  time VARCHAR(10) NOT NULL,
  party_size INT NOT NULL CHECK (party_size >= 2 AND party_size <= 20),
  seat_type VARCHAR(20) NOT NULL CHECK (seat_type IN ('hall', 'private')),
  request TEXT,
  status VARCHAR(20) DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'cancelled')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 날짜별 인덱스 (빠른 조회를 위해)
CREATE INDEX idx_reservations_date ON reservations(date);

-- 상태별 인덱스
CREATE INDEX idx_reservations_status ON reservations(status);

-- 생성일시별 인덱스
CREATE INDEX idx_reservations_created_at ON reservations(created_at DESC);

-- RLS (Row Level Security) 활성화
ALTER TABLE reservations ENABLE ROW LEVEL SECURITY;

-- 공개 읽기 권한 (필요한 경우)
CREATE POLICY "Enable insert for authenticated users only" ON reservations
  FOR INSERT
  WITH CHECK (true);

-- 예약 조회 권한 (관리자용 - 필요시 수정)
CREATE POLICY "Enable read access for all users" ON reservations
  FOR SELECT
  USING (true);
```

4. "Run" 버튼 클릭하여 실행

### 방법 2: Table Editor 사용

1. 좌측 사이드바에서 "Table Editor" 클릭
2. "Create a new table" 클릭
3. 테이블 이름: `reservations`
4. 다음 컬럼들을 추가:

| 컬럼명 | 타입 | 기본값 | 제약조건 |
|--------|------|--------|----------|
| id | uuid | gen_random_uuid() | Primary Key |
| name | varchar(50) | - | Not Null |
| phone | varchar(20) | - | Not Null |
| date | date | - | Not Null |
| time | varchar(10) | - | Not Null |
| party_size | int4 | - | Not Null, Check: >= 2 AND <= 20 |
| seat_type | varchar(20) | - | Not Null, Check: IN ('hall', 'private') |
| request | text | - | Nullable |
| status | varchar(20) | 'pending' | Check: IN ('pending', 'confirmed', 'cancelled') |
| created_at | timestamptz | now() | Not Null |

## 3. API 키 확인

1. 좌측 사이드바에서 "Settings" > "API" 클릭
2. 다음 정보를 확인:
   - **Project URL**: `https://xxxxx.supabase.co`
   - **anon public key**: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...`

## 4. 환경 변수 설정

프로젝트 루트 디렉토리에 `.env.local` 파일 생성:

```env
NEXT_PUBLIC_SUPABASE_URL=https://xxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

⚠️ **주의**: 실제 값으로 교체하세요!

## 5. 테스트

### Supabase Dashboard에서 테스트

1. "Table Editor" > "reservations" 테이블 선택
2. "Insert row" 클릭하여 테스트 데이터 추가:

```json
{
  "name": "홍길동",
  "phone": "010-1234-5678",
  "date": "2024-12-25",
  "time": "18:00",
  "party_size": 4,
  "seat_type": "private",
  "request": "창가 자리 부탁드립니다",
  "status": "pending"
}
```

3. 데이터가 정상적으로 추가되는지 확인

### 애플리케이션에서 테스트

1. 개발 서버 실행: `npm run dev`
2. 브라우저에서 예약 폼 작성 및 제출
3. Supabase Dashboard의 "Table Editor"에서 데이터 확인

## 6. 보안 설정 (선택)

### RLS (Row Level Security) 정책 추가

관리자만 모든 데이터를 볼 수 있도록 설정하려면:

```sql
-- 기존 정책 삭제
DROP POLICY IF EXISTS "Enable read access for all users" ON reservations;

-- 인증된 사용자만 조회 가능
CREATE POLICY "Enable read access for authenticated users" ON reservations
  FOR SELECT
  USING (auth.role() = 'authenticated');

-- 또는 특정 이메일만 허용
CREATE POLICY "Enable read access for admin" ON reservations
  FOR SELECT
  USING (auth.email() = 'admin@example.com');
```

## 7. 예약 관리 (옵션)

### 예약 상태 업데이트

```sql
-- 예약 확정
UPDATE reservations
SET status = 'confirmed'
WHERE id = 'reservation-uuid-here';

-- 예약 취소
UPDATE reservations
SET status = 'cancelled'
WHERE id = 'reservation-uuid-here';
```

### 예약 조회 쿼리 예시

```sql
-- 오늘의 예약 조회
SELECT * FROM reservations
WHERE date = CURRENT_DATE
ORDER BY time;

-- 대기 중인 예약 조회
SELECT * FROM reservations
WHERE status = 'pending'
ORDER BY created_at DESC;

-- 가족룸 예약 조회
SELECT * FROM reservations
WHERE seat_type = 'private'
AND date >= CURRENT_DATE
ORDER BY date, time;
```

## 8. 알림 설정 (고급)

Supabase Database Webhooks를 사용하여 새 예약 시 알림을 받을 수 있습니다:

1. "Database" > "Webhooks" 클릭
2. "Create a new hook" 클릭
3. 설정:
   - Name: `new_reservation_notification`
   - Table: `reservations`
   - Events: `INSERT`
   - Type: `HTTP Request`
   - URL: 알림을 받을 엔드포인트 (Slack, Discord, Email 서비스 등)

## 문제 해결

### 연결 오류

- `.env.local` 파일이 올바른 위치에 있는지 확인
- 환경 변수명이 정확한지 확인 (`NEXT_PUBLIC_` 접두사 필수)
- 개발 서버 재시작

### 권한 오류

- RLS 정책이 올바르게 설정되었는지 확인
- anon key를 사용하는지 확인 (service_role key 아님)

### 데이터 삽입 오류

- 테이블 스키마가 정확한지 확인
- 필수 필드가 모두 입력되었는지 확인
- CHECK 제약조건을 만족하는지 확인

## 추가 리소스

- [Supabase 공식 문서](https://supabase.com/docs)
- [Supabase JavaScript 클라이언트](https://supabase.com/docs/reference/javascript/introduction)
- [Row Level Security 가이드](https://supabase.com/docs/guides/auth/row-level-security)
