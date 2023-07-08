import "@/sass/index.scss";

//import fonts
import { Manrope } from "next/font/google";

// If loading a variable font, you don't need to specify the font weight
const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
});

//import components
import Navbar from "@/components/navbar/navbar";

export const metadata = {
  title: {
    default: "Cool Faces",
    template: "%s | Cool Faces",
  },
  keywords: ["fonts", "fonts families"],
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
  return (
    <html lang="fr">
      <body className={manrope.className}>
        <section className="main-container">
          <Navbar />
          {children}
        </section>
      </body>
    </html>
  );
}
