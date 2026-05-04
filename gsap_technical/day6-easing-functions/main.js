gsap.to(".bounce", {
  y: 200,
  duration: 1.5,
  ease: "bounce.inOut",
  repeat: -1,
  yoyo: true
});

gsap.to(".elastic", {
  y: -200,
  duration: 2,
  ease: "elastic.(1, 0.3)",
  repeat: -1,
  yoyo: true
});

gsap.to(".expo", {
  x: 200,
  duration: 2,
  ease: "expo.inOut",
  repeat: -1,
  yoyo: true
});

gsap.to(".power", {
  y: -150,
  duration: 1.5,
  ease: "power4.out",
  repeat: -1,
  yoyo: true
});
