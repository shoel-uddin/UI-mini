import ajax from "./ajax.js";

const cards = document.querySelector(".cards");
document.body.append(cards);
const button = document.querySelector("#add");

let numArr = [];
for (let i = 1; i < 21; i++) {
  // get 20 different values
  let randomNum = Math.floor(Math.random() * 100); // to generate a random number.
  numArr.push(randomNum);
}
let url = "https://api.pokemontcg.io/v1/cards";
console.log(url);

ajax(url, (cards) => {
  let parsedCards = JSON.parse(cards);
  // console.log(parsedCards);

  // function for eventlistener
  let cardGenerator = () => {
    if (parsedCards.length != 0) {
      // will not run the function if array is empty
      let selectedCard = parsedCards.pop(); // grabbing each character from array

      // creating div for each char
      let div = document.createElement("div");
      div.className = "card";
      // mainContent.append(div)
      cardHolder.prepend(div);

      // //animation
      // div.classList.add("card", "faded-out")
      // setTimeout(() => { div.classList.remove("faded-out") }, 200)

      // title
      let h2 = document.createElement("h2");
      h2.innerText = selectedCard.name;
      div.append(h2);

      // attach img for each div.
      let img = document.createElement("img");
      img.src = selectedChar.image;
      div.append(img);

      // close button
      let closeButton = document.createElement("span");
      closeButton.innerText = "X";
      closeButton.className = "close-btn";
      closeButton.addEventListener("click", (evt) => {
        let parent = evt.target.parentNode;
        parent.remove();
      });
      div.append(closeButton);
    } else {
      null;
    }
  };

  button.addEventListener("click", cardGenerator);
});
