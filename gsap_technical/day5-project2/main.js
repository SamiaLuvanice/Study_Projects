// Control Properties
// duracion, delay, repeat, yoyo, ease, etc

gsap.to(".ball", {
  y: -250,
  duration: 1,
  // delay: 2,
  repeat: -1,
  yoyo: true,
  ease: "power1.inOut" 
})

gsap.to(".shadow", {
  scaleX: 0.5,
  opacity: 0.3,
  duration: 1,
  repeat: -1,
  yoyo: true,
  delay: 2,
  ease: "power1.inOut",
})