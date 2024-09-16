'use client'

import Link from 'next/link'
import { useState } from 'react'
import { FaTimes, FaBars } from 'react-icons/fa'
import { Container, HeaderIconContainer, NavLinks } from './styles'
import navLinks from '@/data/navLinks'

const Header = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false)

  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen)
  }

  const closeMobileNav = () => {
    setIsMobileNavOpen(false)
  }
  return (
    <Container>
      <p>Arseniy</p>
      <HeaderIconContainer
        onClick={toggleMobileNav}
        aria-expanded={isMobileNavOpen}
        aria-label={`${isMobileNavOpen ? 'close' : 'open'} mobile navigation`}
      >
        {isMobileNavOpen ? <FaTimes /> : <FaBars />}
      </HeaderIconContainer>
      <nav>
        <NavLinks $isMobileNavOpen={isMobileNavOpen}>
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
