import React from 'react';
import {
  SideBarContainer,
  Icon, 
  CloseIcon,
  SideWrapper,
  SideMenu,
  SideLink,
  SideButtonWrap,
  SideBarRoute
} from './SideBar';

const SideBar = ({isOpen, toggle}) => {
  return (
   <SideBarContainer isOpen={isOpen} onClick={toggle}>
    <Icon>
      <CloseIcon/>
    </Icon>
    <SideWrapper>
      <SideMenu>
        <SideLink to='/about' onClick={toggle}> About </SideLink>
        <SideLink to='/products' onClick={toggle}> Products </SideLink>
        <SideLink to='/signup' onClick={toggle}> Sign Up </SideLink>
      </SideMenu>
      <SideButtonWrap>
        <SideBarRoute to='/signin'> Sign In </SideBarRoute>
      </SideButtonWrap>
    </SideWrapper>
   </SideBarContainer>
  )
}

export default SideBar;