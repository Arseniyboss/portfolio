import { Project as Props } from '@/types'
import { CardImage } from '@/styles/card'
import { Container, ProjectName } from './styles'

const Project = ({ img, url, name }: Props) => {
  return (
    <a href={url} target='_blank'>
      <Container>
        <CardImage src={img} alt='' />
        <ProjectName>{name}</ProjectName>
      </Container>
    </a>
  )
}

export default Project
