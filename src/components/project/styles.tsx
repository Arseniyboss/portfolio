'use client'

import styled from 'styled-components'
import { CardContainer, CardName } from '@styles/card'

export const Container = styled(CardContainer)`
  transition: 0.5s;

  &:hover {
    transform: scale(1.05);
  }
`

export const ProjectName = styled(CardName)`
  background: white;
  color: #4e7093;
`
