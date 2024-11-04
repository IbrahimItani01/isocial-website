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
gsap.fromTo(
    ".expertise-section",
    {
      opacity: 0,
      y: 20, // Initial state: hidden and slightly offset
    },
    {
      opacity: 1,
      y: 0, // Final state: fully visible and in place
      duration: 1.5,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".expertise-section",
        start: "top 80%", // Start the animation when the top of the section is 80% from the top of the viewport
        toggleActions: "play none none none",
      },
    }
  );