import React from "react";
import '../style.css';

export default function ButtonHeader({ text,onClick }) {
    return <button className="header-button" onClick ={onClick}>{text}</button>
     
}