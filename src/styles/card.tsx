'use client'

import styled from 'styled-components'
import Image from 'next/image'

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: var(--spacing);
  padding: 0 var(--spacing);
`

export const CardContainer = styled.article`
  border-radius: var(--border-radius);
  overflow: hidden;
`

export const CardImage = styled(Image)`
  height: auto;
  width: 100%;
`

export const CardName = styled.p`
  text-align: center;
  font-weight: bold;
  padding: 1rem;
`
