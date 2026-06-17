(function () {
  "use strict";

  // Бургер-меню на мобильном
  var burgerBtn = document.getElementById("burgerBtn");
  var nav = document.getElementById("nav");

  if (burgerBtn && nav) {
    burgerBtn.addEventListener("click", function () {
      var isOpen = nav.classList.toggle("is-open");
      burgerBtn.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    nav.querySelectorAll(".nav__link").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("is-open");
        burgerBtn.setAttribute("aria-expanded", "false");
      });
    });
  }

  // Плавная прокрутка по якорям
  document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener("click", function (e) {
      var targetId = link.getAttribute("href");
      var target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });

  // Текущий год в подвале
  var yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
})();
