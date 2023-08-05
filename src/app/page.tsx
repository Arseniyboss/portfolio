import Link from 'next/link'
import { Metadata } from 'next'
import { Container, InfoSection, Button, HeroImage } from './styles'

export const metadata: Metadata = {
  title: 'Home',
}

const Home = () => {
  return (
    <Container>
      <InfoSection>
        <h1>Hi! I am Arseniy Zakharchenko</h1>
        <h2>Full Stack Developer</h2>
        <p>
          I enjoy creating modern and appealing UI using React. Also I provide
          high quality web development services with clean and manageable code
        </p>
        <Link href='mailto:arseniyboss5@gmail.com'>
          <Button>Contact Me</Button>
        </Link>
      </InfoSection>
      <HeroImage src='/hero.png' alt='' height={279} width={514} priority />
    </Container>
  )
}

export default Home
