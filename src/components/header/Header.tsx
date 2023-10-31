'use client'

import Link from 'next/link'
import { useState } from 'react'
import { FaTimes, FaBars } from 'react-icons/fa'
import { setBodyOverflow } from '@utils/setBodyOverflow'
import { Container, HeaderLogo, HeaderIconContainer, NavLinks } from './styles'

const Header = () => {
  const [isMobileNavbarOpen, setIsMobileNavbarOpen] = useState(false)

  const openMobileNav = () => {
    setIsMobileNavbarOpen(true)
    setBodyOverflow('hidden')
  }

  const closeMobileNav = () => {
    setIsMobileNavbarOpen(false)
    setBodyOverflow('auto')
  }

  return (
    <Container>
      <HeaderLogo>Arseniy</HeaderLogo>
      <HeaderIconContainer
        onClick={isMobileNavbarOpen ? closeMobileNav : openMobileNav}
        aria-expanded={isMobileNavbarOpen}
        aria-label={
          isMobileNavbarOpen
            ? 'close mobile navigation'
            : 'open mobile navigation'
        }
      >
        {isMobileNavbarOpen ? <FaTimes /> : <FaBars />}
      </HeaderIconContainer>
      <nav>
        <NavLinks $isMobileNavbarOpen={isMobileNavbarOpen}>
          <li>
            <Link href='/' onClick={closeMobileNav}>
              Home
            </Link>
          </li>
          <li>
            <Link href='/skills' onClick={closeMobileNav}>
              Skills
            </Link>
          </li>
          <li>
            <Link href='/projects' onClick={closeMobileNav}>
              Projects
            </Link>
          </li>
        </NavLinks>
      </nav>
    </Container>
  )
}

export default Header
