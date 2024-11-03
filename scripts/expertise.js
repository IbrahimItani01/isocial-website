const carousel = document.querySelector(".expertise-carousel");
const cards = document.querySelectorAll(".expertise-card");
const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");

let currentIndex = 0;

function updateCarousel() {
  const offset = -currentIndex * 100; // Moves to the correct card
  carousel.style.transform = `translateX(${offset}%)`;
}

nextBtn.addEventListener("click", () => {
  if (currentIndex < cards.length - 1) {
    currentIndex++;
    updateCarousel();
  }
});

prevBtn.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateCarousel();
  }
});

// Optional: Disable buttons at start and end of carousel
function updateButtons() {
  prevBtn.disabled = currentIndex === 0;
  nextBtn.disabled = currentIndex === cards.length - 1;
}

// Update buttons initially and after each change
updateButtons();
nextBtn.addEventListener("click", updateButtons);
prevBtn.addEventListener("click", updateButtons);