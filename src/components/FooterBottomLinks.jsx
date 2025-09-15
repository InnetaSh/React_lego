import React from "react";

const bottomLinks = [
  "Політика конфіденційності",
  "Файли cookie",
  "Юридична інформація",
  "Умови використання",
  "Цифровий добробут",
  "Доступність",
  "Налаштування Cookie"
];

export default function FooterBottomLinks() {
  return (
    <div className="footer-bottom">
      {bottomLinks.map((text, i) => (
        <a href="#" key={i}>{text}</a>
      ))}
      <div className="footer-legal">
      LEGO System A/S, DK-7190 Billund, Данія. Щоб придбати товари в інтернет-магазині, вам має виповнитися 18 років. Назва LEGO, логотип LEGO, Minifigure, DUPLO, логотип FRIENDS, логотип MINIFIGURES, DREAMZzz, NINJAGO, VIDIYO та MINDSTORMS є товарними знаками компанії LEGO Group. ©2025 The LEGO Group. Усі права захищено. Користуючись цим сайтом, ви погоджуєтесь із нашими умовами використання.
      </div>
    </div>
  );
}
