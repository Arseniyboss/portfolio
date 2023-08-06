'use client'

import styled from 'styled-components'
import { CardContainer, CardImage, CardName } from '@styles/card'

export const Container = styled(CardContainer)`
  box-shadow: var(--box-shadow);
`

export const SkillImage = styled(CardImage)`
  margin-top: 1rem;
`

export const SkillName = styled(CardName)`
  font-size: 1.2rem;
`
