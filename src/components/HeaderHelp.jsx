import React from "react";
import '../style.css';

import Img from './img.jsx';
import SearchInput from "./imputSearch.jsx";
import IconWithText from "./IconWithText.jsx";
import TitleBoldText from "./TitleBoldText.jsx";


import Sophia from '../img/Sophia_BehindDeskWaving_V7_Shadowless.webp';

export default function HeaderHelp() {

    return (
      <header className="header-container">
        <div className="headerHelp-container">
            <div >
              <div className="img-bottom-container">
               <Img img={Sophia} width="300px" height="300px" />
              </div>
              <TitleBoldText text ="Hey! How can we help you?"/>
              <div className="icon-container">
                <IconWithText text="✉️"  className="round-button" title ="Contact Us" linkTo="/help"/>
                <IconWithText text="❓" className="round-button" title = "Missing Bricks"/>
                <IconWithText text="📋" className="round-button" title = "review" linkTo="/reviews"/>
              </div>
          </div>
        </div>
      </header>
    );
  }