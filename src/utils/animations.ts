import gsap from 'gsap'

export const animateNavLinks = () => {
  gsap.fromTo(
    '.nav-link',
    { opacity: 0, x: 20 },
    { opacity: 1, x: 0, stagger: 0.3 }
  )
}

export const animateHeader = () => {
  gsap.fromTo('#logo', { x: -20 }, { opacity: 1, x: 0 })
  animateNavLinks()
}

export const animateInfoSection = () => {
  const timeline = gsap.timeline()
  timeline.fromTo('#heading', { y: -20 }, { opacity: 1, y: 0 })
  timeline.fromTo('#subheading', { x: -20 }, { opacity: 1, x: 0 })
  timeline.fromTo('#description', { x: 20 }, { opacity: 1, x: 0 })
  timeline.fromTo('#button', { y: 20 }, { opacity: 1, y: 0 })
  timeline.fromTo('.social-link', { x: 20 }, { opacity: 1, x: 0, stagger: 0.1 })
}

export const animateHeroImage = () => {
  gsap.to('img', { opacity: 1, scale: 1, duration: 1.5, delay: 0.8 })
}

export const animateCard = (target: string) => {
  gsap.to(target, { display: 'block', opacity: 1, delay: 0.2, stagger: 0.4 })
}
