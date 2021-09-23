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
  NavBtn
} from './NavbarElements'

import Wallet from '../Wallet';

const Navbar = ({ toggle }) => {

  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to='/'>Funky Stickers</NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
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
            <Wallet />
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;