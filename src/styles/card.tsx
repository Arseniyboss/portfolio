'use client'

import styled from 'styled-components'

export const CardWrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: var(--spacing);
  padding: 0 var(--spacing);
`

export const CardContainer = styled.article`
  box-shadow: var(--box-shadow);
  border-radius: var(--border-radius);
  overflow: hidden;
`

export const CardName = styled.p`
  text-align: center;
  font-weight: bold;
  padding: 1rem;
`
