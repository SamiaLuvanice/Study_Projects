gsap.registerPlugin(ScrollTrigger);

const page = document.querySelector(".page");
const pageTitle = page.querySelector(".title");


gsap.timeline({
    default: {
        ease: "none"
    },

    scrollTrigger: {
        trigger: page,
        start: "clamp(top bottom)",
        end: "bottom top",
        scrub: true
    },
}).to(page, {
    yPercent: 35,
    scale: 0.95,
    startAt: { filter: "brightness(100%)" },
    filter: "brightness(30%)"
}).to(pageTitle, {
    xPercent: -80,
}, 0)
