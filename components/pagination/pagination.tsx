import React from "react";
import Link from "next/link";

type Props = {
  current: number;
  pages: number;
  page?: string;
  goPrev?: () => void;
  goNext?: () => void;
};

//import icons
import { ArrowBigRightDash, ArrowBigLeftDash } from "lucide-react";

export const Pagination = (props: Props) => {
  return (
    <section className="pagination">
      <Link
        href={props.current === 2 ? "/" : `/?page=${props.current - 1}`}
        className={props.current === 1 ? "prev disabled" : "prev"}
      >
        <ArrowBigLeftDash />
        <p>Prev</p>
      </Link>

      <div className="current">
        {props.current} / {props.pages}
      </div>

      <Link
        href={
          props.current === props.pages ? "/" : `/?page=${props.current + 1}`
        }
        className={props.current === props.pages ? "next disabled" : "next"}
      >
        <p>Next</p>
        <ArrowBigRightDash />
      </Link>
    </section>
  );
};
