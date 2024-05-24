import gsap from 'gsap'
import { RefObject } from 'react'
import { Mesh } from 'three'

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
}

export const animateCard = () => {
  gsap.to('.card', { display: 'block', opacity: 1, delay: 0.3, stagger: 0.5 })
}

export const animateShape = (ref: RefObject<Mesh>) => {
  if (!ref.current) return
  gsap.from(ref.current.scale, {
    x: 0,
    y: 0,
    z: 0,
    duration: 1.3,
    delay: 2.5,
    ease: 'elastic',
  })
}
