export function loadAbout (){
const content = document.getElementById("content");

content.innerHTML = "";

const container = document.createElement("div");

const header = document.createElement("h2");
header.textContent = "Nutridish Inc.";


const description = document.createElement("p");

description.textContent = "We are a nutrition-first 5-star restaurant that serves people from all around the world";


container.appendChild(header);
container.appendChild(description);

content.appendChild(container);
}