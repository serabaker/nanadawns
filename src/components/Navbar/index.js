import React, {useEffect, useState} from 'react';
import {
Nav, 
NavbarContainer, 
NavLogo, 
MobileIcon, 
NavItems, 
NavMenu,
NavLink, 
NavButton, 
NavButtonLink} 
from './Navbar';
import {FaBars} from 'react-icons/fa';
import {IconContext} from 'react-icons/lib';
import { animateScroll as scroll } from 'react-scroll';
import image from '../../images/butters-&-Oils-logos.png'


const Navbar = ({toggle}) => {
  const [scrollNav, setScrollNav] = useState(false);
  const toggleHome = () => {
    scroll.scrollToTop();
  }

  const changeNav = () => {
    if (window.scrollY >=80) {
      setScrollNav(true);
    }
    else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeNav)
  }, []);
  const logoTitle = 'Nana Dawn\'s  Butters & Oils'

  return (
    <>
    <IconContext.Provider value={{color: '#fff'}}>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <NavLogo src={image} alt='logo' onClick={toggleHome} to='/'>{logoTitle}</NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars/>
          </MobileIcon>
          <NavMenu>
          <NavItems>
             <NavLink
             to='home'
             smooth={true}
             duration={500}
            // spy tell me which one is clicked on
             spy={true}
             exact='true'
            // match the position of the navbar height so it knows how to transition
             offset={-80}>Home</NavLink>
            </NavItems>
            <NavItems>
              <NavLink
              smooth={true}
              duration={500}
            // spy tell me which one is clicked on
              spy={true}
              exact='true'
            // match the position of the navbar height so it knows how to transition
              offset={-80} 
              to='about'>About</NavLink>
            </NavItems>
            <NavItems>
             <NavLink 
               smooth={true}
              duration={500}
            // spy tell me which one is clicked on
              spy={true}
              exact='true'
            // match the position of the navbar height so it knows how to transition
              offset={-80} to='products'>Products</NavLink>
            </NavItems>
            {/* <NavItems>
             <NavLink
             to='signup'
             smooth={true}
             duration={500}
            // spy tell me which one is clicked on
             spy={true}
             exact='true'
            // match the position of the navbar height so it knows how to transition
             offset={-80}
             >Sign Up</NavLink>
            </NavItems> */}
          </NavMenu>
          <NavButton>
            <NavButtonLink
            to='/signin'>Sign In</NavButtonLink>
          </NavButton>
        </NavbarContainer>
      </Nav>
      </IconContext.Provider>
    </>
  )
}

export default Navbar;