import { z } from "zod";

export const reservationSchema = z.object({
  name: z
    .string()
    .min(2, "이름은 2자 이상 입력해주세요")
    .max(50, "이름은 50자 이하로 입력해주세요"),
  phone: z
    .string()
    .regex(
      /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/,
      "올바른 휴대폰 번호를 입력해주세요 (예: 010-1234-5678)"
    ),
  date: z.string().min(1, "예약 날짜를 선택해주세요"),
  time: z.string().min(1, "예약 시간을 선택해주세요"),
  partySize: z
    .number()
    .min(2, "최소 2명 이상 예약 가능합니다")
    .max(20, "최대 20명까지 예약 가능합니다"),
  seatType: z.enum(["hall", "private"], {
    required_error: "좌석 유형을 선택해주세요",
  }),
  request: z.string().max(500, "요청사항은 500자 이하로 입력해주세요").optional(),
});

export type ReservationFormData = z.infer<typeof reservationSchema>;
