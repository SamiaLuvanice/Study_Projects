let tl = gsap.timeline();

tl.to("h1", {
  opacity: 1,
  y: 0,
  duration: 1,
  ease: "power3.out",
})
.to("p", {
  opacity: 1,
  y: 0,
duration: 1,
ease: "power3.out",
})
.to("button", {
  opacity: 1,
  scale: 1,
  duration: 0.8,
  ease: "back.out(1.7)",
})
