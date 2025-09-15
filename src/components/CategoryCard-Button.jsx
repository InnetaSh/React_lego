import React from "react";
import '../style.css';

import Img from './img.jsx';
import BigBoldText from './BigBoldText.jsx';
import BigText from './BigText.jsx';
import Button from "./Button.jsx";

export default function CategoryCardButton({ img, width, height, widthContainer, heightContainer, bigtext, bigBoldtext, path }) {
    return (
      <a to={path} 
        className="category-card"
        style={{width: widthContainer,
          height: heightContainer || "100%"
        }}
      >
        <Img img={img} width={width} height={height} />
        <div className="text-wrapper">
          <BigBoldText text={bigBoldtext} />
          <BigText text={bigtext} />
          <Button text="Дізнатися більше" className = "main-button-white"/>
        </div>
      </a>
    );
  }