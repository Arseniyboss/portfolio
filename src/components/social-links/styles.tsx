'use client'

import styled from 'styled-components'
import { breakpoints } from '@/breakpoints'

export const LinkWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 2rem;
  opacity: 1;

  a {
    opacity: 0;
  }

  @media screen and (max-width: ${breakpoints.home}) {
    align-self: center;
  }
`
