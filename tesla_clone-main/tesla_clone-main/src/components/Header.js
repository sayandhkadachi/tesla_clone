import React, { useState } from 'react'
import styled from 'styled-components'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Translate } from '@mui/icons-material';

function Header() {
  
    const [burgerStatus, setBurgerStatus] = useState(false);

  return (
    <Container>
      <a>
         <img src="/images/logo.svg"/>
      </a>
      <Menu>
        <a href='#'>Model S</a>
        <a href='#'>Model 3</a>
        <a href='#'>Model X</a>
        <a href='#'>Model Y</a>
      </Menu>
      <RightMenu>
        <a href='#'>Shop</a>
        <a href='#'>Tesla Account</a>
        <CustomMenu onClick={() => setBurgerStatus(true)}/>
      </RightMenu>
      <BurgerNav show={burgerStatus}>
          <CloseWrapper>
              <CustomClose onClick={()=>setBurgerStatus(false)}/>
          </CloseWrapper>
          <li><a href='#'>Exixsing Inventory</a></li>
          <li><a href='#'>Used Inventory</a></li>
          <li><a href='#'>Trade-In</a></li>
          <li><a href='#'>Cybertruck</a></li>
          <li><a href='#'>Roadster</a></li>
          <li><a href='#'>Exixsing Inventory</a></li>
          <li><a href='#'>Exixsing Inventory</a></li>
          <li><a href='#'>Exixsing Inventory</a></li>


      </BurgerNav>

    </Container>
  )
}

export default Header

const Container = styled.div`
   position: fixed;
   top: 0;
   left: 0;
   right: 0;
   min-height: 60px;
   display: flex;
   align-items: center;
   justify-content: space-between;
   justify-content: space-between;
   padding: 0 20px;
   z-index: 1;
`

const Menu = styled.div`
    display: flex;
    align-tems: center;
    justify-content: center;
    flex: 1;
    
    a{
      font-weight: 600;
      text-transform: uppercase;
      padding: 0 10px;
      flex-wrap: no-wrap;
    }
    @media(max-width: 768px) {
       display: none;
    }

`

const RightMenu = styled.div`
   
  display: flex;
  align-items: center;
a{
     font-weight: 600;
     text-transform: uppercase;
     margin: 10px;
     
   }

`

const CustomMenu = styled(MenuIcon)`
  cursor: pointer;
`

const BurgerNav = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    background: white;
    width: 300px;
    z-index: 10;
    list-style: none;
    padding: 20px;
    display: flex;
    flex-direction: column;
    text-align: start;
    transform: ${props => props.show ? 'translateX(0)' : 'Translate(100%)'};
    transition: transform 0.2s;
    li{
       padding: 15px 0;
       border-bottom: 1px solid rgba(0,0,0,0.2); 

       a{
          font-weight: 600;

       }
    }
    `
const CustomClose = styled(CloseIcon)`

`

const CloseWrapper = styled.div`
    display: flex;
    justify-content: flex-end;

`