"use strict";
function punchLineHandler() {
  console.log("punch was pressed");
  showPunchLine();
}
function nextJokeHandler() {
  loadJoke();
  hidePunchLine();
}

function showPunchLine() {
  el.punchline.classList.add("open");
}
function hidePunchLine() {
  el.punchline.classList.remove("open");
}

function init() {
  loadJoke();
}
init();

function loadFirstJoke() {
  fetch(
    "https://us-central1-dadsofunny.cloudfunctions.net/DadJokes/random/jokes"
  )
    //   fetch("./dummyJoke.json")
    .then((response) => response.json())
    .then((data) => {
      // cia mes jau gaunam joke ir galim panaudoti atvaizdavimui
      console.log(data);
      gautiDuomenys = data;
      fillJokesData(data);
    })
    .catch((err) => console.warn(err));
}
function loadJoke() {
  fetch(
    "https://us-central1-dadsofunny.cloudfunctions.net/DadJokes/random/type/programming"
  )
    //   fetch("./nextdummyJoke.json")
    .then((response) => response.json())
    .then((data) => {
      // cia mes jau gaunam joke ir galim panaudoti atvaizdavimui
      console.log(data[0]);
      fillJokesData(data[0]);
    })
    .catch((err) => console.warn(err));
}

function fillJokesData(joke) {
  el.sentence.innerHTML = joke.setup;
  el.punchline.innerHTML = joke.punchline;
  el.cat.innerHTML = joke.type;
}

modules.export = {
  punchLineHandler,
  nextJokeHandler,
  showPunchLine,
  hidePunchLine,
  init,
  loadFirstJoke,
  loadJoke,
  fillJokesData,
};

export default function sudetis(a, b) {
  return a + b;
}
