import React from "react";

import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

type Props = {};

const loadingData = [
  {
    id: 1,
    name: "loading-1",
  },
  {
    id: 2,
    name: "loading-2",
  },
  {
    id: 3,
    name: "loading-3",
  },
];

const loading = (props: Props) => {
  return (
    <>
      <section className="typefaces-container">
        <SkeletonTheme baseColor="#202020" highlightColor="#444">
          {loadingData.map((typeface) => (
            <div key={typeface.id} className="home-loading">
              <Skeleton height={"100%"} />
            </div>
          ))}
        </SkeletonTheme>
      </section>
    </>
  );
};

export default loading;
