'use client'

import styled from 'styled-components'

export const Container = styled.main`
  flex: 1 0 auto;
  display: flex;
  flex-direction: column;
  padding-bottom: var(--spacing);
`

export const Heading = styled.h1`
  text-align: center;
  margin: 1.5rem 0;
`

export const InvisibleButton = styled.button`
  background: none;
  color: inherit;
`
