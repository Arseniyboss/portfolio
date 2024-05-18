import gsap from 'gsap'

export const animateHeader = () => {
  gsap.fromTo('#logo', { x: -20 }, { opacity: 1, x: 0 })
  gsap.fromTo('.nav-link', { x: 20 }, { opacity: 1, x: 0, stagger: 0.3 })
}

export const animateHomePage = () => {
  const timeline = gsap.timeline()
  timeline.fromTo('#heading', { y: -20 }, { opacity: 1, y: 0 })
  timeline.fromTo('#subheading', { x: -20 }, { opacity: 1, x: 0 })
  timeline.fromTo('#description', { x: 20 }, { opacity: 1, x: 0 })
  timeline.fromTo('#button', { y: 20 }, { opacity: 1, y: 0 })
  timeline.to('.social-link', { opacity: 1, stagger: 0.1 })
  timeline.to('img', { opacity: 1, scale: 1, duration: 1 })
}

export const animateCard = () => {
  gsap.to('.card', { display: 'block', opacity: 1, delay: 0.3, stagger: 0.5 })
}
