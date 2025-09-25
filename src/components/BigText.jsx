import React from "react";
import '../style.css';

export default function BigText({ text, className }) {
  return <div className={`big-text ${className}`}>{text}</div>;
}