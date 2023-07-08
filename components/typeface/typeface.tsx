import React from "react";
import Image from "next/image";

type Props = {};

//import assets
import TypeImage from "@/assets/type-image.jpeg";
import Link from "next/link";

export const Typeface = (props: Props) => {
  return (
    <Link href={""} className="typeface">
      <Image className="type-image" src={TypeImage} alt="type-image" />

      <svg
        fill="none"
        height="1024"
        viewBox="0 0 1024 1024"
        width="1024"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g fill="#fff7e9">
          <path d="m259.902 606.075c-54.396 1.236-98.902 21.634-98.902 71.085 0 58.105 40.179 78.503 76.031 78.503 50.687 0 96.428-45.742 124.863-69.849l60.577-51.923c21.635-18.544 39.56-14.218 39.56 19.78v32.143c0 37.706 24.108 69.849 74.795 69.849 63.668 0 84.684-53.16 71.703-122.391l-56.25-297.322c-8.036-42.033-33.379-68.613-70.467-68.613-40.179 0-62.432 16.071-116.21 58.723l-124.245 98.901c-28.434 22.871-46.978 46.978-46.978 73.558 0 38.325 29.671 68.613 66.141 68.613 22.871 0 57.486-8.036 77.266-48.833l74.795-153.297c9.272-19.162 31.525-66.14 57.486-71.085 25.962-4.945 42.651 16.689 38.324 50.687l-26.579 218.819c-3.709 31.525-27.198 38.325-62.432 38.943z" />
          <path d="m860.134 338.422c0-50.069-26.58-61.813-53.778-61.813h-103.846c-45.742 0-67.377 30.907-65.522 66.14 2.472 54.396 70.467 74.176 109.409 27.198l44.506-53.777c19.162-23.49 53.16-8.036 37.706 33.379l-105.083 284.96c-22.252 60.577-6.799 121.154 58.105 121.154 56.868 0 80.976-29.052 80.357-101.374z" />
        </g>
      </svg>

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
