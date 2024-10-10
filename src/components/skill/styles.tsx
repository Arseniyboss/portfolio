'use client'

import styled from 'styled-components'
import { CardContainer, CardName } from '@/styles/card'

export const Container = styled(CardContainer)`
  box-shadow: var(--box-shadow);
`

export const SkillImage = styled.img`
  margin-top: 1rem;
  aspect-ratio: 1.8;
`

export const SkillName = styled(CardName)`
  font-size: 1.2rem;
`
