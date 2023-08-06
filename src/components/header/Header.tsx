'use client'

import Link from 'next/link'
import { useState } from 'react'
import { FaTimes, FaBars } from 'react-icons/fa'
import { setBodyOverflow } from '@utils/setBodyOverflow'
import {
  HeaderContainer,
  HeaderLogo,
  HeaderIconContainer,
  NavLinks,
} from './styles'

const Header = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false)

  const openMobileNav = () => {
    setIsMobileNavOpen(true)
    setBodyOverflow('hidden')
  }

  const closeMobileNav = () => {
    setIsMobileNavOpen(false)
    setBodyOverflow('auto')
  }

  return (
    <HeaderContainer>
      <HeaderLogo>Arseniy</HeaderLogo>
      <HeaderIconContainer
        onClick={isMobileNavOpen ? closeMobileNav : openMobileNav}
      >
        {isMobileNavOpen ? <FaTimes /> : <FaBars />}
      </HeaderIconContainer>
      <nav>
        <NavLinks $isMobileNavOpen={isMobileNavOpen}>
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
    </HeaderContainer>
  )
}

export default Header
