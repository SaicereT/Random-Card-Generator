/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
import { read } from "@popperjs/core";

//Click for new card
document.querySelector("#newCard").addEventListener("click", generateCard);

//Timer for new card
setInterval(generateCard, 10000);

//Change width
const card = document.querySelector(".card");

document.querySelector("#width").addEventListener("change", changeWidth);

function changeWidth() {
  let widthInput = document.querySelector("#width").value;
  let widthVal = document.querySelector("#width").value + "px";
  if (widthInput > 0) {
    card.style.width = widthVal;
  } else {
    card.style.width = "400px";
  }
}

//Change height
document.querySelector("#height").addEventListener("change", changeHeight);

function changeHeight() {
  let heightInput = document.querySelector("#height").value;
  let heightVal = document.querySelector("#height").value + "px";
  if (heightInput > 0) {
    card.style.height = heightVal;
  } else {
    card.style.height = "600px";
  }
}

function generateCard() {
  let suitVal = Math.floor(Math.random() * 4 + 1);
  let numVal = Math.floor(Math.random() * 12 + 1);
  let topSuit = document.querySelector("#topSuit");
  let cardNum = document.querySelector("#cardNum");
  let botSuit = document.querySelector("#botSuit");

  if (suitVal == 1) {
    topSuit.style.color = "black";
    botSuit.style.color = "black";
    topSuit.innerHTML = "♠";
    botSuit.innerHTML = "♠";
  } else if (suitVal == 2) {
    topSuit.style.color = "red";
    botSuit.style.color = "red";
    topSuit.innerHTML = "♥";
    botSuit.innerHTML = "♥";
  } else if (suitVal == 3) {
    topSuit.style.color = "black";
    botSuit.style.color = "black";
    topSuit.innerHTML = "♣";
    botSuit.innerHTML = "♣";
  } else if (suitVal == 4) {
    topSuit.style.color = "red";
    botSuit.style.color = "red";
    topSuit.innerHTML = "♦";
    botSuit.innerHTML = "♦";
  }

  if (numVal == 13) {
    cardNum.innerHTML = "K";
  } else if (numVal == 12) {
    cardNum.innerHTML = "Q";
  } else if (numVal == 11) {
    cardNum.innerHTML = "J";
  } else if (numVal == 1) {
    cardNum.innerHTML = "A";
  } else {
    cardNum.innerHTML = numVal;
  }
}
