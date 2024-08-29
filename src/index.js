import homePage from "./homePage";
import menuPage from "./menuPage";
import aboutPage from "./aboutPage";
import "./style.css";

homePage();
document.querySelector('#home').addEventListener('click', homePage);
document.querySelector('#menu').addEventListener('click', menuPage);
document.querySelector('#about').addEventListener('click', aboutPage);
