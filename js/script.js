
var checkinButton = document.querySelector(".checkin-form-button");
var checkinFormSection = document.querySelector(".checkin-form-section");
var checkinInput = document.querySelector(".checkin-date-input");
var checkinForm = document.querySelector(".checkin-form-text");
var checkinInput = document.querySelector(".checkin-date-input");
var checkoutInput = document.querySelector(".checkout-date-input");
var adultInput = document.querySelector(".adult-number-input");
var childrenInput = document.querySelector(".children-number-input");


var isStorageSupport = true;
var storageAdult = "";
var storageChildren = "";

// Проверяем, есть ли у браузера localStorage
try {
  storageAdult = localStorage.getItem("adultNumber");
  storageChildren = localStorage.getItem("childrenNumber");
} catch (err) {
  isStorageSupport = false;
};

// Если localStorage есть, сразу берем из него значения количества взрослых и детей
if (storageAdult && storageChildren) {
  adultInput.value = storageAdult;
  childrenInput.value = storageChildren;
};

checkinFormSection.classList.add("checkin-form-close");

checkinButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  checkinFormSection.classList.toggle("checkin-form-close");
  checkinFormSection.classList.remove("checkin-form-error");

  setTimeout(function() {
    checkinInput.focus();
  }, 800);

checkinForm.addEventListener("submit", function (evt) {
  if (!checkinInput.value || !checkoutInput.value || !adultInput.value || !childrenInput.value) {
    evt.preventDefault();
    checkinFormSection.classList.remove("checkin-form-error");
    checkinFormSection.offsetWidth = checkinFormSection.offsetWidth;
    checkinFormSection.classList.add("checkin-form-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("adultNumber", adultsInput.value);
      localStorage.setItem("childrenNumber", childrenInput.value);
    }
  }
});
