import { IoMail, IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5'
import { Container } from './styles'

const SocialLinks = () => {
  return (
    <Container>
      <a
        href='mailto:zakharchenkoarsenii2010@gmail.com'
        target='_self'
        aria-label='mailto link'
      >
        <IoMail aria-hidden />
      </a>
      <a
        href='https://github.com/Arseniyboss'
        target='_blank'
        aria-label='github link'
      >
        <IoLogoGithub aria-hidden />
      </a>
      <a
        href='https://www.linkedin.com/in/arseniy-zakharchenko-97a13a240'
        target='_blank'
        aria-label='linkedin link'
      >
        <IoLogoLinkedin aria-hidden />
      </a>
    </Container>
  )
}

export default SocialLinks
