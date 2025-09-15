import React from "react";
import Button from "./Button";

export default function BannerText({title, text, className = "main-button"}) {
  return (
    <div className="banner-text">
      <h1>{title}</h1>
      <p>{text}</p>
      <Button text="Дізнатися більше" className = {className}/>
    </div>
  );
}
