'use client'

import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
  gap: var(--spacing);
  padding: 0 var(--spacing);

  @media screen and (max-width: 500px) {
    grid-template-columns: none;
  }
`
