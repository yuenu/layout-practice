// gsap.to("#image1", {
//   delay: 1,
//   x: 350,
//   y: 250,
//   scaleX: 4,
//   scaleY: 4
// })

gsap.to('.rect', 3, {
  delay: 1,
  rotate: 2880,
  skewX: 45,
  fill: 'yellow',
  ease: "power1.in"
})

gsap.to('#b', 3, {delay: 1, x:500, repeat: -1})
gsap.from('#g', 3, {delay: 1, x:500, repeat: -1})
gsap.fromTo('#r', 3,{ x: 200}, {delay: 1, x:500, repeat: -1})