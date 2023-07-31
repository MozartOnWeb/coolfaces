import React from "react";

import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import { Separator } from "@/components/ui/Separator";

type Props = {};

const loading = (props: Props) => {
  return (
    <section className="single-typeface-loading">
      <SkeletonTheme baseColor="#202020" highlightColor="#444">
        <div className="typeface-page__svg">
          <Skeleton height={"100%"} />
        </div>

        <section className="typeface-infos">
          {/* LEFT SIDE */}
          <div className="left">
            <div className="part">
              <h4>
                <Skeleton width={100} />
              </h4>
              <p>
                <Skeleton width={100} />
              </p>
            </div>

            <Separator />

            <div className="part">
              <h4>
                <Skeleton width={100} />
              </h4>
              <p>
                <Skeleton width={100} />
              </p>
            </div>

            <Separator />

            <div className="part">
              <h4>
                <Skeleton width={100} />
              </h4>
              <p>
                <Skeleton width={100} />
              </p>
            </div>

            {/* RIGHT SIDE */}
            <div className="right">
              <div className="typeface-background-img">
                <Skeleton />
              </div>
            </div>
          </div>
        </section>
      </SkeletonTheme>
    </section>
  );
};

export default loading;
