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

export default async function Home() {
  const typefaces: TypefaceTypes[] = await getAllTypefaces();
  const totalPages = await getTotalTypefaces();
  const pages = Math.ceil(totalPages / 9);

  // const lastId = typefaces[typefaces.length - 1]._id;
  // const nextPage = await getNextPageTypefaces(lastId);

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

      <Pagination pages={pages} current={1} />
    </main>
  );
}
