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
    document.querySelector('.textLocation').textContent = currentSlide.getAttribute('data-location');
    document.querySelector('.textPlace').textContent = currentSlide.getAttribute('data-place');
}


document.addEventListener("DOMContentLoaded", () => {
    showSlides(slideIndex);  

    
    setInterval(() => {
        plusSlides(1);  
    }, 5000);  
});
