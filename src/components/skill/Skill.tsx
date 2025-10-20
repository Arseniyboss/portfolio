'use client'

import { useGSAP } from '@gsap/react'
import { animateCard } from '@/utils/animations'
import { Skill as Props } from '@/types'
import { CardName } from '@/styles/card'
import { Container } from './styles'

const Skill = ({ img, name }: Props) => {
  useGSAP(() => {
    animateCard()
  }, [])
  return (
    <Container className="card">
      <img src={img} alt="" />
      <CardName>{name}</CardName>
    </Container>
  )
}

export default Skill
