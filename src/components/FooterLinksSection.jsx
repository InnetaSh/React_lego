import React from "react";
import FooterLinkColumn from "./FooterLinkColumn";

import footerLink from "../data/footerLink";

export default function FooterLinksSection() {
  return (
    <div className="footer-links">
      {footerLink.map((col, i) => (
        <FooterLinkColumn key={i} title={col.title} links={col.links} />
      ))}
    </div>
  );
}
