import "server-only";

import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies, headers } from "next/headers";

import type { Database } from "@/types/supabase";

export const createClient = () => {
  return createServerComponentClient<Database>({
    cookies,
  });
};
