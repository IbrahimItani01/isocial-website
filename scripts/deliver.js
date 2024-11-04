gsap.registerPlugin(ScrollTrigger);
gsap.utils.toArray('.deliver-image').forEach((section,i) => {
    gsap.fromTo(section,
      {
        opacity: 0,
        x: -100,
      },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power2.out",
        delay: i * 0.5, 
        scrollTrigger: {
          trigger: section,
          start: "top 80%", // Adjust start position as needed
          toggleActions: "play none play none", // Only play animation once
        }
      }
    );
  });
  gsap.utils.toArray('.deliver-content').forEach((section,i) => {
    gsap.fromTo(section,
      {
        opacity: 0,
        y: 60,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        delay: i * 0.5, 
        scrollTrigger: {
          trigger: section,
          start: "top 80%", // Adjust start position as needed
          toggleActions: "play none play none", // Only play animation once
        }
      }
    );
  });