"use client";

import { useState, useEffect } from "react";
import { Calendar, Phone, X } from "lucide-react";

export default function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [showPhoneMenu, setShowPhoneMenu] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToReservation = () => {
    const reservationSection = document.getElementById("reservation");
    reservationSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Mobile Fixed Bottom Bar */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-gray-200 shadow-2xl">
        <div className="grid grid-cols-2 gap-px bg-gray-200">
          <button
            onClick={() => window.open("tel:02-1234-5678", "_self")}
            className="flex items-center justify-center gap-2 bg-white hover:bg-gray-50 active:bg-gray-100 py-4 font-semibold text-gray-900 transition-colors"
          >
            <Phone className="w-5 h-5" />
            <span>전화하기</span>
          </button>
          <button
            onClick={scrollToReservation}
            className="flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark active:bg-primary-dark py-4 font-semibold text-white transition-colors"
          >
            <Calendar className="w-5 h-5" />
            <span>예약하기</span>
          </button>
        </div>
      </div>

      {/* Desktop Floating Buttons */}
      <div
        className={`hidden lg:block fixed right-6 bottom-6 z-40 transition-all duration-300 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
        }`}
      >
        <div className="flex flex-col gap-3">
          {/* Phone Button with Menu */}
          <div className="relative">
            {showPhoneMenu && (
              <div className="absolute right-full mr-3 bottom-0 bg-white rounded-lg shadow-2xl p-4 w-64 animate-fade-in">
                <button
                  onClick={() => setShowPhoneMenu(false)}
                  className="absolute top-2 right-2 w-6 h-6 flex items-center justify-center text-gray-400 hover:text-gray-600"
                >
                  <X className="w-4 h-4" />
                </button>

                <div className="pt-4">
                  <div className="text-sm text-gray-600 mb-2">전화 문의</div>
                  <a
                    href="tel:02-1234-5678"
                    className="block text-lg font-bold text-primary hover:text-primary-dark mb-4"
                  >
                    02-1234-5678
                  </a>
                  <div className="text-xs text-gray-500 border-t border-gray-100 pt-3">
                    평일/주말: 11:30 - 22:00<br />
                    정기휴무: 월요일
                  </div>
                </div>
              </div>
            )}

            <button
              onClick={() => setShowPhoneMenu(!showPhoneMenu)}
              className="w-14 h-14 bg-secondary hover:bg-secondary/90 rounded-full shadow-lg hover:shadow-2xl flex items-center justify-center transition-all transform hover:scale-110 group"
            >
              <Phone className="w-6 h-6 text-gray-900 group-hover:animate-bounce" />
            </button>
          </div>

          {/* Reservation Button */}
          <button
            onClick={scrollToReservation}
            className="w-14 h-14 bg-primary hover:bg-primary-dark rounded-full shadow-lg hover:shadow-2xl flex items-center justify-center transition-all transform hover:scale-110 group"
          >
            <Calendar className="w-6 h-6 text-white group-hover:animate-bounce" />
          </button>
        </div>
      </div>
    </>
  );
}
