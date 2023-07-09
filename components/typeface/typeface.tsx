import React from "react";
import Image from "next/image";

type Props = {};

//import assets
import TypeImage from "@/assets/type-image.jpeg";
import TypefaceIcon from "@/assets/type-id.svg";
import Link from "next/link";

export const Typeface = (props: Props) => {
  return (
    <Link href={""} className="typeface">
      <Image className="type-image" src={TypeImage} alt="type-image" />

      <Image className="typeface-icon" src={TypefaceIcon} alt="typeface-icon" />

      <div className="type-infos">
        <h4>Typeface Name</h4>

        <div>
          <p className="type">Display</p>
          <p className="style">1 style</p>
          <p className="license">SIL Open Font License, V.1.1</p>
        </div>
      </div>
    </Link>
  );
};
