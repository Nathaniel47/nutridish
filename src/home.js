import jollofImage from "./Jollof-rmbg.png"

export function loadHome(){
const content = document.getElementById("content");

content.innerHTML = "";

const image = document.createElement("img");
image.src = jollofImage;
image.alt = "Delicious Jollof Rice";

const tagline = document.createElement("h2");
tagline.textContent = "Nutrition first 😊";

const description = document.createElement("pre");
description.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque iusto dicta ducimusillum minima aspernatur praesentium ea voluptas, eligendi quaerat vel doloremque perspiciatis numquam neque iste eos sed non corporis.";

content.appendChild(image);
content.appendChild(tagline);
content.appendChild(description);
}