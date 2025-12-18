import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://placeholder.supabase.co";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "placeholder-key";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type Reservation = {
  id?: string;
  name: string;
  phone: string;
  date: string;
  time: string;
  party_size: number;
  seat_type: "hall" | "private";
  request?: string;
  status?: "pending" | "confirmed" | "cancelled";
  created_at?: string;
};
