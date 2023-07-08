import "server only";
import "../../sass/index.scss";

//import fonts
import { Neue_Mechanica, Roboto_Mono } from "@/public/assets/fonts";

//import components
import SupabaseAuthProvider from "@/components/providers/supabase-auth-provider";
import SupabaseProvider from "@/components/providers/supabase-provider";

//import supabase
import { createClient } from "@/utils/supabase-server";

export const metadata = {
  title: {
    default: "Next & Sanity Boilerplate",
    template: "%s | Next & Sanity Boilerplate",
  },
  keywords: ["Next.js", "Sanity.io", "Boilerplate"],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    shortcut: "/favicon.ico",
  },
  verification: {
    //google: "eZSdmzAXlLkKhNJzfgwDqWORghxnJ8qR9_CHdAh5-xw",
    //yandex: "14d2e73487fa6c71",
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = createClient();

  const {
    data: { session },
  } = await supabase.auth.getSession();

  return (
    <html lang="fr">
      <body className={`${Neue_Mechanica.variable} ${Roboto_Mono.variable}`}>
        <SupabaseProvider>
          <SupabaseAuthProvider serverSession={session}>
            {children}
          </SupabaseAuthProvider>
        </SupabaseProvider>
      </body>
    </html>
  );
}
