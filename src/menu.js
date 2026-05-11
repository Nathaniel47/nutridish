export function loadMenu (){
const content = document.getElementById("content");

content.innerHTML = "";

const container = document.createElement("div");

const header = document.createElement("h2");
header.textContent = "Select from our nutrient-rich international dishes 🥗 🥪.";


const dishList = document.createElement("ol");

const fufu = document.createElement("li");
fufu.textContent = "Fufu and Chicken Soup";

const jollof = document.createElement("li");
jollof.textContent = "Jollof rice and Goat meat";

const assorted = document.createElement("li");
assorted.textContent = "Assorted Fried Rice";

const riceBall = document.createElement("li");
riceBall.textContent = "Rice Balls and Groundnut Soup";


dishList.appendChild(fufu);
dishList.appendChild(jollof);
dishList.appendChild(assorted);
dishList.appendChild(riceBall);


container.appendChild(header);
container.appendChild(dishList);

content.appendChild(container);
}