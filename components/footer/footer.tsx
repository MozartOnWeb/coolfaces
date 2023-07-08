import React from "react";
import Link from "next/link";

type Props = {};

const Footer = (props: Props) => {
  return (
    <section className="footer">
      <div className="divider" />

      <div className="footer-container">
        <div className="headline">
          <h5>CF</h5>
          <p>
            This website is a curated collection of typefaces that are available
            under a variety of free licences somewhere on the interwebs.
          </p>
        </div>

        <div className="links-container">
          <p>All typefaces</p>
          <div>
            <Link href={""}>Cursive</Link>
            <Link href={""}>Display</Link>
            <Link href={""}>Monospace</Link>
            <Link href={""}>Sans Serif</Link>
            <Link href={""}>Serif</Link>
            <Link href={""}>Slab</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
