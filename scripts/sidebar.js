const menuIcon = document.getElementById("menu-icon");
const mobileNavContent = document.querySelector(".mobile-nav-content");

menuIcon?.addEventListener("click", () => {
  const isHidden = mobileNavContent.classList.contains("isHidden");
  gsap.fromTo(
    mobileNavContent,
    isHidden ? { opacity: 0, display: "flex" } : { opacity: 1 },
    isHidden ? { opacity: 1 } : { opacity: 0, display: "none" }
  );

  mobileNavContent.classList.toggle("isHidden");
});
