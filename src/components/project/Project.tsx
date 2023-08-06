import Link from 'next/link'
import { Project as Props } from '@types'
import { CardImage } from '@styles/card'
import { Container, ProjectName } from './styles'

const Project = ({ img, url, name }: Props) => {
  return (
    <Link href={url} target='_blank'>
      <Container>
        <CardImage src={img} alt='' width={700} height={400} priority />
        <ProjectName>{name}</ProjectName>
      </Container>
    </Link>
  )
}

export default Project
