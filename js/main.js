var mapLink = document.querySelector(".open-map");
var mapPopup = document.querySelector(".modal-map");
var mapClose = document.querySelector(".map-btn");
var feedbackLink = document.querySelector(".contac-btn");
var feedbackPopup = document.querySelector(".feedback-popup");
var feedbackClose = document.querySelector(".feedback-close");

mapLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.add("modal-show");
});

mapClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (mapPopup.classList.contains("modal-show")) {
      mapPopup.classList.remove("modal-show");
    }
  }
});

feedbackLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  feedbackPopup.classList.add("modal-show");
});

feedbackClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  feedbackPopup.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (feedbackPopup.classList.contains("modal-show")) {
      feedbackPopup.classList.remove("modal-show");
    }
  }
});
