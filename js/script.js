var link = document.querySelector(".map a.btn");
var popup = document.querySelector(".modal-content");
var feedbackEmail = popup.querySelector("[name=feedback-email]");
var feedbackText = popup.querySelector("textarea");
var feedbackName = popup.querySelector("[name=feedback-name]");
var feedbackForm = popup.querySelector("form");
var close = document.querySelector(".modal-content-close");

link.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.add("modal-content-show");
  feedbackName.focus();
});

close.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.remove("modal-content-show");
  feedbackEmail.classList.remove("modal-error");
  feedbackText.classList.remove("modal-error");
  feedbackName.classList.remove("modal-error");
})

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (popup.classList.contains("modal-content-show")) {
      popup.classList.remove("modal-content-show");
      feedbackEmail.classList.remove("modal-error");
      feedbackText.classList.remove("modal-error");
      feedbackName.classList.remove("modal-error");
    }
  }
});

feedbackForm.addEventListener("submit", function(event) {
  if (!feedbackName.value || !feedbackEmail.value || !feedbackText.value) {
    event.preventDefault();
    feedbackEmail.classList.add("modal-error");
    feedbackText.classList.add("modal-error");
    feedbackName.classList.add("modal-error");
  }
});
