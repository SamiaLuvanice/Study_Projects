gsap.registerPlugin(ScrollTrigger);


let cards = document.querySelectorAll(".card");


cards.forEach((card) => {
  gsap.to(card, {
    scrollTrigger: {
      trigger: card,
      start: "top 5%",
      end: "+=900px",
      scrub: true,
      //markers: true,
    },
    scale: 0.5,
    opacity: 0,
    duration: 1,
    rotate: 20,
    ease: "power1.inOut",
  })
})
