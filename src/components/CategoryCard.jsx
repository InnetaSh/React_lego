import React from "react";
import '../style.css';

import Img from './img.jsx';
import SmallText from './SmallText.jsx';
import BigText from './BigText.jsx';

export default function CategoryCard({ img, bigtext, smalltext, path }) {
    return (
      <a to={path} className="category-card">
        <Img img={img} width="120" height="100px" />
        <div className="text-wrapper">
          <SmallText text={smalltext} />
          <BigText text={bigtext} />
        </div>
      </a>
    );
  }