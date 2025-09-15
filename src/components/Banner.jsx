import React from "react";
import BannerText from "./BannerText";
import Img from './img.jsx';
import '../style.css';



export default function Banner({img, title, text,leftText}) {
  return (
    <div
        className="banner"
        style={{
          backgroundImage: `url(${img})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        
      <div className="banner-left">
       
        <p className="collection-name">{leftText}</p>
      </div>
      <div className="banner-right">
        <BannerText title={title} text={text}/>
      </div>
    </div>
  );
}
