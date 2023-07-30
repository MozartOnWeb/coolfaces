//import components
import { Typeface as TypefaceTypes } from "@/typings";

import { Typeface } from "@/components/typeface/typeface";
import { Pagination } from "@/components/pagination/pagination";

//import fetch function
import {
  getAllTypefaces,
  getNextPageTypefaces,
  getTotalTypefaces,
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

  let lastId = null;

  let typefaces: TypefaceTypes[] = await getNextPageTypefaces(lastId);
  const totalPages = await getTotalTypefaces();
  const pages = Math.ceil(totalPages / 9);

  if (page > 1) {
    lastId = typefaces[typefaces.length - 1]._id;
    console.log(lastId);
    const nextPage = await getNextPageTypefaces(lastId);
    typefaces = [...nextPage];
  }

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

      <Pagination pages={pages} current={page} />
    </main>
  );
}
