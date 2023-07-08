import { Database } from "./supabase";

export type User = Database["public"]["Tables"]["User"]["Row"];
