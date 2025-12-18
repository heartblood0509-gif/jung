"use client";

import { Phone } from "lucide-react";

export default function Hero() {
  const scrollToReservation = () => {
    const reservationSection = document.getElementById("reservation");
    reservationSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?q=80&w=2787&auto=format&fit=crop')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
      </div>

      {/* Content */}
      <div className="container-custom relative z-10 text-center text-white">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-secondary/20 backdrop-blur-sm border border-secondary/30 rounded-full px-6 py-2 mb-8">
            <span className="text-secondary text-sm font-semibold">
              30년 전통의 정통 중식
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="heading-primary text-white mb-6 animate-fade-in">
            특별한 날, <br className="sm:hidden" />
            특별한 중식
          </h1>

          {/* Subheadline - USP */}
          <p className="text-xl md:text-2xl text-gray-200 mb-4 leading-relaxed">
            가족룸 완비 · 셰프 특선 코스요리 · 점심특선 런치코스
          </p>

          <p className="text-base md:text-lg text-gray-300 mb-12 max-w-2xl mx-auto">
            소중한 분들과 함께하는 프라이빗한 공간에서 <br className="hidden sm:block" />
            정성껏 준비한 정통 중식 코스를 경험하세요
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={scrollToReservation}
              className="btn-primary w-full sm:w-auto text-lg"
            >
              지금 예약하기
            </button>

            <a
              href="tel:02-1234-5678"
              className="btn-secondary w-full sm:w-auto text-lg flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              <span>전화 문의</span>
            </a>
          </div>

          {/* Phone Number Display */}
          <div className="mt-8">
            <a
              href="tel:02-1234-5678"
              className="text-white/80 hover:text-white transition-colors text-lg font-medium inline-flex items-center gap-2"
            >
              <Phone className="w-5 h-5" />
              02-1234-5678
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-white/50 rounded-full" />
        </div>
      </div>
    </section>
  );
}
