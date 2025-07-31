window.addEventListener('scroll', function () {
  const carousel = document.querySelector('.carousel-parallax');
  const fadeOverlay = document.querySelector('.fade-overlay');
  const scrollY = window.scrollY;
  const carouselHeight = carousel.offsetHeight;

  // Calculate how much to fade based on scroll
  let fadeRatio = Math.min(scrollY / carouselHeight, 1);

  // Apply the opacity to the overlay
  fadeOverlay.style.opacity = fadeRatio;
});
