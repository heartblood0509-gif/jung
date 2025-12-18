"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { reservationSchema, type ReservationFormData } from "@/lib/validation";
import { Calendar, Clock, Users, Home, MessageSquare, CheckCircle } from "lucide-react";
import confetti from "canvas-confetti";

const timeSlots = [
  "11:30", "12:00", "12:30", "13:00", "13:30", "14:00",
  "17:00", "17:30", "18:00", "18:30", "19:00", "19:30", "20:00", "20:30", "21:00"
];

const partySizes = Array.from({ length: 19 }, (_, i) => i + 2); // 2-20명

export default function ReservationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [formData, setFormData] = useState<ReservationFormData | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm<ReservationFormData>({
    resolver: zodResolver(reservationSchema),
    defaultValues: {
      seatType: "hall",
    },
  });

  const selectedDate = watch("date");
  const selectedTime = watch("time");
  const selectedPartySize = watch("partySize");
  const selectedSeatType = watch("seatType");

  const onSubmit = (data: ReservationFormData) => {
    setFormData(data);
    setShowConfirmModal(true);
  };

  const confirmReservation = async () => {
    if (!formData) return;

    setIsSubmitting(true);
    setShowConfirmModal(false);

    try {
      const response = await fetch("/api/reservation", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          date: formData.date,
          time: formData.time,
          party_size: formData.partySize,
          seat_type: formData.seatType,
          request: formData.request || "",
        }),
      });

      if (!response.ok) {
        throw new Error("예약 접수에 실패했습니다");
      }

      // Success
      setShowSuccessModal(true);
      reset();

      // Confetti animation
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      });
    } catch (error) {
      alert("예약 접수 중 오류가 발생했습니다. 다시 시도해주세요.");
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const getTodayDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  return (
    <>
      <section id="reservation" className="section-padding bg-gradient-to-br from-primary-dark via-primary to-primary-dark text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-12">
              <h2 className="heading-secondary mb-4">예약하기</h2>
              <p className="text-lg text-gray-200">
                특별한 순간을 위한 예약, 지금 바로 시작하세요
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit(onSubmit)} className="bg-white rounded-2xl p-8 md:p-10 shadow-2xl">
              <div className="space-y-6">
                {/* Name */}
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    예약자명 <span className="text-primary">*</span>
                  </label>
                  <input
                    {...register("name")}
                    type="text"
                    placeholder="홍길동"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-gray-900"
                  />
                  {errors.name && (
                    <p className="text-primary text-sm mt-1">{errors.name.message}</p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    연락처 <span className="text-primary">*</span>
                  </label>
                  <input
                    {...register("phone")}
                    type="tel"
                    placeholder="010-1234-5678"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-gray-900"
                  />
                  {errors.phone && (
                    <p className="text-primary text-sm mt-1">{errors.phone.message}</p>
                  )}
                </div>

                {/* Date & Time */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      <Calendar className="w-4 h-4 inline mr-1" />
                      예약 날짜 <span className="text-primary">*</span>
                    </label>
                    <input
                      {...register("date")}
                      type="date"
                      min={getTodayDate()}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-gray-900"
                    />
                    {errors.date && (
                      <p className="text-primary text-sm mt-1">{errors.date.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      <Clock className="w-4 h-4 inline mr-1" />
                      예약 시간 <span className="text-primary">*</span>
                    </label>
                    <select
                      {...register("time")}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-gray-900"
                    >
                      <option value="">시간 선택</option>
                      {timeSlots.map((time) => (
                        <option key={time} value={time}>
                          {time}
                        </option>
                      ))}
                    </select>
                    {errors.time && (
                      <p className="text-primary text-sm mt-1">{errors.time.message}</p>
                    )}
                  </div>
                </div>

                {/* Party Size */}
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    <Users className="w-4 h-4 inline mr-1" />
                    인원수 <span className="text-primary">*</span>
                  </label>
                  <select
                    {...register("partySize", { valueAsNumber: true })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-gray-900"
                  >
                    <option value="">인원 선택</option>
                    {partySizes.map((size) => (
                      <option key={size} value={size}>
                        {size}명
                      </option>
                    ))}
                  </select>
                  {errors.partySize && (
                    <p className="text-primary text-sm mt-1">{errors.partySize.message}</p>
                  )}
                </div>

                {/* Seat Type */}
                <div>
                  <label className="block text-gray-700 font-semibold mb-3">
                    <Home className="w-4 h-4 inline mr-1" />
                    좌석 유형 <span className="text-primary">*</span>
                  </label>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <label className="relative flex items-center p-4 border-2 border-gray-300 rounded-lg cursor-pointer hover:border-primary transition-all">
                      <input
                        {...register("seatType")}
                        type="radio"
                        value="hall"
                        className="w-5 h-5 text-primary focus:ring-primary"
                      />
                      <div className="ml-3">
                        <div className="font-semibold text-gray-900">홀 좌석</div>
                        <div className="text-sm text-gray-600">오픈된 메인 홀</div>
                      </div>
                    </label>

                    <label className="relative flex items-center p-4 border-2 border-gray-300 rounded-lg cursor-pointer hover:border-primary transition-all">
                      <input
                        {...register("seatType")}
                        type="radio"
                        value="private"
                        className="w-5 h-5 text-primary focus:ring-primary"
                      />
                      <div className="ml-3">
                        <div className="font-semibold text-gray-900">가족룸</div>
                        <div className="text-sm text-gray-600">프라이빗 공간</div>
                      </div>
                    </label>
                  </div>
                  {errors.seatType && (
                    <p className="text-primary text-sm mt-1">{errors.seatType.message}</p>
                  )}
                </div>

                {/* Request */}
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    <MessageSquare className="w-4 h-4 inline mr-1" />
                    요청사항 (선택)
                  </label>
                  <textarea
                    {...register("request")}
                    rows={4}
                    placeholder="예약과 관련된 요청사항을 입력해주세요 (알레르기, 특별한 준비사항 등)"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none text-gray-900"
                  />
                  {errors.request && (
                    <p className="text-primary text-sm mt-1">{errors.request.message}</p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed text-lg"
                >
                  {isSubmitting ? "예약 접수 중..." : "예약 신청하기"}
                </button>

                {/* Notice */}
                <div className="bg-gray-50 rounded-lg p-4 text-sm text-gray-600">
                  <p className="font-semibold text-gray-700 mb-2">안내사항</p>
                  <ul className="space-y-1 list-disc list-inside">
                    <li>예약 신청 후 확정 연락을 드립니다</li>
                    <li>가족룸은 예약 상황에 따라 변경될 수 있습니다</li>
                    <li>당일 예약은 전화 문의 바랍니다: 02-1234-5678</li>
                  </ul>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Confirmation Modal */}
      {showConfirmModal && formData && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">예약 정보 확인</h3>

            <div className="space-y-3 mb-8">
              <div className="flex justify-between">
                <span className="text-gray-600">예약자명:</span>
                <span className="font-semibold text-gray-900">{formData.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">연락처:</span>
                <span className="font-semibold text-gray-900">{formData.phone}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">날짜:</span>
                <span className="font-semibold text-gray-900">{formData.date}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">시간:</span>
                <span className="font-semibold text-gray-900">{formData.time}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">인원:</span>
                <span className="font-semibold text-gray-900">{formData.partySize}명</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">좌석:</span>
                <span className="font-semibold text-gray-900">
                  {formData.seatType === "hall" ? "홀 좌석" : "가족룸"}
                </span>
              </div>
              {formData.request && (
                <div>
                  <span className="text-gray-600 block mb-1">요청사항:</span>
                  <p className="text-gray-900 bg-gray-50 p-3 rounded-lg text-sm">
                    {formData.request}
                  </p>
                </div>
              )}
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => setShowConfirmModal(false)}
                className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
              >
                취소
              </button>
              <button
                onClick={confirmReservation}
                disabled={isSubmitting}
                className="flex-1 btn-primary disabled:opacity-50"
              >
                확인
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Success Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-green-600" />
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              예약이 접수되었습니다
            </h3>

            <p className="text-gray-600 mb-8">
              확정 연락을 드리겠습니다.<br />
              감사합니다.
            </p>

            <button
              onClick={() => setShowSuccessModal(false)}
              className="w-full btn-primary"
            >
              확인
            </button>
          </div>
        </div>
      )}
    </>
  );
}
