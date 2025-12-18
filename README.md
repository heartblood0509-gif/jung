# 황금반점 - 중식당 랜딩페이지 & 예약 시스템

30년 전통의 정통 중식당 홍보 및 온라인 예약이 가능한 랜딩페이지입니다.

## 주요 기능

- 🎨 **고급스러운 디자인**: 중식당의 품격을 담은 반응형 UI
- 📱 **모바일 최적화**: 모바일 퍼스트 디자인으로 모든 기기에서 완벽한 경험
- 📅 **실시간 예약 시스템**: 유효성 검증과 함께 제공되는 직관적인 예약 폼
- 🎯 **전환율 최적화**: 심리적 트리거와 플로팅 CTA로 예약 전환율 극대화
- ⭐ **고객 리뷰 섹션**: 사회적 증거를 통한 신뢰도 향상
- 🖼️ **갤러리**: 라이트박스 기능이 있는 인터랙티브 이미지 갤러리

## 기술 스택

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Form Validation**: React Hook Form + Zod
- **Database**: Supabase
- **Icons**: Lucide React
- **Animation**: Canvas Confetti

## 시작하기

### 1. 패키지 설치

```bash
npm install
```

### 2. 환경 변수 설정

`.env.example` 파일을 `.env.local`로 복사하고 Supabase 정보를 입력하세요:

```bash
cp .env.example .env.local
```

`.env.local` 파일:
```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### 3. Supabase 데이터베이스 설정

Supabase 프로젝트를 생성하고 다음 SQL을 실행하세요:

```sql
CREATE TABLE reservations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(50) NOT NULL,
  phone VARCHAR(20) NOT NULL,
  date DATE NOT NULL,
  time VARCHAR(10) NOT NULL,
  party_size INT NOT NULL,
  seat_type VARCHAR(20) NOT NULL,
  request TEXT,
  status VARCHAR(20) DEFAULT 'pending',
  created_at TIMESTAMP DEFAULT NOW()
);

-- 인덱스 추가
CREATE INDEX idx_reservations_date ON reservations(date);
CREATE INDEX idx_reservations_status ON reservations(status);
```

### 4. 개발 서버 실행

```bash
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 확인하세요.

## 배포

### Vercel 배포

1. Vercel에 프로젝트 연결
2. 환경 변수 설정 (Supabase URL, API Key)
3. 자동 배포 완료

```bash
vercel
```

## 프로젝트 구조

```
├── app/
│   ├── api/
│   │   └── reservation/
│   │       └── route.ts          # 예약 API 엔드포인트
│   ├── layout.tsx                 # 루트 레이아웃
│   └── page.tsx                   # 메인 페이지
├── components/
│   └── sections/
│       ├── Hero.tsx               # 히어로 섹션
│       ├── USPSection.tsx         # USP 소개 섹션
│       ├── MenuPreview.tsx        # 메뉴 미리보기
│       ├── Gallery.tsx            # 갤러리
│       ├── ReservationForm.tsx   # 예약 폼 (핵심)
│       ├── Reviews.tsx            # 고객 리뷰
│       ├── Map.tsx                # 오시는 길
│       ├── FloatingCTA.tsx        # 플로팅 CTA
│       └── Footer.tsx             # 푸터
├── lib/
│   ├── supabase.ts               # Supabase 클라이언트
│   └── validation.ts             # Zod 스키마
└── styles/
    └── globals.css               # 전역 스타일
```

## 핵심 섹션

### 1. Hero 섹션
- 고급스러운 배경 이미지
- 명확한 USP 메시지
- 즉시 예약 가능한 CTA 버튼

### 2. USP 섹션
- 가족룸, 코스요리, 점심특선 3가지 핵심 가치 강조
- 카드 형태의 시각적 디자인

### 3. 예약 폼
- React Hook Form + Zod를 활용한 강력한 유효성 검증
- 2단계 확인 프로세스 (확인 모달 → 완료 모달)
- Confetti 애니메이션으로 긍정적 피드백

### 4. 전환 최적화 요소
- 희소성: "가족룸 예약 마감 임박" 배지
- 긴급성: "점심특선 11:30-14:00 한정"
- 사회적 증거: 고객 리뷰, 평점, "이번 달 127팀 예약"
- 플로팅 CTA: 모바일 하단 고정, 데스크톱 우측 하단

## 커스터마이징

### 컬러 변경

`tailwind.config.ts`에서 브랜드 컬러를 변경할 수 있습니다:

```typescript
colors: {
  primary: {
    DEFAULT: "#C41E3A",  // 메인 레드
    dark: "#8B0000",     // 다크 레드
  },
  secondary: {
    DEFAULT: "#D4AF37",  // 골드
    light: "#F5F5DC",    // 베이지
  },
}
```

### 매장 정보 변경

각 컴포넌트 파일에서 매장 정보를 수정하세요:
- `Map.tsx`: 주소, 전화번호, 영업시간
- `Footer.tsx`: 사업자 정보
- `Hero.tsx`: 전화번호

## 성능 최적화

- ✅ Next.js 14 App Router 사용
- ✅ 이미지 lazy loading
- ✅ 클라이언트 컴포넌트 최소화
- ✅ Tailwind CSS로 최적화된 CSS

## 브라우저 지원

- Chrome (최신)
- Firefox (최신)
- Safari (최신)
- Edge (최신)

## 라이센스

MIT License

## 문의

프로젝트 관련 문의사항이 있으시면 이슈를 등록해주세요.
