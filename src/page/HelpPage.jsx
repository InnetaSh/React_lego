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

import HeaderHelp from "../components/HeaderHelp.jsx";
import FeedbackForm from "../components/FeedbackForm.jsx";

const MainPage = () => {

  return (
   
        <div>
           <Header />
           <HeaderHelp/>
          
           <FeedbackForm/>
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