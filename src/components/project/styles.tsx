'use client'

import styled from 'styled-components'
import Image from 'next/image'

export const Container = styled.article`
  border-radius: var(--radius);
  overflow: hidden;
  transition: 0.5s;

  &:hover {
    transform: scale(1.05);
  }
`

export const ProjectImage = styled(Image)`
  width: 100%;
  height: auto;
  aspect-ratio: 1.75 / 1;
`

export const ProjectFooter = styled.div`
  background: white;
  color: #4e7093;
  text-align: center;
  text-transform: capitalize;
  font-weight: bold;
  padding: 1rem;
`
