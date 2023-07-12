//import components
import { Typeface } from "@/components/typeface/typeface";

export default function TypefaceLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="container typeface-layout">
      {children}
      <div className="typeface-layout-latest">
        <h1>Latest typefaces</h1>

        <section className="typefaces-container">
          {/* <Typeface />
          <Typeface />
          <Typeface />
          <Typeface />
          <Typeface /> */}
        </section>
      </div>
    </section>
  );
}
