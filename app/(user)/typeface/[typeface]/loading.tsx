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
          <Skeleton height={"100%"} borderRadius={"10px"} />
        </div>

        <section className="typeface-infos">
          {/* LEFT SIDE */}
          <div className="left">
            <div className="part">
              <h4>
                <Skeleton width={120} height={20} />
              </h4>
              <p>
                <Skeleton width={100} height={10} />
              </p>
            </div>

            <Separator />

            <div className="part">
              <h4>
                <Skeleton width={120} height={20} />
              </h4>
              <p>
                <Skeleton width={100} height={10} />
              </p>
            </div>

            <Separator />

            <div className="part">
              <h4>
                <Skeleton width={120} height={20} />
              </h4>
              <p>
                <Skeleton width={100} height={10} />
              </p>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="right">
            <Skeleton height={"100%"} />
          </div>
        </section>
      </SkeletonTheme>
    </section>
  );
};

export default loading;
