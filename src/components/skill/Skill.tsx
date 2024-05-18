'use client'

import { useGSAP } from '@gsap/react'
import { animateCard } from '@/utils/animations'
import { Skill as Props } from '@/types'
import { Container, SkillImage, SkillName } from './styles'

const Skill = ({ img, name }: Props) => {
  useGSAP(() => {
    animateCard()
  }, [])
  return (
    <Container className='card'>
      <SkillImage src={img} alt='' />
      <SkillName>{name}</SkillName>
    </Container>
  )
}

export default Skill
