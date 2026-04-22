// 1.to()
// gsap.to(".box", {
//   x: 400,
//   duration: 5
// })

// 2.from()
// gsap.from(".box", {
//   x: 800,
//   duration: 5
// })

// 3.fromTo()
gsap.fromTo(".box", {
  x: 200,
  opacity: 0,
}, {
  x: 800,
  opacity: 1,
  duration: 5
})