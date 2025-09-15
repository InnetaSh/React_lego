import React from "react";

export default function FooterLinkColumn({ title, links }) {
  return (
    <div className="footer-column">
      <h4>{title}</h4>
      <ul>
        {links.map((link, i) => (
          <li key={i}>
            <a className="footer-column-link" href="#">{link}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
