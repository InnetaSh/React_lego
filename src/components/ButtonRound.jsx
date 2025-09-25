import React from "react";
import '../style.css';

export default function ButtonRound({ text, onClick, className = "main-button"  }) {
  return (
    <button 
      className={className}
      onClick={onClick}
     >
      {text}
    </button>
  );
}
