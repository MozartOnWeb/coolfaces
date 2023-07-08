//import components
import { Typeface } from "@/components/typeface/typeface";
import { Pagination } from "@/components/pagination/pagination";

//import lib functions
import { replaceSpecialCharacters } from "@/lib/replaceSpecialCharacters";

export default async function Page({ params }: { params: { slug: string } }) {
  return (
    <main className="container">
      <h1>{replaceSpecialCharacters(params.slug)} typefaces</h1>

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
