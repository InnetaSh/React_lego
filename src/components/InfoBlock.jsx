import React from "react";
import '../style.css'; 

export default function InfoBlock({ children }) {
  return (
    <div className="info-block">
      <p className="info-text">
        {children}
      </p>
    </div>
  );
}