//import components
import { Typeface as TypefaceTypes } from "@/typings";

import { Typeface } from "@/components/typeface/typeface";
import { Pagination } from "@/components/pagination/pagination";

//import fetch function
import { getAllTypefaces } from "@/sanity/fetch";

export default async function Home() {
  const typefaces: TypefaceTypes[] = await getAllTypefaces();

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
            categories={typeface.categories[0].name}
            license={typeface.license[0].name}
            name={typeface.name}
            styles={typeface.styles}
          />
        ))}
      </section>

      <Pagination />
    </main>
  );
}
