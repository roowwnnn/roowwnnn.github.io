function addShadow(id) {
  document.getElementById(id).classList.add("shadow");
}

function removeShadow(id) {
  document.getElementById(id).classList.remove("shadow");
}

var display = "none";

var colorMode = "light";
function changeMode() {
  var bodyElement = document.getElementById("body");
  colorMode = colorMode == "dark" ? "light" : "dark";
  bodyElement.setAttribute("data-bs-theme", colorMode);
}


function expandContent() {
  var dropdownnav = document.getElementById("dropdownnav");

  if (display == "none") {
    dropdownnav.style.display = "block";
    display = "block";
  } else {
    dropdownnav.style.display = "none";
    display = "none";
  }
}

function expandContent2() {
  var dropdownnav = document.getElementById("dropdownnav2");

  if (display == "none") {
    dropdownnav.style.display = "block";
    display = "block";
  } else {
    dropdownnav.style.display = "none";
    display = "none";
  }
}



