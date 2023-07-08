"use client";

import { createContext, useContext, useState } from "react";

//supabase
import { createClient } from "@/utils/supabase-browser";
import { SupabaseClient } from "@supabase/auth-helpers-nextjs";

//import types
import { Database } from "@/types/supabase";

type supabaseContextType = {
  supabase: SupabaseClient<Database>;
};

const SupabaseContext = createContext<supabaseContextType | undefined>(
  undefined
);

export default function SupabaseProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [supabase] = useState(() => createClient());

  return (
    <SupabaseContext.Provider value={{ supabase }}>
      <>{children}</>
    </SupabaseContext.Provider>
  );
}

export const useSupabase = () => {
  let context = useContext(SupabaseContext);
  if (context === undefined) {
    throw new Error("useSupabase must be used within a SupabaseProvider");
  }
  return context;
};
