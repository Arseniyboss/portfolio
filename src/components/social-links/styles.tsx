'use client'

import styled from 'styled-components'
import { breakpoints } from '@/breakpoints'

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 2rem;

  @media screen and (max-width: ${breakpoints.home}) {
    align-self: center;
  }
`
