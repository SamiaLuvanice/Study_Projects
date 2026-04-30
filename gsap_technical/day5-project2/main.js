// duration 
// delay
// repeat
// yoyo 


gsap.from(".logo", {
    y: -100,
    duration: 1
})

gsap.from(".menu", {
    y: -100,
    duration: 1,
    delay: 1
})


gsap.from(".btn", {
    duration: 1,
    scale: 0.9,
    repeat: -1,
    yoyo: true
})



gsap.from("#page h6", {
    y: "-200%",
    duration: 2,
    delay: 2
})


gsap.from("#page h1", {
    y: "-200%",
    duration: 3,
    delay: 3
})


gsap.from("#page .image img", {
    y: "200%",
    duration: 3,
    delay: 3
})

gsap.from("#page .image .btn-group", {
    y: "200%",
    duration: 3,
    delay: 3
})


gsap.from("#page .left-side", {
    x: "-120%",
    duration: 3,
    delay: 3
})