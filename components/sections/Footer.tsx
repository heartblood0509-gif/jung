"use client";

import { Instagram, Facebook, Youtube, MapPin, Phone, Clock } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer */}
      <div className="container-custom py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold font-serif text-white mb-4">
              황금반점
            </h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              30년 전통의 정통 중식당으로 특별한 날을 더욱 특별하게 만들어드립니다.
            </p>
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-primary rounded-full flex items-center justify-center transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-primary rounded-full flex items-center justify-center transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-primary rounded-full flex items-center justify-center transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">연락처</h4>
            <div className="space-y-3">
              <a
                href="tel:02-1234-5678"
                className="flex items-start gap-3 hover:text-white transition-colors"
              >
                <Phone className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-medium">02-1234-5678</div>
                  <div className="text-sm text-gray-400">예약 및 문의</div>
                </div>
              </a>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-white font-semibold mb-4">영업시간</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-medium">평일/주말</div>
                  <div className="text-sm text-gray-400">11:30 - 22:00</div>
                  <div className="text-sm text-gray-400 mt-1">
                    브레이크타임: 15:00 - 17:00
                  </div>
                  <div className="text-sm text-primary mt-2">
                    정기휴무: 월요일
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Location */}
          <div>
            <h4 className="text-white font-semibold mb-4">오시는 길</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-medium mb-1">
                    서울특별시 강남구<br />
                    테헤란로 123 (역삼동)
                  </div>
                  <div className="text-sm text-gray-400">
                    지하철 2호선 역삼역<br />
                    3번 출구 도보 5분
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-wrap gap-6 justify-center text-sm">
            <a href="#menu" className="hover:text-white transition-colors">
              메뉴
            </a>
            <a href="#reservation" className="hover:text-white transition-colors">
              예약
            </a>
            <a href="#location" className="hover:text-white transition-colors">
              오시는 길
            </a>
            <a href="/privacy" className="hover:text-white transition-colors">
              개인정보처리방침
            </a>
            <a href="/terms" className="hover:text-white transition-colors">
              이용약관
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 bg-gray-950">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
            <div className="text-center md:text-left">
              <div className="mb-2">
                <span className="font-semibold">상호명:</span> 황금반점 |
                <span className="ml-2 font-semibold">대표:</span> 홍길동 |
                <span className="ml-2 font-semibold">사업자등록번호:</span> 123-45-67890
              </div>
              <div>
                <span className="font-semibold">주소:</span> 서울특별시 강남구 테헤란로 123 (역삼동)
              </div>
            </div>
            <div className="text-center md:text-right">
              <div>&copy; {currentYear} 황금반점. All rights reserved.</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
