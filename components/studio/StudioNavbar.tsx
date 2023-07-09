import Link from "next/link";

//import icons
import { ArrowBigLeftDash } from "lucide-react";

export default function StudioNavbar(props: any) {
  return (
    <div>
      <div className="goToWebsiteContainer">
        <Link href={"/"}>
          <ArrowBigLeftDash />
          Go To Website
        </Link>
      </div>
      {props.renderDefault(props)}
    </div>
  );
}
