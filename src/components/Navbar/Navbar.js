import styled from 'styled-components';
import {Link as LinkRouter} from 'react-router-dom';
import {Link as LinkScroll} from 'react-scroll'

export const Nav = styled.nav`
background: ${({scrollNav}) => (scrollNav ? '#284B63' : 'transparent')};
height: 80px;
margin-top: -80px;
display: flex;
justify-content: center;
align-items: center;
font-size: 1rem;
position: sticky;
top: 0;
z-index: 10;

@media screen and (max-width: 960px){
  transtion: 0.8s all ease;
}
`
export const NavbarContainer = styled.div`
display: flex;
justify-content: space-between;
height: 8px;
z-index: 1;
width: 100%;
padding: 0 50px;
max-width: 1110px;
`

export const NavLogo = styled(LinkRouter)`
color: #E7D8C9;
justify-self: flex-start;
cursor: pointer;
font-size: 1.5rem;
display: flex;
align-items: center;
margin-left: 24px;
font-weight: bold;
text-decoration: none;

`
export const MobileIcon = styled.div`
display: none;

@media screen and (max-width: 768px) {
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(-100%, 60%);
  font-size: 1.8rem;
  cursor: pointer;
  color: #fff;
}
`
export const NavMenu = styled.ul`
display: flex;
aligned-items: center;
list-style: none;
text-align: center;
margin-right: -23px;

@media screen and (max-width: 768px){
  display: none;
}
`
export const NavItems = styled.li`
${'' /* this was set to 80 orginally */}
height: 20px;
`
export const NavLink = styled(LinkScroll)`
color: #E7D8C9;
display: flex;
align-items: center;
text-decoration: none;
padding: 0 1rem;
height: 100%;
cursor: pointer;
${'' /* activates the hover bar below each link */}
&.active {
  border-bottom: 3px solid #E7D8C9;
}
`
export const NavButton = styled.nav`
display: flex;
align-items: center;

@media screen and (max-width: 768px){
  display: none;
}`

export const NavButtonLink = styled(LinkRouter)`
border-radius: 50px;
${'' /* this targets the signin button on the navbar */}
background: #BBB09B;
white-space: nowrap;
padding: 10px 22px;
color: #010606;
font-size: 16px; 
outline: none;
border: none;
cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration: none;

  &:hover {
  transition: all 0.2s ease-in-out;
  color: #010060;
  background: #fff;
}
`