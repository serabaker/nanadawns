import React from 'react';
import {
InfoContainer,
DataRow,
DataWrapper,
Column1,
TextWrapper,
TopLine,
Heading,
Subtitle,
ButtonWrapper,
ImgWrap,
Column2,
Img
 } from './InfoSection';
import {Button}  from '../Button/Button';

const InfoSection = ({id, lightBg, lightText, darkText, img, alt, description, headline, topLine, primary, dark, dark2, col1, col2, buttonLabel }) => {
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <DataWrapper>
          <DataRow>
            <Column1 col1={col1}>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle darkText={darkText}>{description}</Subtitle>
                <ButtonWrapper>
                  <Button to='home' 
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact={+true}
                    offset={-80}
                    primary={primary ? 1 : 0}
                    dark={dark ? 1 : 0}
                    dark2={dark2 ? 1 :0 }
                  > {buttonLabel}</Button>
                </ButtonWrapper>
              </TextWrapper>
            </Column1>
            <Column2 col2={col2}>
              <ImgWrap>
                <Img src={img} alt={alt}/>
              </ImgWrap>
            </Column2>
          </DataRow>
        </DataWrapper>
      </InfoContainer>
    </>
  )
}

export default InfoSection;