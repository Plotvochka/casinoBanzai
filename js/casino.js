"use strict";

const scrollUp = document.querySelector(".scroll-up");

scrollUp.addEventListener("click", scrollTop);
window.addEventListener("scroll", trackScroll);

function trackScroll() {
  const offset = window.pageYOffset;
  const coords = document.documentElement.clientHeight;
  if (offset > coords) {
    scrollUp.classList.add("active-up");
  } else {
    scrollUp.classList.remove("active-up");
  }
}

function scrollTop() {
  if (window.pageYOffset > 0) {
    window.scrollBy(0, -100000000000);
  }
}

const menu = document.querySelector(".burger-wrap");
const backDrop = document.querySelector(".backdrop");
const closeBtn = document.querySelector(".close-btn");

menu.addEventListener("click", openModal);
closeBtn.addEventListener("click", closeModal);

function openModal() {
  if (!backDrop.classList.contains("is-open")) {
    backDrop.classList.add("is-open");
    document.body.style.overflow = "hidden";
  }
}
function closeModal() {
  if (backDrop.classList.contains("is-open")) {
    backDrop.classList.remove("is-open");
    document.body.style.overflow = "visible";
  }
}

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
