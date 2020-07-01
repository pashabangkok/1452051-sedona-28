var checkinButton = document.querySelector(".checkin-form-button");
var checkinFormSection = document.querySelector(".checkin-form-text");
var checkinSection = document.querySelector(".checkin-form-section");

checkinFormSection.style.display = "none";

checkinButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  checkinFormSection.classList.toggle("checkin-form-open");
});
