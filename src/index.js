import "./css/style.css";
import { postsArr as original } from "./js/app.js";
let postsArr = [...original];

console.log(postsArr);

const inputDiv = document.querySelector(".input");
const mainDiv = document.querySelector(".app");
let readMoreBtn;
let postDiv;
const inputVal = document.getElementById("inputVal");
const submitBtn = inputDiv.lastElementChild;

submitBtn.addEventListener("click", function () {
  postsArr = postsArr.slice(0, inputVal.value);

  postsArr.forEach((post) => {
    readMoreBtn = document.createElement("button");
    readMoreBtn.className = "read-more";
    readMoreBtn.textContent = "Read more...";

    postDiv = document.createElement("div");
    postDiv.className = "post";

    postDiv.innerHTML = `<h2>${post.title}</h2>
    <p>${post.body.split(" ").slice(0, 5).join(" ") + "..."}</p>
    <h4>User id: ${post.userId}</h4>`;
    postDiv.appendChild(readMoreBtn);
    mainDiv.prepend(postDiv);

    readMoreBtn.addEventListener("click", function () {
      addModal();
      addBackDrop();
    });

    let modal = document.createElement("div");
    function addModal() {
      modal.className = "modal";
      modal.innerHTML = `<h2>${post.title}</h2>
        <p>${post.body}</p>`;
      document.body.appendChild(modal);
    }
    let backDrop = document.createElement("div");

    function addBackDrop() {
      backDrop.className = "back-drop";
      document.body.appendChild(backDrop);
    }
    function removeModal() {
      modal.classList.add("remove");
    }
    function removeBackDrop() {
      backDrop.classList.add("remove");
    }

    backDrop.addEventListener("click", function () {
      removeModal();
      removeBackDrop();
    });
  });
});
