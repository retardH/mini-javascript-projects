"use strict";

const key = 6;

const result = document.querySelector(".guess-result-box");
const message = document.querySelector(".message");
const input = document.querySelector(".input-box");
const checkBtn = document.querySelector(".check-btn");
const againBtn = document.querySelector(".again-btn");
const scoreValue = document.querySelector(".score-value");
const highestScoreValue = document.querySelector(".highest-score-value");

let trackOfScore;

checkBtn.addEventListener("click", () => {
  trackOfScore = (parseInt(scoreValue.textContent) - 1).toString();
  scoreValue.textContent = trackOfScore;
  if (parseInt(input.value) > key) {
    message.innerHTML = '<i class="fa-solid fa-angles-up"></i> Too high';
  } else if (parseInt(input.value) < key) {
    message.innerHTML = '<i class="fa-solid fa-angles-down"></i>Too low!';
  } else if (parseInt(input.value) == key) {
    result.textContent = key.toString();

    message.innerHTML = `<i class="fa-solid fa-check"></i> That's a hit on the spot!`;

    document.querySelector("body").style.backgroundColor = "green";
  }
});

againBtn.addEventListener("click", () => {
  result.textContent = "?";
  message.innerHTML = "Keep guessing...";
  document.querySelector("body").style.backgroundColor = "rgb(22, 22, 22)";
  highestScoreValue.textContent = trackOfScore;
  scoreValue.textContent = "20";
});
