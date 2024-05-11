'use client'

import styled from 'styled-components'
import { CardContainer, CardName } from '@/styles/card'

export const Container = styled(CardContainer)`
  transition: scale 0.5s;

  &:has(a:focus),
  &:hover {
    scale: 1.05;
  }
`

export const ProjectName = styled(CardName)`
  background: white;
  color: #22476d;
  margin-top: -1px;
`
