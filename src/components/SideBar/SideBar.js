import styled from 'styled-components';
import {FaTimes} from 'react-icons/fa';
import {Link as LinkScroll} from 'react-scroll';
import {Link as LinkRouter} from 'react-router-dom';

export const SideBarContainer = styled.aside`
position: fixed;
z-index: 999;
width: 100%;
height: 100%;
background: #FFECD1;
display: grid;
align-items: center;
top: 0;
left: 0;
transtion: 0.3s ease-in-out;
opacity: ${({isOpen}) => (isOpen ? '100% ': '0')};
top: ${({ isOpen}) => (isOpen ? '0' : '-100%')};
${'' /* top: 0; */}
`
export const SideMenu = styled.ul`
display: grid;
grid-template-columns: 1fr;
grid-template-rows: repeat(6, 80px);
text-align: center;

@media screen and (max-width: 480px){
  grid-template-rows: repeat(6, 60px);
}
`
export const CloseIcon = styled(FaTimes)`
color: #D7BBA8;
`
export const Icon = styled.div`
position: absolute;
top: 1.2rem;
right: 1.5rem;
background: transparent;
font-size: 2rem;
cursor: pointer;
`
export const SideWrapper = styled.div`
color: #E26D5A;
`
export const SideLink = styled(LinkScroll)`
display: flex;
align-items: center;
justify-content: center;
font-size: 1.5rem;
text-decoration: none;
list-style: none;
transition: 0.2 ease-in-out;
text-decoration: none;
color: #3E2A35;
cursor: pointer;

&:hover {
  color: #E09F3E;
  transition: 0.2s ease-in-out;
}
`

export const SideButtonWrap = styled.div`
display: flex;
justify-content: center;
`

export const SideBarRoute = styled(LinkRouter)`
border-radius: 50px;
background: #D7BBA8;
white-space: nowrap;
padding: 16px 64px;
color: #666;
font-size: 16px;
border: none;
cursor: pointer;
outline: none;
transition: all 0.2s ease-in-out;
text-decoration: none;

&:hover {
  transition: all 0.2s ease-in-out;
  color: #010060;
  background: #fff;
}
`