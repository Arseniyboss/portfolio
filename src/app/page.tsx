'use client'

import { useGSAP } from '@gsap/react'
import { animateInfoSection, animateHeroImage } from '@/utils/animations'
import { Container, InfoSection, Button, HeroImage } from './styles'
import SocialLinks from '@/components/social-links/SocialLinks'

const Home = () => {
  useGSAP(() => {
    animateInfoSection()
    animateHeroImage()
  }, [])
  return (
    <Container>
      <InfoSection aria-label='info section'>
        <h1 id='heading'>Hi! I am Arseniy Zakharchenko</h1>
        <p id='subheading'>Full Stack Developer</p>
        <p id='description'>
          I enjoy creating modern and appealing UI using React. Also I provide
          high quality web development services with clean and manageable code
        </p>
        <Button id='button' as='a' href='/resume.pdf' download>
          Download Resume
        </Button>
        <SocialLinks />
      </InfoSection>
      <HeroImage src='/hero.svg' alt='' height={283} width={514} priority />
    </Container>
  )
}

export default Home
