import styled from 'styled-components'
import { breakpoints } from '@/breakpoints'
import { InvisibleButton } from '@/styles/globals'

type Props = {
  $isMobileNavOpen: boolean
}

export const Container = styled.header<Props>`
  background: var(--background);
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  padding: 0 var(--spacing);
  box-shadow: var(--box-shadow);
  height: var(--header-height);
  z-index: 1;

  p {
    font-size: 2rem;
  }
`

export const HeaderIconContainer = styled(InvisibleButton)`
  display: none;

  @media screen and (max-width: ${breakpoints.mobileNav}) {
    position: absolute;
    display: flex;
    align-items: center;
    right: var(--spacing);
    font-size: 1.8rem;
    cursor: pointer;
  }
`

export const NavLinks = styled.ul<Props>`
  display: flex;
  gap: 1.5rem;
  font-size: 1.2rem;

  @media screen and (max-width: ${breakpoints.mobileNav}) {
    text-align: center;
    flex-direction: column;
    position: absolute;
    left: 0;
    gap: 2rem;
    padding-top: 1.5rem;
    width: 100%;
    height: calc(100vh - (var(--header-height)));
    top: var(--header-height);
    background: var(--background);
    display: ${({ $isMobileNavOpen }) => !$isMobileNavOpen && 'none'};
  }
`
