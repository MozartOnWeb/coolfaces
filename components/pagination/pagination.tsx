import React from "react";

type Props = {
  current: number;
  pages: number;
};

//import icons
import { ArrowBigRightDash, ArrowBigLeftDash } from "lucide-react";

export const Pagination = (props: Props) => {
  return (
    <section className="pagination">
      {props.pages > 1 && props.current !== 1 && (
        <div className="prev">
          <ArrowBigLeftDash />
          <p>Prev</p>
        </div>
      )}

      <div className="current">
        {props.current} / {props.pages}
      </div>

      {props.pages > 1 && props.current !== props.pages && (
        <div className="next">
          <p>Next</p>
          <ArrowBigRightDash />
        </div>
      )}
    </section>
  );
};
