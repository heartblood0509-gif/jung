"use client";

import { Users, UtensilsCrossed, Clock } from "lucide-react";

const usps = [
  {
    icon: Users,
    title: "프라이빗 가족룸",
    subtitle: "소중한 분들과 프라이빗하게",
    description:
      "최대 12명까지 수용 가능한 독립된 가족룸에서 편안하고 여유로운 시간을 보내세요. 가족 모임, 비즈니스 미팅, 특별한 기념일에 완벽한 공간입니다.",
    features: ["최대 12명 수용", "독립된 프라이빗 공간", "예약 우선제"],
  },
  {
    icon: UtensilsCrossed,
    title: "셰프 특선 코스",
    subtitle: "셰프가 엄선한 정통 코스",
    description:
      "30년 경력의 셰프가 직접 엄선한 식재료로 만드는 정통 중식 코스. 전채부터 디저트까지 한 끼의 예술을 경험하세요.",
    features: ["전채 + 메인 + 디저트", "계절별 특선 메뉴", "₩80,000~"],
  },
  {
    icon: Clock,
    title: "점심특선 런치코스",
    subtitle: "런치타임 특별 혜택",
    description:
      "합리적인 가격으로 즐기는 프리미엄 런치코스. 평일 11:30-14:00 한정으로 제공되는 특별한 기회를 놓치지 마세요.",
    features: ["평일 11:30-14:00", "₩35,000~", "예약 필수"],
  },
];

export default function USPSection() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="heading-secondary text-gray-900 mb-4">
            왜 저희를 선택해야 할까요?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            특별한 순간을 더욱 특별하게 만들어드리는 세 가지 이유
          </p>
        </div>

        {/* USP Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {usps.map((usp, index) => {
            const Icon = usp.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                {/* Icon */}
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <Icon className="w-8 h-8 text-primary" />
                </div>

                {/* Title */}
                <h3 className="heading-tertiary text-gray-900 mb-2">
                  {usp.title}
                </h3>

                {/* Subtitle */}
                <p className="text-secondary font-semibold mb-4">
                  {usp.subtitle}
                </p>

                {/* Description */}
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {usp.description}
                </p>

                {/* Features */}
                <ul className="space-y-2">
                  {usp.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mr-3" />
                      <span className="text-sm font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 bg-primary/5 border border-primary/20 rounded-full px-6 py-3">
            <span className="text-primary font-semibold">
              💎 가족룸 예약 마감 임박
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
