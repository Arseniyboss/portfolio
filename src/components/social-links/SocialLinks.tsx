import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa'
import { Container } from './styles'

const SocialLinks = () => {
  return (
    <Container>
      <a
        href='mailto:zakharchenkoarsenii2010@gmail.com'
        target='_self'
        aria-label='mailto link'
      >
        <FaEnvelope aria-hidden />
      </a>
      <a
        href='https://github.com/Arseniyboss'
        target='_blank'
        aria-label='github link'
      >
        <FaGithub aria-hidden />
      </a>
      <a
        href='https://www.linkedin.com/in/arseniy-zakharchenko-97a13a240'
        target='_blank'
        aria-label='linkedin link'
      >
        <FaLinkedin aria-hidden />
      </a>
    </Container>
  )
}

export default SocialLinks
