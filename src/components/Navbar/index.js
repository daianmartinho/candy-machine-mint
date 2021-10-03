import React from 'react';
import {FaBars} from 'react-icons/fa'
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  ConnectButton
} from './NavbarElements'

const Navbar = ({ toggle }) => {

  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to='/'/>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu className="font-shadows">
            <NavItem>
              <NavLinks to='mint'>Mint</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='about'>About</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='gallery'>Gallery</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='trade'>Trade</NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <ConnectButton/>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;