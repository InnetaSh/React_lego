import { useState } from "react";

import '../style.css';

import Header from "../components/header";
import Banner from '../components/Banner';
import Banner_2 from '../components/Banner_2.jsx';
import CategoryCardList from "../components/LinkWrapper";
import CategoryCardList_Button from "../components/LinkWrapperWithButton.jsx";
import TitleBoldText from "../components/TitleBoldText";
import BigText from "../components/BigText";
import InfoBlock from "../components/InfoBlock.jsx";
import Footer from "../components/Footer.jsx";

import BlockStandart_1 from "../data/blockStandart_1.js";
import BlockStandart_2 from "../data/blockStandart_2.js";
import BlockStandart_3 from "../data/blockStandart_3.js";
import BlockStandart_4 from "../data/blockStandart_4.js";

import flowersImage from "../img/bunner/Botanicals_Tablet.webp"; 
import cityImage from "../img/bunner/City-Home-202201-Hero-Short-Large.webp"; 
import blockStandartLarge from "../img/bunner/block-standart-large/21351-Home-2409-Home-SL-Hero-Standard-Large.webp";
const MainPage = () => {

  return (
   
        <div>
          <Header/>
          <Banner 
            img ={flowersImage} 
            title = "Forever flowers"
            text ="Discover blooms for all occasions with LEGO® Botanicals sets."
            leftText ="BOTANICAL COLLECTION"
           />
          <CategoryCardList/>
          <CategoryCardList_Button data ={BlockStandart_1} width="100%" height="auto" widthContainer ="30%"/>
          <CategoryCardList_Button data ={BlockStandart_2} width="100%" height="auto" widthContainer ="46%"/>
          <Banner 
          img ={blockStandartLarge}
          title="What's this?"
          text="Relive the magic with Tim Burton's The Nightmare Before Christmas."
          leftText =""
          />
          <TitleBoldText text="This week's spotlight" />
          <BigText text="A closer look at LEGO® moments worth discovering – from seasonal fun to special moments." />
          <CategoryCardList_Button data ={BlockStandart_3} width="100%" height="auto" widthContainer ="31%"/>
          <Banner_2
            img ={cityImage} 
            title = "Forever flowers"
            text ="Discover blooms for all occasions with LEGO® Botanicals sets."
            leftText ="BOTANICAL COLLECTION"
           />
             <TitleBoldText  justifyContent ="left" text="Read All About It" />
           <CategoryCardList_Button 
           data ={BlockStandart_4}
            width="100%" height="auto"
             widthContainer ="22%"
             heightContainer = "500px"
             />
   
          <InfoBlock>
              Welcome to the Official LEGO® Shop, the amazing home of LEGO building toys, 
              <a href="/gifts"> gifts</a>, stunning display sets and more for 
              <a href="/girls"> girls</a>, <a href="/boys"> boys</a>, <a href="/kids"> kids</a> and adults alike. 
              Find the perfect gift for toddlers, kids, teens and adults for 
              <a href="/birthdays"> birthdays</a> or other occasions such as 
              <a href="/valentines-day"> Valentine's Day</a>, 
              <a href="/mothers-day"> Mother's Day</a> and 
              <a href="/fathers-day"> Father's Day</a>. 
              We make it easy to shop for toys that will provide hours of fun and imaginative play. 
              You’ll also find curated <a href="/adults"> LEGO sets for adults</a> perfectly matching their 
              <a href="/interests"> interests</a>, such as 
              <a href="/cars"> cars</a>, <a href="/flowers"> flowers</a>, 
              <a href="/gaming"> gaming</a> and much more!
          </InfoBlock>
          <Footer/>
    </div>
  );
};

export default MainPage;