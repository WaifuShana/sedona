var button = document.querySelector(".hotel-search-button");
var popup = document.querySelector(".popup-search");
var arrival = popup.querySelector("[name=arrival-date]");

button.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.toggle("popup-close");
  arrival.focus();
});

function change(objName, min, max, step) {
  var obj = document.getElementById(objName);
  var tmp = +obj.value + step;
  if (tmp<min) tmp = min;
  if (tmp>max) tmp = max;

  obj.value = tmp;
}

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
  	if (!popup.classList.contains("popup-close")) {
  	  evt.preventDefault();
  	  popup.classList.add("popup-close");
  	}
  }
});