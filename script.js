import { ajax } from "./ajax.js";

// const mainContent = document.querySelector(".main-content"); // grabbing the main content section
// document.body.append(mainContent); // adding this to the body
// const button = document.querySelector("#add");

// // possibly add a button here to append one at a time?
// let numArr = [];
// for (let i = 1; i < 21; i++) {
//   // get 20 different values
//   let randomNum = Math.floor(Math.random() * 60); // to generate a random number.
//   numArr.push(randomNum);
// }
// let url = `https://www.swapi.tech/api/planets/${numArr}`; // new url each time page refresh

const root = document.querySelector("#root");
const makeCard = (planets) => {
  let card = document.createElement("div");

  let name = document.createElement("h3");
  name.innerText = `${planets.name}`;

  let remove = document.createElement("button");
  remove.innerText = "X";
  remove.addEventListener("click", (evt) => {
    console.dir(evt.target);
    evt.target.parentNode.parentNode.removeChild(evt.target.parentNode);
  });

  card.append(name, remove);
  root.append(card);
};
ajax("https://www.swapi.tech/api/people/", (res) => {
  let r = JSON.parse(res);
  r.results.forEach((person) => {
    makeCard(person);
  });
});
