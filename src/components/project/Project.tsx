'use client'

import { useGSAP } from '@gsap/react'
import { animateCard } from '@/utils/animations'
import { Project as Props } from '@/types'
import { CardImage } from '@/styles/card'
import { Container, ProjectName } from './styles'

const Project = ({ img, url, name }: Props) => {
  useGSAP(() => {
    animateCard('.project')
  }, [])
  return (
    <Container className='project'>
      <a href={url} target='_blank'>
        <CardImage src={img} alt='' />
        <ProjectName>{name}</ProjectName>
      </a>
    </Container>
  )
}

export default Project
