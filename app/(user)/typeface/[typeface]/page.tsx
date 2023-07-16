import Image from "next/image";
import { Metadata } from "next";

//import fetch function
import { getSingleTypeface } from "@/sanity/fetch";

//import types
import { Typeface } from "@/typings";

// import components
import { Separator } from "@/components/ui/Separator";
import { DownloadButton } from "@/components/download-button/download-button";

//generate metadata
export async function generateMetadata({
  params,
}: {
  params: { typeface: string };
}): Promise<Metadata> {
  const typeface: Typeface = await getSingleTypeface({
    typeface: params.typeface,
  });

  const { name, infos } = typeface;

  return {
    title: name,
    description: infos,
  };
}

const getCurrentTypeface = async (typeface: string) => {
  const currentTypeface = await getSingleTypeface({ typeface });

  return currentTypeface;
};

export default async function Page({
  params,
}: {
  params: { typeface: string };
}) {
  const typeface: Typeface = await getCurrentTypeface(params.typeface);

  return (
    <section className="typeface-page">
      <Image
        className="typeface-page__svg"
        src={typeface.title}
        alt="typeface"
        width={100}
        height={100}
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

          <DownloadButton url={typeface.files} className="download" />
        </div>

        {/* RIGHT SIDE */}
        <div className="right">
          <Image
            width={100}
            height={100}
            className="typeface-icon"
            src={typeface.icon}
            alt="typeface"
          />
          <Image
            width={600}
            height={600}
            className="typeface-background-img"
            src={typeface.background}
            alt={typeface.name}
          />
        </div>
      </section>
    </section>
  );
}
