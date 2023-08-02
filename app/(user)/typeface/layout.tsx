//import components
import { Typeface } from "@/components/typeface/typeface";
import { getSixLatestTypefaces } from "@/sanity/fetch";

export default async function TypefaceLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  const typefaces = await getSixLatestTypefaces();
  console.log(typefaces);

  return (
    <section className="container typeface-layout">
      {children}
      <div className="typeface-layout-latest">
        <h1>Latest typefaces</h1>

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
      </div>
    </section>
  );
}
