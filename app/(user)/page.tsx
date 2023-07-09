//import components
import { Typeface } from "@/components/typeface/typeface";
import { Pagination } from "@/components/pagination/pagination";

export default function Home() {
  return (
    <main className="container">
      <h1>All typefaces</h1>

      <section className="typefaces-container">
        <Typeface />
        <Typeface />
        <Typeface />
        <Typeface />
        <Typeface />
        <Typeface />
        <Typeface />
        <Typeface />
      </section>

      <Pagination />
    </main>
  );
}
