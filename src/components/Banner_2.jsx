import React from "react";
import BannerText from "./BannerText.jsx";
import Img from './img.jsx';
import '../style.css';



export default function Banner_2({img, title, text,leftText}) {
  return (
    <div
        className="banner_2"
        style={{
          backgroundImage: `url(${img})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        
      <div className="banner-left-center">
        <BannerText title={title} text={text} className ="main-button-grey"/>
      
      </div>
      <div className="banner-right">
      </div>
    </div>
  );
}
