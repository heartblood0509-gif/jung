import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";
import { reservationSchema } from "@/lib/validation";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate request body
    const validatedData = reservationSchema.parse({
      name: body.name,
      phone: body.phone,
      date: body.date,
      time: body.time,
      partySize: body.party_size,
      seatType: body.seat_type,
      request: body.request || "",
    });

    // Insert into Supabase
    const { data, error } = await supabase
      .from("reservations")
      .insert([
        {
          name: validatedData.name,
          phone: validatedData.phone,
          date: validatedData.date,
          time: validatedData.time,
          party_size: validatedData.partySize,
          seat_type: validatedData.seatType,
          request: validatedData.request || "",
          status: "pending",
        },
      ])
      .select();

    if (error) {
      console.error("Supabase error:", error);
      return NextResponse.json(
        { error: "예약 저장에 실패했습니다" },
        { status: 500 }
      );
    }

    // TODO: Send notification (SMS/Email/KakaoTalk)
    // This is where you would integrate with SMS or notification service
    console.log("New reservation created:", data);

    return NextResponse.json(
      { message: "예약이 성공적으로 접수되었습니다", data },
      { status: 201 }
    );
  } catch (error) {
    console.error("Reservation error:", error);

    if (error instanceof Error && error.name === "ZodError") {
      return NextResponse.json(
        { error: "입력 데이터가 올바르지 않습니다" },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: "예약 처리 중 오류가 발생했습니다" },
      { status: 500 }
    );
  }
}
