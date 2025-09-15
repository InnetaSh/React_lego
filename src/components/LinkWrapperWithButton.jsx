
import React from "react";
import CategoryCardButton from "./CategoryCard-Button.jsx";
import "../style.css";

export default function CategoryCardList_Button({ data, width, height, widthContainer , heightContainer}) {
  const categoryCards = data.map((cat, index) => (
    <CategoryCardButton
      key={index}
      img={cat.img}
      width={width}
      height={height}
      widthContainer={widthContainer}
      heightContainer={heightContainer}
      bigBoldtext={cat.bigBoldtext}
      bigtext={cat.bigtext}
      path={cat.path}
    />
  ));

  return (
    <div className="category-list category-list-full">
      {categoryCards}
      <div className="divider"></div>
    </div>
  );
}
