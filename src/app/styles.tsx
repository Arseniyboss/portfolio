'use client'

import styled from 'styled-components'
import Image from 'next/image'
import { breakpoints } from '@breakpoints'

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: inherit;
  padding: 0 5rem;

  @media screen and (max-width: ${breakpoints.about}) {
    flex: initial;
    flex-direction: column;
    gap: 2rem;
    padding: 2rem;
  }
`

export const InfoSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.5rem;
  max-width: 500px;

  @media screen and (max-width: ${breakpoints.about}) {
    align-items: initial;
  }
`

export const Button = styled.button`
  --lightness: 55%;
  background: hsl(235, 91%, var(--lightness));
  color: white;
  font-size: 1.2rem;
  padding: 0.8rem 4rem;
  border-radius: 0.25rem;
  outline: none;
  border: none;
  cursor: pointer;

  &:hover {
    --lightness: 50%;
    transition: all 0.3s ease;
  }

  @media screen and (max-width: ${breakpoints.about}) {
    width: 100%;
  }
`

export const HeroImage = styled(Image)`
  max-width: 85vw;
  height: auto;
`
