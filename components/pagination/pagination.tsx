import React from "react";

type Props = {};

//import icons
import { ArrowBigRightDash, ArrowBigLeftDash } from "lucide-react";

export const Pagination = (props: Props) => {
  return (
    <section className="pagination">
      <div className="prev">
        <ArrowBigLeftDash />
        <p>Prev</p>
      </div>

      <div className="current">1/14</div>

      <div className="next">
        <p>Next</p>
        <ArrowBigRightDash />
      </div>
    </section>
  );
};
