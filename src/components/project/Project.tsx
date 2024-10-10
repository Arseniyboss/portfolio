'use client'

import { useGSAP } from '@gsap/react'
import { animateCard } from '@/utils/animations'
import { Project as Props } from '@/types'
import { Container, ProjectName } from './styles'
import Image from 'next/image'

const Project = ({ img, url, name }: Props) => {
  useGSAP(() => {
    animateCard()
  }, [])
  return (
    <a href={url} target='_blank' className='card'>
      <Container>
        <Image src={img} alt='' width={750} height={500} priority />
        <ProjectName>{name}</ProjectName>
      </Container>
    </a>
  )
}

export default Project
