"use client";
//import icons
import { Download } from "lucide-react";

type Props = {
  className: string;
  url: string;
};

export const DownloadButton = (props: Props) => {
  return (
    <div
      className={props.className}
      onClick={() => {
        window.location.href = props.url;
      }}
    >
      <p>
        Get this typeface <Download />
      </p>
    </div>
  );
};
