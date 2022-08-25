import React, {useState} from 'react';
// import Video from '../../video/video.mp4'
import {
  HeroContainer, 
  HeroBg, 
  // VideoBg,
  HeroContent, 
  HeroP, 
  Hero1, 
  HeroButtonWrapper, 
  ArrowForward, 
  ArrowRight
} from './HeroSection';
import {Button} from '../Button/Button';



const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover)
  }

  return (
    <HeroContainer id="home">
    <HeroBg>
      {/* <VideoBg autoplay loop muted src={Video} type='video/mp4'/> */}
    </HeroBg>
    <HeroContent>
      <Hero1>
        <HeroP>
          Sign up for a new account today to recieve free shipping on your next order.
        </HeroP>
        <HeroButtonWrapper>
          <Button to='signup' onMouseEnter={onHover} onMouseLeave={onHover}
          primary='true'
          dark='true'
          smooth={true}
          duration={500}
        // spy tell me which one is clicked on
          spy={true}
          exact='true' 
        // match the position of the navbar height so it knows how to transition
          offset={-80}> Get started {hover ? <ArrowForward/> : <ArrowRight/>}</Button>
        </HeroButtonWrapper>
      </Hero1>
    </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection;