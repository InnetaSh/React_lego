
import React from "react";
import CategoryCard from "./CategoryCard.jsx";
import categories from "../data/categories.js";
import "../style.css";

export default function CategoryCardList() {
  return (
    <div className="category-list">
      {categories.map((cat, index) => (
        <CategoryCard
          key={index}
          img={cat.img}
          bigtext={cat.bigtext}
          smalltext={cat.smalltext}
          path={cat.path}
        />
      ))}
    </div>
  );
}