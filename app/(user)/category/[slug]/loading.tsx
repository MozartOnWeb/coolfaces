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
    <section className="container">
      <SkeletonTheme baseColor="#202020" highlightColor="#444">
        <h1>
          <Skeleton borderRadius={"full"} width={120} />
        </h1>
        <section className="typefaces-container">
          {loadingData.map((typeface) => (
            <div key={typeface.id} className="home-loading">
              <Skeleton height={"100%"} />
            </div>
          ))}
        </section>
      </SkeletonTheme>
    </section>
  );
};

export default loading;
