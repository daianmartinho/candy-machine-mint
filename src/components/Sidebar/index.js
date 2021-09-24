import React from 'react';
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLinks,
} from './SidebarElements';

const Sidebar = ({ isOpen, toggle }) => {

  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLinks to='mint' onClick={toggle}>Mint</SidebarLinks>
          <SidebarLinks to='about' onClick={toggle}>About</SidebarLinks>
          <SidebarLinks to='gallery' onClick={toggle}>Gallery</SidebarLinks>
          <SidebarLinks to='trade' onClick={toggle}>Trade</SidebarLinks>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar;
