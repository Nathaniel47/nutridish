import {loadHome} from "./home.js";
import {loadMenu} from "./menu.js";
import {loadAbout} from "./about.js";

alert("Welcome to Nutridish 🥗 🥪. We are a nutrition-first 5-star restaurant");


loadHome();

const homeBtn = document.getElementById("home");
homeBtn.addEventListener("click", () => {
    loadHome();
});


const menuBtn = document.getElementById("menu");
menuBtn.addEventListener("click", () => {
    loadMenu();
})

const aboutBtn = document.getElementById("about");
aboutBtn.addEventListener("click", () => {
    loadAbout();
})