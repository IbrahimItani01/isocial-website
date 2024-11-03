const heroIcons = document.querySelectorAll(".hero-icon")
const heroSection = document.querySelector(".hero-section");

const positionIcons = ()=>{
    const heroWidth = heroSection.clientWidth;
    const heroHeight = heroSection.clientHeight;
    heroIcons.forEach((icon,i)=>{
        const xPosition = Math.random()* (heroWidth-icon.clientWidth);
        const yPosition = Math.random()* (heroHeight-icon.clientHeight);
    
        gsap.to(icon,{
            left:xPosition,
            top:yPosition,
            duration:0.7,
            delay:i*0.1,
        }) 
    })
}
positionIcons();
let resizeTimeout;
window.addEventListener("resize",()=>{
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
        positionIcons();
    }, 200);

})