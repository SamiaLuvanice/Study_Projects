let details = gsap.utils.toArray(".details");
let props = gsap.getProperty("#id", "backgroundColor");

gsap.registerPlugin(ScrollTrigger);

gsap.set(".photo:not(:first-child)", {
  opacity: 1,
  scale: 1,
  clipPath: "inset(100% 0% 0%)",
  scale: 1,
});

gsap.set(".photo img", {
  y: 5,
});

const animation = gsap.to(".photo:not(:first-child)", {
  opacity: 1,
  scale: 1,
  duration: 1,
  stagger: 1,
  clipPath: "inset(0% 0% 0%)",
  scale: 1,
  snap: true,
});

gsap.to(".photo img", {
  y: -5,
  duration: 1,
  repeat: -1,
  yoyo: true,
  ease: "power1.inOut",
});

ScrollTrigger.create({
  trigger: ".gallery",
  start: "top top",
  end: "bottom bottom",
  pin: ".right",
  animation: animation,
  scrub: 2,
});

gsap.to(".gallery", {
  duration: 1,
  backgroundColor: "#f9d2e5aa",
  scrollTrigger: {
    trigger: ".data1",
    scrub: true,
  },
});

gsap.to(".gallery", {
  duration: 1,
  backgroundColor: "#cdd1ffaa",
  scrollTrigger: {
    trigger: ".data2",
    scrub: true,
  },
});

gsap.to(".gallery", {
  duration: 1,
  backgroundColor: "#ffe4d3ee",
  scrollTrigger: {
    trigger: ".data3",
    scrub: true,
  },
});

gsap.to(".gallery", {
  duration: 1,
  backgroundColor: "#ffb399aa",
  scrollTrigger: {
    trigger: ".data4",
    scrub: true,
  },
});