import { Metadata } from "next";

//import components
import { Typeface } from "@/components/typeface/typeface";
import { Pagination } from "@/components/pagination/pagination";

//import lib functions
import { replaceSpecialCharacters } from "@/lib/replaceSpecialCharacters";

//import fetch data
import { getCategoryTypefaces } from "@/sanity/fetch";

//import types
import { Typeface as TypefaceTypes } from "@/typings";

//generate metadata
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const typeface: TypefaceTypes = await getCategoryTypefaces({
    category: params.slug,
  });

  const { name } = typeface;

  return {
    title: name,
  };
}

export default async function Page({ params }: { params: { slug: string } }) {
  const typefaces: TypefaceTypes[] = await getCategoryTypefaces({
    category: params.slug,
  });

  return (
    <main className="container">
      <h1>{replaceSpecialCharacters(params.slug)} typefaces</h1>

      <section className="typefaces-container">
        {typefaces.length > 0
          ? typefaces.map((typeface) => (
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
            ))
          : "No typefaces found."}
      </section>

      <Pagination />
    </main>
  );
}
