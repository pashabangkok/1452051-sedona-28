
var checkinButton = document.querySelector(".checkin-form-button");
var checkinFormSection = document.querySelector(".checkin-form-section");
var checkinInput = document.querySelector('.checkin-date-input');

checkinFormSection.classList.add("checkin-form-close");

checkinButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  checkinFormSection.classList.toggle("checkin-form-close");

  setTimeout(function() {
    checkinInput.focus();
  }, 800);

});
