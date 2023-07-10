import React from "react";
import { Suspense } from "react";

import Image from "next/image";

type Props = {
  background: string;
  alt: string;
  icon: string;
  name: string;
  slug: string;
  styles: string;
  license: string;
  categories: string;
};

//import assets
import TypeImage from "@/assets/type-image.jpeg";
import TypefaceIcon from "@/assets/type-id.svg";
import Link from "next/link";

export const Typeface = ({
  background,
  alt,
  icon,
  license,
  name,
  slug,
  styles,
  categories,
}: Props) => {
  return (
    <Link href={`/typeface/${slug}`} className="typeface">
      <Image
        width={1200}
        height={1200}
        className="type-image"
        src={background}
        alt={alt}
      />

      <Image
        width={1200}
        height={1200}
        className="typeface-icon"
        src={icon}
        alt="typeface-icon"
      />

      <div className="type-infos">
        <h4>{name}</h4>

        <div>
          <p className="type">{categories}</p>
          <p className="style">{styles}</p>
          <p className="license">{license}</p>
        </div>
      </div>
    </Link>
  );
};
