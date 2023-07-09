import Image from "next/image";

// import components
import { Separator } from "@/components/ui/Separator";

//import icons
import { Download } from "lucide-react";

//import assets
import Img from "@/assets/type-image.jpeg";
import TypefaceID from "@/assets/type-id.svg";
import TypefaceTitle from "@/assets/typeface-page.svg";

export default function Page({ params }: { params: { slug: string } }) {
  return (
    <section className="typeface-page">
      <Image
        className="typeface-page__svg"
        src={TypefaceTitle}
        alt="typeface"
      />

      <section className="typeface-infos">
        {/* LEFT SIDE */}
        <div className="left">
          <div className="part">
            <h4>Category</h4>
            <p>Display</p>
          </div>

          <Separator />

          <div className="part">
            <h4>Styles</h4>
            <p>1 style</p>
          </div>

          <Separator />

          <div className="part">
            <h4>License</h4>
            <p>SIL Open Font License, Version 1.1</p>
          </div>

          <Separator />

          <div className="part">
            <h4>Infos</h4>
            <p>
              Pilowlava (sic) was born as an intuitive, fast-paced creative
              feedback loop in which its creators tried to surprise one another.
              The result is a typeface that recalls cooled lava flows drawn with
              a compass.
            </p>
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
          <Image className="typeface-icon" src={TypefaceID} alt="typeface" />
          <Image className="typeface-background-img" src={Img} alt="typeface" />
        </div>
      </section>
    </section>
  );
}
