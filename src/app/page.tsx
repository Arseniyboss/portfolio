'use client'

import { useGSAP } from '@gsap/react'
import { animateHomePage } from '@/utils/animations'
import { Container, InfoSection, Button, Video } from './styles'
import SocialLinks from '@/components/social-links/SocialLinks'

const Home = () => {
  useGSAP(() => {
    animateHomePage()
  }, [])
  return (
    <Container>
      <InfoSection aria-label='info section'>
        <h1>Hi! I am Arseniy Zakharchenko</h1>
        <p id='role'>Frontend Developer</p>
        <p id='summary'>I enjoy creating visually appealing user interfaces.</p>
        <Button id='button' as='a' href='/resume.pdf' download>
          Download Resume
        </Button>
        <SocialLinks />
      </InfoSection>
      <Video src='/wobbly-sphere.mp4' autoPlay loop muted playsInline />
    </Container>
  )
}

export default Home
