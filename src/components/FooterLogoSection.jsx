import React from "react";
import logo from '../img/brand-lego.svg'; 

export default function FooterLogoSection() {
  return (
    <div className="footer-logo-section">
      <img src={logo} alt="LEGO Logo" className="footer-logo" width ="100px" height="100px" />
      <div className="footer-country">
        <div>
          <span> Україна</span>
        </div>
        <p>LEGO каталоги</p>
      </div>
    </div>
  );
}
