'use client'

import styled from 'styled-components'
import { breakpoints } from '@/breakpoints'

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: inherit;
  padding: 0 5rem;

  @media screen and (max-width: ${breakpoints.home}) {
    flex: initial;
    flex-direction: column;
    gap: 1rem;
    padding: var(--spacing);
    padding-bottom: 0;
  }
`

export const InfoSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.5rem;
  max-width: 500px;

  > * {
    opacity: 0;
  }

  h1 {
    font-size: 2rem;
  }

  p:first-of-type {
    font-size: 1.5rem;
    font-weight: bold;
  }
`

export const Button = styled.button`
  --lightness: 40%;
  background: hsl(240, 100%, var(--lightness));
  color: white;
  text-align: center;
  font-size: 1.2rem;
  padding: 0.8rem 2.5rem;
  border-radius: var(--border-radius);
  transition: background-color 0.3s ease;

  &:hover {
    --lightness: 35%;
  }

  @media screen and (max-width: ${breakpoints.home}) {
    width: 100%;
  }
`

export const CanvasContainer = styled.div`
  padding: 0.5rem;
  width: 480px;
  height: 380px;

  @media screen and (max-width: 530px) {
    width: 80vw;
    height: 60vw;
  }
`
