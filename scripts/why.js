gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".why-cards-container", // Animation triggered by .why-cards-container
    start: "top+=5px top", // Start when .why-cards-container hits the top
    end: "bottom bottom", // End when container reaches bottom
    scrub: 1, // Smooth scrolling animation
    pin: true, // Pins the container while scrolling
    anticipatePin: 1, // Smooth pin transition
    scroller: ".why-cards-container",
  },
  delay: 1,
});

const whyCards = gsap.utils.toArray(".why-card");
console.log(whyCards);
// Animate each card to shift horizontally to x: 1000 within the container
whyCards.forEach((card, index) => {
  tl.fromTo(
    card,
    { x: 100000 }, 
    {
      x: 0, 
      delay: 0.4*index
    } 
  );
});
gsap.fromTo(
    ".why-section",
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
        trigger: ".why-section",
        start: "top 80%", // Start the animation when the top of the section is 80% from the top of the viewport
        toggleActions: "play none none none",
      },
    }
  );