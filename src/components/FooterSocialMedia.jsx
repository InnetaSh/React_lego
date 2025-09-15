import React from "react";
import Img from './img.jsx';

import facebook from "../img/footer/facebook-272324dea27d9f89..svg" 
import twitter from "../img/footer/twitter-5568801232678d2d..svg" 
import instagram from "../img/footer/instagram-5a9620c7f4368988..svg" 
import youtube from "../img/footer/youtube-15755d90b590e150..svg" 

export default function FooterSocialMedia() {
  return (
    <div className="footer-social">
      <div className="footer-social-container">
        <p>ДОЛУЧАЙТЕСЯ ДО НАС</p>
        <div className="social-icons">
          <a href="#"><i className="fa-brands fa-facebook-f" />
            <Img img={facebook} width="55px" height="40px" />
          </a>
          <a href="#"><i className="fa-brands fa-x" />
            <Img img={twitter} width="55px" height="40px" />
          </a>
          <a href="#"><i className="fa-brands fa-instagram" />
            <Img img={instagram} width="55px" height="40px" />
          </a>
          <a href="#"><i className="fa-brands fa-youtube" />
            <Img img={youtube} width="55px" height="40px" />
          </a>
        </div>
      </div>
    </div>
  );
}