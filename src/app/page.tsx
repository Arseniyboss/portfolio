'use client'

import { useGSAP } from '@gsap/react'
import { animateHomePage } from '@/utils/animations'
import { Container, InfoSection, Button } from './styles'
import SocialLinks from '@/components/social-links/SocialLinks'
import WobblySphere from '@/components/WobblySphere'

const Home = () => {
  useGSAP(() => {
    animateHomePage()
  }, [])
  return (
    <Container>
      <InfoSection aria-label='info section'>
        <h1 id='heading'>Hi! I am Arseniy Zakharchenko</h1>
        <p id='subheading'>Full Stack Developer</p>
        <p id='description'>
          I enjoy creating modern and appealing UI using React. Also I provide
          high quality web development services with clean and manageable code.
        </p>
        <Button id='button' as='a' href='/resume.pdf' download>
          Download Resume
        </Button>
        <SocialLinks />
      </InfoSection>
      <WobblySphere />
    </Container>
  )
}

export default Home
