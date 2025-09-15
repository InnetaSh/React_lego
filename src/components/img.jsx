import React from "react";
import '../style.css';

export default function Img({ img, width, height, alt = "image" }) {
  return (
    <img
      src={img}
      alt={alt}
      style={{ width: width, height: height }}
    />
  );
}
