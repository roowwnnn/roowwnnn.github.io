function addHighlight(id) {
  document.getElementById(id).classList.add("shadow");
}

function removeHighlight(id) {
  document.getElementById(id).classList.remove("shadow");
}

let slideIndex = 1;
showSlides(slideIndex);


function plusSlides(n) {
  showSlides(slideIndex += n);
}


function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slides");

  if (n > slides.length) { slideIndex = 1; }
  if (n < 1) { slideIndex = slides.length; }


  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }


  slides[slideIndex - 1].style.display = "block";


  const currentSlide = slides[slideIndex - 1];
  document.querySelector('.textCaption').textContent = currentSlide.getAttribute('data-caption');
  document.querySelector('.textPlace').textContent = currentSlide.getAttribute('data-place');
}


document.addEventListener("DOMContentLoaded", () => {
  showSlides(slideIndex);


  setInterval(() => {
    plusSlides(1);
  }, 5000);
});