import React from "react";

type Props = {
  current?: number;
  length?: number;
};

//import icons
import { ArrowBigRightDash, ArrowBigLeftDash } from "lucide-react";

export const Pagination = (props: Props) => {
  return (
    <section className="pagination">
      <div className="prev">
        <ArrowBigLeftDash />
        <p>Prev</p>
      </div>

      <div className="current">
        {props.current} / {props.length}
      </div>

      <div className="next">
        <p>Next</p>
        <ArrowBigRightDash />
      </div>
    </section>
  );
};
