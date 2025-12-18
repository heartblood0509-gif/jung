"use client";

import { useState } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

interface Review {
  name: string;
  rating: number;
  date: string;
  content: string;
  occasion?: string;
}

const reviews: Review[] = [
  {
    name: "김**",
    rating: 5,
    date: "2024-12-10",
    content: "부모님 생신으로 가족룸 예약했는데 정말 만족스러웠습니다. 음식도 맛있고 서비스도 훌륭했어요. 특히 북경오리구이가 일품이었습니다!",
    occasion: "가족 모임",
  },
  {
    name: "이**",
    rating: 5,
    date: "2024-12-08",
    content: "점심특선 코스 먹으러 갔는데 가성비가 정말 좋아요. 이 가격에 이 퀄리티라니 놀랍습니다. 다음엔 디너코스도 먹어보고 싶네요.",
    occasion: "비즈니스 미팅",
  },
  {
    name: "박**",
    rating: 5,
    date: "2024-12-05",
    content: "결혼기념일로 방문했습니다. 가족룸이 프라이빗해서 좋았고, 셰프님이 직접 코스 설명해주셔서 더 특별했어요. 적극 추천합니다!",
    occasion: "기념일",
  },
  {
    name: "최**",
    rating: 5,
    date: "2024-12-01",
    content: "30년 전통이 느껴지는 맛입니다. 요즘 중식당이 많이 사라지는데, 이런 곳이 계속 있어줘서 고맙네요. 단골 확정!",
    occasion: "가족 모임",
  },
  {
    name: "정**",
    rating: 5,
    date: "2024-11-28",
    content: "회사 회식으로 다녀왔는데 모두 만족했습니다. 가족룸이 넓어서 편하게 식사할 수 있었고, 음식도 푸짐하고 맛있었어요.",
    occasion: "회식",
  },
];

export default function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const averageRating = (reviews.reduce((acc, r) => acc + r.rating, 0) / reviews.length).toFixed(1);

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="heading-secondary text-gray-900 mb-4">고객 후기</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
            특별한 순간을 함께한 고객님들의 생생한 후기
          </p>

          {/* Rating Summary */}
          <div className="inline-flex items-center gap-4 bg-white rounded-full px-8 py-4 shadow-md">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-secondary text-secondary" />
              ))}
            </div>
            <div>
              <span className="text-3xl font-bold text-gray-900">{averageRating}</span>
              <span className="text-gray-600 ml-2">({reviews.length}개 후기)</span>
            </div>
          </div>
        </div>

        {/* Review Carousel */}
        <div className="max-w-4xl mx-auto relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevReview}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 w-12 h-12 bg-white rounded-full shadow-lg hover:shadow-xl flex items-center justify-center transition-all hover:scale-110 z-10"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </button>

          <button
            onClick={nextReview}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 w-12 h-12 bg-white rounded-full shadow-lg hover:shadow-xl flex items-center justify-center transition-all hover:scale-110 z-10"
          >
            <ChevronRight className="w-6 h-6 text-gray-700" />
          </button>

          {/* Review Card */}
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-primary font-bold text-xl">
                    {reviews[currentIndex].name.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="font-bold text-gray-900 text-lg">
                    {reviews[currentIndex].name}
                  </div>
                  <div className="text-gray-500 text-sm">
                    {reviews[currentIndex].date}
                  </div>
                </div>
              </div>

              {reviews[currentIndex].occasion && (
                <span className="bg-secondary/20 text-gray-700 px-4 py-2 rounded-full text-sm font-medium">
                  {reviews[currentIndex].occasion}
                </span>
              )}
            </div>

            {/* Rating */}
            <div className="flex items-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-5 h-5 ${
                    i < reviews[currentIndex].rating
                      ? "fill-secondary text-secondary"
                      : "text-gray-300"
                  }`}
                />
              ))}
            </div>

            {/* Content */}
            <p className="text-gray-700 text-lg leading-relaxed">
              "{reviews[currentIndex].content}"
            </p>
          </div>

          {/* Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? "w-8 bg-primary"
                    : "w-2 bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Platform Badges */}
        <div className="mt-16 flex flex-wrap justify-center gap-8 items-center">
          <div className="bg-white rounded-xl px-8 py-4 shadow-md flex items-center gap-3">
            <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">N</span>
            </div>
            <div>
              <div className="text-sm text-gray-600">네이버</div>
              <div className="font-bold text-gray-900">4.8 / 5.0</div>
            </div>
          </div>

          <div className="bg-white rounded-xl px-8 py-4 shadow-md flex items-center gap-3">
            <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center">
              <span className="text-gray-900 font-bold text-xl">K</span>
            </div>
            <div>
              <div className="text-sm text-gray-600">카카오</div>
              <div className="font-bold text-gray-900">4.7 / 5.0</div>
            </div>
          </div>

          <div className="bg-white rounded-xl px-8 py-4 shadow-md">
            <div className="text-sm text-gray-600 mb-1">이번 달 예약</div>
            <div className="font-bold text-gray-900 text-2xl">127팀</div>
          </div>
        </div>
      </div>
    </section>
  );
}
