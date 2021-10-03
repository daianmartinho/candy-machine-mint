import styled from "styled-components";
import { Button } from "@material-ui/core";
import BgImage from '../../images/bg.jpg';
import ConnectBtnImage from '../../images/connect_btn.png';
import MintBtnImage from '../../images/mint_btn.png';
import SoldBtnImage from '../../images/sold_btn.png';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';

export const MainContainer = styled.div`
  display: flex;
  justify-content: center; // centers in the flex direction and the default flex-direction is row
  align-items: center; // centers perpendicular to the flex direction
  height: 100vh;
  width: 100vw;
  position: fixed;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url(${BgImage});
  top: 0px;
`;

export const CounterText = styled.span``;

export const MintContainer = styled.div`
  align-items: center;
  justify-content: center;
`;

export const MintButton = styled(Button)`
  height: 300px;
  width: 300px;
  background-image: url(${props => props.disabled ? SoldBtnImage : MintBtnImage});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  cursor: pointer;
  position: relative;
  z-index: 100;
  &:hover {
    height: 320px;
    width: 320px;
    transition: 0.2s ease-in-out;
  }
`;

export const ConnectButton = styled(WalletMultiButton)`
height: 300px;
width: 300px;
font-size: 0px;
background-image: url(${ConnectBtnImage});
background-position: center;
background-size: cover;
background-repeat: no-repeat;
background-color: #0000;
cursor: pointer;
position: relative;
z-index: 100;
&:hover:not([disabled]) {
  height: 320px;
  width: 320px;
  transition: 0.2s ease-in-out;
  background-image: url(${ConnectBtnImage});
}
&:[disabled] {
  height: 320px;
  width: 320px;
  transition: 0.2s ease-in-out;
  background-image: url(${ConnectBtnImage});
}
`;