import React from "react";
import { Link } from "react-router-dom";
import '../style.css';


import Button from "./Button.jsx";
import BigText from "../components/BigText";

export default function IconWithText({ text, className = "round-button", title, linkTo = "/" }) {
    return (
      <div className="icon-block">
        <Button text={text} className={className} />
        <Link to={linkTo} >
          <BigText text={title} className="link-block"/>
        </Link>
      </div>
    );
  }
  