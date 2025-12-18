"use client";

import { MapPin, Phone, Clock, Navigation, Car } from "lucide-react";

export default function Map() {
  const businessInfo = {
    name: "황금반점",
    address: "서울특별시 강남구 테헤란로 123 (역삼동)",
    phone: "02-1234-5678",
    hours: {
      weekday: "11:30 - 22:00",
      weekend: "11:30 - 22:00",
      holiday: "월요일 휴무",
    },
    parking: "건물 내 주차 가능 (2시간 무료)",
  };

  const openMap = () => {
    // 카카오맵 또는 네이버맵으로 연결
    window.open(
      `https://map.kakao.com/link/search/${encodeURIComponent(businessInfo.address)}`,
      "_blank"
    );
  };

  return (
    <section id="location" className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="heading-secondary text-gray-900 mb-4">오시는 길</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            편안한 방문을 위한 위치 안내
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Map Embed */}
          <div className="order-2 lg:order-1">
            <div className="relative w-full h-[400px] bg-gray-200 rounded-2xl overflow-hidden shadow-lg">
              {/* 실제 구현시 카카오맵 또는 네이버맵 API 사용 */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3165.0830098316!2d127.03285231531762!3d37.498679479809106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca15a1f799b55%3A0x30ff7f90bb13a83e!2z6rCV64Ko6rWsIOyXreyEvOuPhQ!5e0!3m2!1sko!2skr!4v1234567890123!5m2!1sko!2skr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Restaurant Location Map"
              />
            </div>

            {/* Map Action Button */}
            <button
              onClick={openMap}
              className="mt-4 w-full flex items-center justify-center gap-2 bg-secondary hover:bg-secondary/90 text-gray-900 py-4 px-6 rounded-lg font-semibold transition-all shadow-md hover:shadow-lg"
            >
              <Navigation className="w-5 h-5" />
              길찾기
            </button>
          </div>

          {/* Contact Information */}
          <div className="order-1 lg:order-2 space-y-6">
            {/* Restaurant Name */}
            <div className="bg-gradient-to-br from-primary to-primary-dark text-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-3xl font-bold font-serif mb-2">
                {businessInfo.name}
              </h3>
              <p className="text-gray-200">30년 전통의 정통 중식당</p>
            </div>

            {/* Address */}
            <div className="bg-gray-50 p-6 rounded-xl">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="text-sm text-gray-600 mb-1">주소</div>
                  <div className="font-semibold text-gray-900 text-lg">
                    {businessInfo.address}
                  </div>
                  <div className="text-sm text-gray-500 mt-2">
                    지하철 2호선 역삼역 3번 출구 도보 5분
                  </div>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="bg-gray-50 p-6 rounded-xl">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="text-sm text-gray-600 mb-1">전화번호</div>
                  <a
                    href={`tel:${businessInfo.phone}`}
                    className="font-semibold text-gray-900 text-lg hover:text-primary transition-colors"
                  >
                    {businessInfo.phone}
                  </a>
                  <div className="text-sm text-gray-500 mt-2">
                    예약 및 문의 가능
                  </div>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="bg-gray-50 p-6 rounded-xl">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="text-sm text-gray-600 mb-3">영업시간</div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-700">평일/주말</span>
                      <span className="font-semibold text-gray-900">
                        {businessInfo.hours.weekday}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-700">정기휴무</span>
                      <span className="font-semibold text-primary">
                        {businessInfo.hours.holiday}
                      </span>
                    </div>
                  </div>
                  <div className="text-sm text-gray-500 mt-3 pt-3 border-t border-gray-200">
                    브레이크타임: 15:00 - 17:00
                  </div>
                </div>
              </div>
            </div>

            {/* Parking */}
            <div className="bg-gray-50 p-6 rounded-xl">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Car className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="text-sm text-gray-600 mb-1">주차 안내</div>
                  <div className="font-semibold text-gray-900 text-lg">
                    {businessInfo.parking}
                  </div>
                  <div className="text-sm text-gray-500 mt-2">
                    발레파킹 서비스 제공
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
