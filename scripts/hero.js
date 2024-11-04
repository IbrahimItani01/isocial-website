const heroIcons = document.querySelectorAll(".hero-icon")
const heroSection = document.querySelector(".hero-section");
let resizeTimeout;
const positionIcons = ()=>{
    const heroWidth = heroSection.clientWidth;
    const heroHeight = heroSection.clientHeight;
    heroIcons.forEach((icon,i)=>{
        const xPosition = Math.random()* (heroWidth-icon.clientWidth);
        const yPosition = Math.random()* (heroHeight-icon.clientHeight);
    
        gsap.to(icon,0.1,{
            left:xPosition,
            top:yPosition,
            delay:i*0.1,
        }) 
    })

}
const handleCursor = (e)=>{
    const mouseX = e.clientX -heroSection.getBoundingClientRect().left;
    const mouseY = e.clientY - heroSection.getBoundingClientRect().top;
    heroIcons.forEach((icon)=>{
        const iconX = icon.offsetLeft + icon.clientWidth/2;
        const iconY = icon.offsetTop + icon.clientHeight/2;
        const dx = mouseX - iconX;
        const dy = mouseY - iconY;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const maxDistance = 500; // Distance threshold
        if (distance < maxDistance) {
        const angle = Math.atan2(dy, dx);
        const pushDistance = (maxDistance - distance) / 5; // Scale push effect

        const xMove = -Math.cos(angle) * pushDistance;
        const yMove = -Math.sin(angle) * pushDistance;

        gsap.to(icon, {
            x: xMove,
            y: yMove,
            duration: 0.2,
            overwrite: true,
        });
        } else {
            gsap.to(icon, { x: 0, y: 0, duration: 0.5 });
        }
        })
}
positionIcons();
setTimeout(()=>{
    heroSection.addEventListener("mousemove",(e)=>{
        handleCursor(e)
    })
},1000)
window.addEventListener("resize",()=>{
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
        positionIcons();
    }, 200);

})
