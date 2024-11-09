import gsap from 'gsap'

export const animateHomePage = () => {
  const timeline = gsap.timeline()
  timeline.fromTo('h1', { y: -20 }, { opacity: 1, y: 0 })
  timeline.fromTo('#role', { x: -20 }, { opacity: 1, x: 0 })
  timeline.fromTo('#summary', { x: 20 }, { opacity: 1, x: 0 })
  timeline.fromTo('#button', { y: 20 }, { opacity: 1, y: 0 })
  timeline.to('.social-link', { opacity: 1, stagger: 0.1 })
  timeline.to('video', { display: 'initial', scale: 1, duration: 2 })
}

export const animateCard = () => {
  gsap.to('.card', { display: 'initial', opacity: 1, delay: 0.5, stagger: 0.5 })
}
