'use client'

import { useGSAP } from '@gsap/react'
import { animateCard } from '@/utils/animations'
import { Project as Props } from '@/types'
import { CardImage } from '@/styles/card'
import { Container, ProjectName } from './styles'

const Project = ({ img, url, name }: Props) => {
  useGSAP(() => {
    animateCard()
  }, [])
  return (
    <a href={url} target='_blank' className='card'>
      <Container>
        <CardImage src={img} alt='' />
        <ProjectName>{name}</ProjectName>
      </Container>
    </a>
  )
}

export default Project
