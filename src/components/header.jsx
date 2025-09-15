import React from "react";
import '../style.css';

import Img from './img.jsx';
import SearchInput from "./imputSearch.jsx";
import ButtonHeader from "./button-header.jsx";

import Logo from '../img/brand-lego.svg';

export default function Header() {
    return (
      <header className="header-container">
        <div  className="white-block"></div>
        <div className="header">
            <div className="header-left">
            <Img img={Logo} width="55px" height="55px" />
            <ButtonHeader text="ИНТЕРНЕТ-МАГАЗИН" />
            <ButtonHeader text="ОБЗОР" />
            <ButtonHeader text="ПОМОЩЬ" />
            </div>
            <div className="header-right">
            <SearchInput />
            </div>
        </div>
      </header>
    );
  }