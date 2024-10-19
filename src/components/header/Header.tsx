'use client'

import Link from 'next/link'
import { useState } from 'react'
import { FaTimes, FaBars } from 'react-icons/fa'
import { HeaderContainer, HeaderIconContainer, LinkWrapper } from './styles'
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
    <HeaderContainer>
      <p>Arseniy</p>
      <HeaderIconContainer
        onClick={toggleMobileNav}
        aria-expanded={isMobileNavOpen}
        aria-label={`${isMobileNavOpen ? 'close' : 'open'} mobile navigation`}
      >
        {isMobileNavOpen ? <FaTimes /> : <FaBars />}
      </HeaderIconContainer>
      <nav>
        <LinkWrapper $isMobileNavOpen={isMobileNavOpen}>
          {navLinks.map((link) => (
            <li key={link.id}>
              <Link href={link.href} onClick={closeMobileNav}>
                {link.label}
              </Link>
            </li>
          ))}
        </LinkWrapper>
      </nav>
    </HeaderContainer>
  )
}

export default Header
