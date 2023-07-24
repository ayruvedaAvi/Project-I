
let slideIndex = 0;
showSlides();

function showSlides() {
  let slides = document.getElementsByClassName("slide");

  // Hide all slides
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.opacity = 0;
  }

  // Increment slideIndex and reset if out of bounds
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  // Display the current slide with a smooth fade-in effect
  slides[slideIndex - 1].style.opacity = 1;

  // Change slide every 3 seconds
  setTimeout(showSlides, 3000);
}
