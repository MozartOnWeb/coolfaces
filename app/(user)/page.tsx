//import components
import { Typeface as TypefaceTypes } from "@/typings";

import { Typeface } from "@/components/typeface/typeface";
import { Pagination } from "@/components/pagination/pagination";

//import fetch function
import {
  getTotalTypefaces,
  getFirstNineTypefaces,
  getNineNextTypefaces,
} from "@/sanity/fetch";

export default async function Home({
  searchParams,
}: {
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
}) {
  const page =
    typeof searchParams.page === "string" ? parseInt(searchParams.page) : 1;

  let typefaces = await getFirstNineTypefaces();

  if (page !== 1) {
    typefaces = await getNineNextTypefaces(page);
  }

  const totalTypefaces = await getTotalTypefaces();
  const totalPages = Math.ceil(totalTypefaces / 9);

  return (
    <main className="container">
      <h1>All typefaces</h1>

      <section className="typefaces-container">
        {typefaces.map((typeface) => (
          <Typeface
            key={typeface.name}
            slug={typeface.slug}
            alt={typeface.name}
            background={typeface.background}
            icon={typeface.icon}
            categories={typeface.categories}
            license={typeface.license[0].name}
            name={typeface.name}
            styles={typeface.styles}
          />
        ))}
      </section>

      <Pagination totalPages={totalPages} currentPage={page} />
    </main>
  );
}
