import Link from 'next/link'
import { Container, ProjectImage, ProjectFooter } from './styles'

type Props = {
  img: string
  url: string
  name: string
}

const Project = ({ img, url, name }: Props) => {
  return (
    <Link href={url} target='_blank'>
      <Container>
        <ProjectImage src={img} alt='' width={700} height={400} priority />
        <ProjectFooter>
          <p>{name}</p>
        </ProjectFooter>
      </Container>
    </Link>
  )
}

export default Project
