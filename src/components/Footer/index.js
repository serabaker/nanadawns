import React from 'react';
import {FooterContainer, FooterLink, FooterWrapper, FooterLinkItem, FooterLinksWrapper, FooterLinksContainer, FooterLinkTitle, SocialIconLinks, SocialLogo, SocialMedia, SocialMediaWrapper, WebsiteRights, SocialIcons} from './Footer';
import {FaFacebook} from 'react-icons/fa';
import {animateScroll as scroll} from 'react-scroll';

const Footer = () => {

  const theYearOfOurLord = new Date().getFullYear();
  const toggleHome = () => {
    scroll.scrollToTop();
  }
  return (
    <FooterContainer> 
      <FooterWrapper>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItem>
              <FooterLinkTitle>About us </FooterLinkTitle>
                <FooterLink to='/signin'>Testimonials</FooterLink>
            </FooterLinkItem>
            <FooterLinkItem>
              <FooterLinkTitle>About us </FooterLinkTitle>
                <FooterLink to='/signin'>Testimonials</FooterLink>
            </FooterLinkItem>
          </FooterLinksWrapper>

          <FooterLinksWrapper>
            <FooterLinkItem>
              <FooterLinkTitle>About us </FooterLinkTitle>
                <FooterLink to='/signin'>Testimonials</FooterLink>
            </FooterLinkItem>
            <FooterLinkItem>
              <FooterLinkTitle>About us </FooterLinkTitle>
                <FooterLink to='/signin'>Testimonials</FooterLink>
            </FooterLinkItem>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrapper>
            <SocialLogo onClick={toggleHome} to='/'>Nana Dawn's</SocialLogo>
            <WebsiteRights>nana dawn's © {theYearOfOurLord} All rights resevered </WebsiteRights>
            <SocialIcons>
              <SocialIconLinks to='//www.facebook.com' target='_blank' aria-label='Facebook'>
              <FaFacebook/>
              </SocialIconLinks>
            
            </SocialIcons>
          </SocialMediaWrapper>
        </SocialMedia>
      </FooterWrapper>
    </FooterContainer>
  )
}

export default Footer;