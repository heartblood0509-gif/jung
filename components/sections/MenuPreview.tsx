"use client";

import { useState } from "react";
import { ChevronRight } from "lucide-react";

type MenuTab = "lunch" | "dinner" | "alacarte";

interface MenuItem {
  name: string;
  description: string;
  price: string;
  image: string;
}

const menuData: Record<MenuTab, MenuItem[]> = {
  lunch: [
    {
      name: "프리미엄 런치 A코스",
      description: "전채 2종 + 해물탕수육 + 볶음밥 + 디저트",
      price: "₩35,000",
      image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=500&q=80",
    },
    {
      name: "프리미엄 런치 B코스",
      description: "전채 2종 + 깐풍기 + 짜장면 + 디저트",
      price: "₩38,000",
      image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=500&q=80",
    },
    {
      name: "프리미엄 런치 C코스",
      description: "전채 3종 + 랍스터요리 + 볶음밥 + 디저트",
      price: "₩55,000",
      image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=500&q=80",
    },
  ],
  dinner: [
    {
      name: "디너 스페셜 A코스",
      description: "전채 4종 + 랍스터 + 북경오리 + 볶음밥 + 디저트",
      price: "₩80,000",
      image: "https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?w=500&q=80",
    },
    {
      name: "디너 스페셜 B코스",
      description: "전채 4종 + 전복요리 + 특선해물탕 + 볶음밥 + 디저트",
      price: "₩95,000",
      image: "https://images.unsplash.com/photo-1559314809-0d155014e29e?w=500&q=80",
    },
    {
      name: "VIP 프리미엄 코스",
      description: "전채 5종 + 랍스터 + 전복 + 북경오리 + 특선면 + 디저트",
      price: "₩150,000",
      image: "https://images.unsplash.com/photo-1581299894007-aaa50297cf16?w=500&q=80",
    },
  ],
  alacarte: [
    {
      name: "북경오리구이",
      description: "바삭한 오리구이와 특제 소스",
      price: "₩45,000",
      image: "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?w=500&q=80",
    },
    {
      name: "랍스터 광동식",
      description: "신선한 랍스터를 광동식으로",
      price: "시가",
      image: "https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?w=500&q=80",
    },
    {
      name: "해물탕수육",
      description: "새우, 오징어가 들어간 탕수육",
      price: "₩38,000",
      image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=500&q=80",
    },
    {
      name: "특제 짜장면",
      description: "30년 전통의 비법 짜장소스",
      price: "₩12,000",
      image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=500&q=80",
    },
  ],
};

const tabs: { id: MenuTab; label: string; badge?: string }[] = [
  { id: "lunch", label: "점심특선", badge: "인기" },
  { id: "dinner", label: "디너코스" },
  { id: "alacarte", label: "단품메뉴" },
];

export default function MenuPreview() {
  const [activeTab, setActiveTab] = useState<MenuTab>("lunch");

  return (
    <section id="menu" className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="heading-secondary text-gray-900 mb-4">메뉴</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            정성껏 준비한 다양한 메뉴를 만나보세요
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-12 gap-2 flex-wrap">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTab === tab.id
                  ? "bg-primary text-white shadow-lg scale-105"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {tab.label}
              {tab.badge && (
                <span className="ml-2 text-xs bg-secondary text-gray-900 px-2 py-0.5 rounded-full">
                  {tab.badge}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {menuData[activeTab].map((item, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center transform group-hover:scale-110 transition-transform duration-500"
                  style={{ backgroundImage: `url('${item.image}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                {/* Price Badge */}
                <div className="absolute bottom-4 right-4 bg-secondary text-gray-900 px-4 py-2 rounded-full font-bold shadow-lg">
                  {item.price}
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                  {item.name}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <button className="inline-flex items-center gap-2 bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
            전체 메뉴 보기
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
