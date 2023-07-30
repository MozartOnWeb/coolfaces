import React from "react";

type Props = {
  current: number;
  pages: number;
  goNext?: () => void;
};

//import icons
import { ArrowBigRightDash, ArrowBigLeftDash } from "lucide-react";

export const Pagination = (props: Props) => {
  return (
    <section className="pagination">
      <div className={props.current === 1 ? "prev disabled" : "prev"}>
        <ArrowBigLeftDash />
        <p>Prev</p>
      </div>

      <div className="current">
        {props.current} / {props.pages}
      </div>

      <div className="next" onClick={props.goNext}>
        <p>Next</p>
        <ArrowBigRightDash />
      </div>
    </section>
  );
};
