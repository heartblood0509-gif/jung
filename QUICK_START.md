# 빠른 시작 가이드

## 🚀 1분 안에 시작하기

### 1. 패키지 설치 완료 ✅
```bash
npm install  # 이미 완료됨
```

### 2. 개발 서버 실행 중 ✅
```bash
npm run dev  # 현재 http://localhost:3000 에서 실행 중
```

브라우저에서 [http://localhost:3000](http://localhost:3000) 접속하여 확인하세요!

## 📋 다음 단계

### Supabase 설정 (예약 시스템 활성화)

예약 기능을 사용하려면 Supabase를 설정해야 합니다:

1. **환경 변수 설정**
   ```bash
   cp .env.example .env.local
   ```

2. **.env.local 파일 수정**
   ```env
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url_here
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key_here
   ```

3. **자세한 설정 방법은 [SUPABASE_SETUP.md](./SUPABASE_SETUP.md) 참고**

## 🎨 주요 기능 미리보기

### 1. Hero 섹션
- 전체 화면 히어로 이미지
- CTA 버튼 클릭 → 예약 섹션으로 스크롤
- 전화번호 클릭 → 바로 전화 연결

### 2. USP 섹션
- 3가지 핵심 가치 제안
- 가족룸, 코스요리, 점심특선

### 3. 메뉴 미리보기
- 탭 UI로 3가지 메뉴 카테고리
- 점심특선 / 디너코스 / 단품메뉴

### 4. 갤러리
- 클릭하면 라이트박스 모달
- 좌우 네비게이션

### 5. 예약 폼 ⭐ (핵심)
- 실시간 유효성 검증
- 2단계 확인 프로세스
- Confetti 애니메이션

### 6. 고객 리뷰
- 캐러셀 형태
- 별점 + 리뷰 내용

### 7. 지도 & 오시는 길
- Google Maps 임베드
- 매장 정보 (주소, 전화번호, 영업시간)

### 8. 플로팅 CTA
- 모바일: 하단 고정 바
- 데스크톱: 우측 하단 플로팅 버튼

## 🛠️ 커스터마이징

### 매장 정보 변경

각 파일에서 매장 정보를 수정하세요:

1. **전화번호**:
   - [components/sections/Hero.tsx](components/sections/Hero.tsx) (2곳)
   - [components/sections/Map.tsx](components/sections/Map.tsx)
   - [components/sections/Footer.tsx](components/sections/Footer.tsx)
   - [components/sections/FloatingCTA.tsx](components/sections/FloatingCTA.tsx)

2. **주소 & 영업시간**:
   - [components/sections/Map.tsx](components/sections/Map.tsx)
   - [components/sections/Footer.tsx](components/sections/Footer.tsx)

3. **상호명 & 사업자 정보**:
   - [components/sections/Footer.tsx](components/sections/Footer.tsx)
   - [app/layout.tsx](app/layout.tsx) (SEO 메타데이터)

### 컬러 변경

[tailwind.config.ts](tailwind.config.ts)에서 브랜드 컬러 수정:

```typescript
colors: {
  primary: {
    DEFAULT: "#C41E3A",  // 원하는 메인 컬러
    dark: "#8B0000",
  },
  secondary: {
    DEFAULT: "#D4AF37",  // 원하는 서브 컬러
    light: "#F5F5DC",
  },
}
```

### 이미지 변경

각 섹션 컴포넌트에서 이미지 URL 수정:
- Hero: `components/sections/Hero.tsx`
- 메뉴: `components/sections/MenuPreview.tsx`
- 갤러리: `components/sections/Gallery.tsx`

## 📱 반응형 확인

개발자 도구(F12)를 열고 다양한 기기 크기로 테스트하세요:
- 모바일 (320px~)
- 태블릿 (768px~)
- 데스크톱 (1024px~)

## 🚢 배포

### Vercel 배포 (권장)

1. GitHub에 푸시
2. [Vercel](https://vercel.com)에서 Import
3. 환경 변수 설정
4. 자동 배포 완료

```bash
# 또는 Vercel CLI 사용
npm i -g vercel
vercel
```

## 📞 문의

프로젝트 관련 문의는 GitHub Issues에 등록해주세요.

---

**즐거운 코딩 되세요! 🎉**
