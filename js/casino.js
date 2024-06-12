"use strict";

const nav = document.querySelectorAll(".nav-title");
nav.forEach((el) => {
  el.addEventListener("click", navOpen);
});

const ul = document.querySelector(".nav-list");

function navOpen(e) {
  e.preventDefault();
  const currentBox = e.target.closest(".nav-title");
  currentBox.classList.toggle("active");
  ul.classList.toggle("nav-list");
  const currentContentBox = document
    .querySelectorAll(".nav-item")
    .forEach((el) => {
      if (currentBox.classList.contains("active")) {
        el.style.maxHeight = el.scrollHeight + "px";
      } else {
        el.style.maxHeight = 0;
      }
    });
}

const question = document.querySelectorAll(".question").forEach((el) => {
  el.addEventListener("click", questionOpen);
});

function questionOpen(e) {
  e.preventDefault();
  let currentBox = e.target.closest(".question");
  let currentContent = e.target.nextElementSibling;
  currentBox.classList.toggle("active");
  if (currentBox.classList.contains("active")) {
    currentContent.style.maxHeight = currentContent.scrollHeight + "px";
  } else {
    currentContent.style.maxHeight = 0;
  }
}
