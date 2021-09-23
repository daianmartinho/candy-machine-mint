import React from 'react';
import Wallet from '../Wallet';
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLinks,
  SidebarBtnWrap,
} from './SidebarElements';

const Sidebar = ({ isOpen, toggle }) => {

  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLinks to='mint'>Mint</SidebarLinks>
          <SidebarLinks to='about'>About</SidebarLinks>
          <SidebarLinks to='gallery'>Gallery</SidebarLinks>
          <SidebarLinks to='trade'>Trade</SidebarLinks>
        </SidebarMenu>
        <SidebarBtnWrap>
          <Wallet />
        </SidebarBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar;
