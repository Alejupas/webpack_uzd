import "./css/style.css";
import {
  punchLineHandler,
  nextJokeHandler,
  showPunchLine,
  hidePunchLine,
  init,
  loadFirstJoke,
  loadJoke,
  fillJokesData,
} from "./js/app.js";

const dummyJokeLine = "init sentence?";
const dummyJokePunch = "init punchline";

const el = {
  cat: document.querySelector(".cat"),
  sentence: document.querySelector(".sentence"),
  punchline: document.querySelector(".punchline"),
  punchBtn: document.getElementById("punch"),
  nextJoke: document.getElementById("nextJoke"),
};

el.punchBtn.addEventListener("click", punchLineHandler);
el.nextJoke.addEventListener("click", nextJokeHandler);

import sudetis from "./js/app.js";

console.log(sudetis(16, 15));
