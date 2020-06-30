var checkinButton = document.querySelector(".checkin-form-button");
var checkinFormSection = document.querySelector(".checkin-form-section");

checkinButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  checkinFormSection.classList.add("ckeckin-form-closed");
});
