gsap.to(".menu li", {
  opacity: 1,
  y: 0,
  duration: 0.8,
  stagger: 1,
  ease: "power3.out",
});

gsap.to(".box", {
  scale: 0,
  duration: 1,
  stagger: {
    each: 0.5,
    from: "center",
  },
  repeat: -1,
  yoyo: true,
});
