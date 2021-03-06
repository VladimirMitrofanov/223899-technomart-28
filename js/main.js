var mapLink = document.querySelector('.open-map');
var mapPopup = document.querySelector('.modal-map');
var mapClose = document.querySelector('.map-btn');
var feedbackLink = document.querySelector('.contac-btn');
var feedbackPopup = document.querySelector('.feedback-popup');
var feedbackClose = document.querySelector('.feedback-close');
var cartLink = document.querySelectorAll('.button');
var cartPopup = document.querySelector('.modal-add-cart');
var cartClose = document.querySelector('.close-add-cart');
var feedbackPopup = document.querySelector('.feedback-popup');
var feedbackForm = document.querySelector('.feedback-form');
var fname = document.querySelector('.f-name');
var email = document.querySelector('.f-email');
var letter = document.querySelector('.f-letter');



cartLink.forEach(function (cartLink) {
  cartLink.addEventListener('click', function (evt) {
    evt.preventDefault();
    cartPopup.classList.add('modal-show');
  });
});

cartClose.addEventListener('click', function (evt) {
  evt.preventDefault();
  cartPopup.classList.remove('modal-show');
});

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (cartPopup.classList.contains('modal-show')) {
      cartPopup.classList.remove('modal-show');
    }
  }
});

if (mapLink) {
  mapLink.addEventListener('click', function (evt) {
    evt.preventDefault();
    mapPopup.classList.add('modal-show');
  });
};

if (mapClose) {
  mapClose.addEventListener('click', function (evt) {
    evt.preventDefault();
    mapPopup.classList.remove('modal-show');
  });
};

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (mapPopup.classList.contains('modal-show')) {
      mapPopup.classList.remove('modal-show');
    }
  }
});

if (feedbackLink) {
  feedbackLink.addEventListener('click', function (evt) {
    evt.preventDefault();
    feedbackPopup.classList.add('modal-show');
  });
};

if (feedbackClose) {
  feedbackClose.addEventListener('click', function (evt) {
    evt.preventDefault();
    feedbackPopup.classList.remove('modal-show');
  });
};

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (feedbackPopup.classList.contains('modal-show')) {
      feedbackPopup.classList.remove('modal-show');
    }
  }
});

if (feedbackPopup) {
  feedbackForm.addEventListener('submit', function (evt) {
    if (!fname.value || !email.value || !letter.value) {
      evt.preventDefault();
      feedbackPopup.classList.remove('modal-error');
      feedbackPopup.offsetWidth = feedbackPopup.offsetWidth;
      feedbackPopup.classList.add('modal-error');
    }
  });
};
