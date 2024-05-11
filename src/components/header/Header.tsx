'use client'

import Link from 'next/link'
import { useState } from 'react'
import { FaTimes, FaBars } from 'react-icons/fa'
import { Container, HeaderIconContainer, NavLinks } from './styles'
import navLinks from '@/data/navLinks'

const Header = () => {
  const [isMobileNavbarOpen, setIsMobileNavbarOpen] = useState(false)

  const openMobileNav = () => {
    setIsMobileNavbarOpen(true)
  }

  const closeMobileNav = () => {
    setIsMobileNavbarOpen(false)
  }
  return (
    <Container $isMobileNavbarOpen={isMobileNavbarOpen}>
      <p>Arseniy</p>
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
          {navLinks.map((link) => (
            <li key={link.id}>
              <Link href={link.href} onClick={closeMobileNav}>
                {link.label}
              </Link>
            </li>
          ))}
        </NavLinks>
      </nav>
    </Container>
  )
}

export default Header
