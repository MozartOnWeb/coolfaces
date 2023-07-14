import Image from "next/image";

//import fetch function
import { getSingleTypeface } from "@/sanity/fetch";

//import types
import { Typeface } from "@/typings";

// import components
import { Separator } from "@/components/ui/Separator";

//import icons
import { Download } from "lucide-react";

//import assets
import Img from "@/assets/type-image.jpeg";
import TypefaceID from "@/assets/type-id.svg";
import TypefaceTitle from "@/assets/typeface-page.svg";

export default async function Page({ params }: { params: { slug: string } }) {
  const typeface: Typeface = await getSingleTypeface(params.slug);

  return (
    <section className="typeface-page">
      <Image
        className="typeface-page__svg"
        src={typeface.title ? typeface.title : TypefaceTitle}
        alt="typeface"
      />

      <section className="typeface-infos">
        {/* LEFT SIDE */}
        <div className="left">
          <div className="part">
            <h4>Category</h4>
            <p>{typeface.categories[0].name}</p>
          </div>

          <Separator />

          <div className="part">
            <h4>Styles</h4>
            <p>{typeface.styles}</p>
          </div>

          <Separator />

          <div className="part">
            <h4>License</h4>
            <p>{typeface.license[0].name}</p>
          </div>

          <Separator />

          <div className="part">
            <h4>Infos</h4>
            <p>{typeface.infos}</p>
          </div>

          <Separator />
          <div className="download">
            <p>
              Get this typeface <Download />
            </p>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="right">
          <Image className="typeface-icon" src={typeface.icon} alt="typeface" />
          <Image
            className="typeface-background-img"
            src={typeface.background}
            alt={typeface.name}
          />
        </div>
      </section>
    </section>
  );
}
