import React from "react";
import Link from "next/link";

type Props = {
  currentPage: number;
  totalPages: number;
};

//import icons
import { ArrowBigRightDash, ArrowBigLeftDash } from "lucide-react";

export const Pagination = (props: Props) => {
  return (
    <section className="pagination">
      <Link
        href={props.currentPage === 2 ? "/" : `/?page=${props.currentPage - 1}`}
        className={props.currentPage === 1 ? "prev disabled" : "prev"}
      >
        <ArrowBigLeftDash />
        <p>Prev</p>
      </Link>

      <div className="current">
        {props.currentPage} / {props.totalPages}
      </div>

      <Link
        href={
          props.currentPage === props.totalPages
            ? "/"
            : `/?page=${props.currentPage + 1}`
        }
        className={
          props.currentPage === props.totalPages ? "next disabled" : "next"
        }
      >
        <p>Next</p>
        <ArrowBigRightDash />
      </Link>
    </section>
  );
};
