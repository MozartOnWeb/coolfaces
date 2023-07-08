import React from "react";

import Link from "next/link";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <div>
      <div>logo</div>

      <div>
        <Link href={""}>
          <p>cursive</p>
        </Link>

        <Link href={""}>
          <p>display</p>
        </Link>

        <Link href={""}>
          <p>monospace</p>
        </Link>

        <Link href={""}>
          <p>sans serif</p>
        </Link>

        <Link href={""}>
          <p>serif</p>
        </Link>

        <Link href={""}>
          <p>slab</p>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
