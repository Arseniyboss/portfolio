'use client'

import { useRef, useEffect } from 'react'
import { useGSAP } from '@gsap/react'
import { animateHomePage } from '@/utils/animations'
import { Container, InfoSection, Button, Video } from './styles'
import SocialLinks from '@/components/social-links/SocialLinks'

const Home = () => {
  const videoRef = useRef<HTMLVideoElement>(null)

  useGSAP(() => {
    animateHomePage()
  }, [])

  useEffect(() => {
    const video = videoRef.current
    if (!video) return
    const handlePause = () => {
      if (!video.paused) return
      video.play().catch(() => {})
    }
    video.addEventListener('pause', handlePause)
    return () => {
      video.removeEventListener('pause', handlePause)
    }
  }, [videoRef])
  return (
    <Container>
      <InfoSection aria-label='info section'>
        <h1>Hi! I am Arseniy Zakharchenko</h1>
        <p id='role'>Frontend Developer</p>
        <p id='summary'>I create visually appealing user interfaces.</p>
        <Button id='button' as='a' href='/resume.pdf' download>
          Download Resume
        </Button>
        <SocialLinks />
      </InfoSection>
      <Video ref={videoRef} src='/wobbly-sphere.mp4' autoPlay loop muted playsInline />
    </Container>
  )
}

export default Home
