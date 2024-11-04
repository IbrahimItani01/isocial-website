const toTop = document.getElementById("to-top");

toTop?.addEventListener("click",()=>{
  window.scrollTo(0,0)
})
gsap.registerPlugin(ScrollTrigger);

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
