"use strict";

// Bulma implementation of menu
document.addEventListener("DOMContentLoaded", function () {
  // Get all "navbar-burger" elements
  var $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll(".navbar-burger"), 0);
  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {
    // Add a click event on each of them
    $navbarBurgers.forEach(function (el) {
      el.addEventListener("click", function () {
        // Get the target from the "data-target" attribute
        var target = el.dataset.target;
        var $target = document.getElementById(target);

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle("is-active");
        $target.classList.toggle("is-active");
      });
    });
  }
});

// Services component
var serviceButtons = document.getElementsByClassName("service-button");
var serviceContent = document.getElementsByClassName("service-content");

var handleClick = function handleClick(event) {
  var content = event.currentTarget.dataset.content;
  for (var i = 0; i < serviceButtons.length; i++) {
    if (serviceButtons[i].dataset.content == content) {
      serviceContent[i].classList.remove("service-content--hidden");
      serviceButtons[i].classList.add("service-button--active");
      continue;
    }
    serviceContent[i].classList.add("service-content--hidden");
    serviceButtons[i].classList.remove("service-button--active");
  }
};

for (var i = 0; i < serviceButtons.length; i++) {
  serviceButtons[i].addEventListener("click", handleClick);
}

// For the clients carousel
var clientsContainers = document.getElementsByClassName("client-container");
var index = 0;

var slideContainerIn = function slideContainerIn() {
  for (var _i = 0; _i < clientsContainers.length; _i++) {
    var item = clientsContainers;
    if (item[_i].dataset.index == index) {
      item[_i].classList.add("client-container--absolute");
      item[_i].classList.add("client-container--hidden");
      if (index == 2) {
        index = 0;
        item[index].classList.remove("client-container--absolute");
        item[index].classList.remove("client-container--hidden");
        return;
      } else {
        index++;
        item[index].classList.remove("client-container--absolute");
        item[index].classList.remove("client-container--hidden");
        return;
      }
    }
  }
};
setInterval(slideContainerIn, 2600);