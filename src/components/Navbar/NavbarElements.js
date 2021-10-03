import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom'
import { Link as LinkS } from 'react-scroll'
import LogoImage from '../../images/logo.png'
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';

export const Nav = styled.nav`
  background: #0000;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  position: sticky;
  top: 0;
  z-index: 10;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  paddinng: 0 24px;
  max-width: 1100px;
`;

export const NavLogo = styled(LinkR)`
  color: #000;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-left: 24px;
  width: 156px;
  position: relative;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url(${LogoImage});
`;

export const MobileIcon = styled.div`
  display: none;
  color: #000;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;
  padding-left: 0px;

  @media screen and (max-width: 790px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;
`;

export const NavLinks = styled(LinkS)`
  color: #000;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &.active {
    border-bottom: 3px solid #01bf71;
  }
  &:hover {
    color: #01bf71;
    transition: 0.1s ease-in-out;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 80px;
`;

export const ConnectButton = styled(WalletMultiButton)`
  @media screen and (max-width: 405px) {
    display: inherit;
    width: 80px;
    line-height: 25px;
    padding: 3px 8px;
    font-size: 12px;
  }
`;
