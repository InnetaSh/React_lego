import React from "react";
import '../style.css';

export default function TitleBoldText({ text, justifyContent = "center" }) {
  return (
    <div
      className="title-bold-text"
      style={{ display: "flex", justifyContent }}
    >
      {text}
    </div>
  );
}
