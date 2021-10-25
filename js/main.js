const feedbackButton = document.querySelector('.contacts-btn');
const modal = document.querySelector('.feedback-modal');
const modalClose = document.querySelector('.feedback-close');

feedbackButton.addEventListener('click', function (evt) {
  evt.preventDefault();
  modal.classList.remove('visually-hidden')
});

modalClose.addEventListener('click', function () {
  modal.classList.add('visually-hidden')
});
