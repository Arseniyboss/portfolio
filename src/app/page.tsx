import { Metadata } from 'next'
import { Container, InfoSection, Button, HeroImage } from './styles'
import SocialLinks from '@/components/social-links/SocialLinks'

export const metadata: Metadata = {
  title: 'Home',
}

const Home = () => {
  return (
    <Container>
      <InfoSection aria-label='info section'>
        <h1>Hi! I am Arseniy Zakharchenko</h1>
        <p>Full Stack Developer</p>
        <p>
          I enjoy creating modern and appealing UI using React. Also I provide
          high quality web development services with clean and manageable code
        </p>
        <Button as='a' href='/resume.pdf' download>
          Download Resume
        </Button>
        <SocialLinks />
      </InfoSection>
      <HeroImage src='/hero.svg' alt='' height={283} width={514} priority />
    </Container>
  )
}

export default Home
