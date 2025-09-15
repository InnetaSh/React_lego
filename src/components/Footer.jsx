import React from "react";
import FooterLogoSection from "./FooterLogoSection";
import FooterLinksSection from "./FooterLinksSection";
import FooterSocialMedia from "./FooterSocialMedia";
import FooterBottomLinks from "./FooterBottomLinks";
import '../style.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <FooterLogoSection />
        <FooterLinksSection />
       
      </div>
      <FooterSocialMedia />
      <FooterBottomLinks />
    </footer>
  );
}
