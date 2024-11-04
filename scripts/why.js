gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".why-cards-container", // Animation triggered by .why-cards-container
    start: "top+=5px top", // Start when .why-cards-container hits the top
    end: "bottom bottom", // End when container reaches bottom
    scrub: 1, // Smooth scrolling animation
    pin: true, 
    anticipatePin: 1, 
    scroller: ".why-cards-container",
  },
  delay: 1,
});

const whyCards = gsap.utils.toArray(".why-card");
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
// fade-in whole section
gsap.fromTo(
    ".main-section",
    {
      opacity: 0,
      y: 20,
    },
    {
      opacity: 1,
      y: 0, 
      duration: 1.5,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".main-section",
        start: "top 80%", 
        toggleActions: "play none none none",
      },
    }
  );