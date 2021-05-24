"use strict"; // here we go again

const dummyJokeLine = "init sentence?";
const dummyJokePunch = "init punchline";

const el = {
  cat: document.querySelector(".cat"),
  sentence: document.querySelector(".sentence"),
  punchline: document.querySelector(".punchline"),
  punchBtn: document.getElementById("punch"),
  nextJoke: document.getElementById("nextJoke"),
};
// 4 paadarom kad uzkrovus psl mes matom savo klausima ir mygtukus
// paspaudus mygutka "Punch" pasirodo buves pasleptas punchline sakinys
el.punchBtn.addEventListener("click", punchLineHandler);
el.nextJoke.addEventListener("click", nextJokeHandler);

function punchLineHandler() {
  console.log("punch was pressed");
  showPunchLine();
}
// 5 paspaudus mygtuka "Next Joke" is naujo matosi tik klausiamasis sakinys;
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
