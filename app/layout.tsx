import type { Metadata } from "next";
import { Noto_Sans_KR, Noto_Serif_KR } from "next/font/google";
import "@/styles/globals.css";

const notoSans = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-pretendard",
});

const notoSerif = Noto_Serif_KR({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-noto-serif",
});

export const metadata: Metadata = {
  title: "황금반점 - 30년 전통의 정통 중식당 | 가족룸 완비, 특선 코스요리",
  description:
    "특별한 날을 위한 프라이빗 가족룸과 셰프 특선 코스요리를 즐기세요. 점심특선 런치코스 ₩35,000부터. 서울 강남 역삼동 위치.",
  keywords: [
    "중식당",
    "가족룸",
    "코스요리",
    "점심특선",
    "강남맛집",
    "역삼동맛집",
    "북경오리",
    "중국요리",
    "예약",
  ],
  openGraph: {
    title: "황금반점 - 30년 전통의 정통 중식당",
    description: "가족룸 완비, 셰프 특선 코스요리로 특별한 순간을 만들어드립니다",
    type: "website",
    locale: "ko_KR",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className={`${notoSans.variable} ${notoSerif.variable}`}>
      <body className={notoSans.className}>{children}</body>
    </html>
  );
}
