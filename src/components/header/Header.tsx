import { HeaderContainer, NavLinks } from './styles'

const Header = () => {
  return (
    <HeaderContainer>
      <h1>Arseniy</h1>
      <nav>
        <NavLinks>
          <li>About</li>
          <li>Skills</li>
          <li>Projects</li>
          <li>Contact</li>
        </NavLinks>
      </nav>
    </HeaderContainer>
  )
}

export default Header
