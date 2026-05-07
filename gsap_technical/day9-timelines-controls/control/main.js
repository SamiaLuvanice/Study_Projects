let tl = gsap.timeline({ paused: true });

tl.to(".box", {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: "power2.out"
})
    .to(".box", {
        x: 200,
        duration: 1,
        ease: "power2.inOut"
    })

    .to(".box", {
        y: -100,
        duration: 1,
        ease: "bounce.out"
    })
