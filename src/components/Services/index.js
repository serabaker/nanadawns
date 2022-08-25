import React from 'react';
import Icon1 from '../../images/icon-1.jpeg';
import Icon2 from '../../images/icon-2.jpeg';
import Icon3 from '../../images/icon-1.jpeg';


import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesH2,
  ServicesP,
  ServicesIcon
} from './Services';

const Services = () => {
  return (
    <ServicesContainer>
      <ServicesH1>Products</ServicesH1>
      <ServicesWrapper>
      {/* can make how many cards site will need */}
      <ServicesCard>
        <ServicesIcon src={Icon1}/>
        <ServicesH2> Lets get started with  </ServicesH2>
        <ServicesP> Show your hair some love</ServicesP>
      </ServicesCard>

      <ServicesCard>
        <ServicesIcon src={Icon2}/>
        <ServicesH2> Body Oils </ServicesH2>
        <ServicesP> Show your body some love this fall</ServicesP>
      </ServicesCard>

      <ServicesCard>
        <ServicesIcon src={Icon3} />
        <ServicesH2> Hair Moisturizers </ServicesH2>
        <ServicesP> Show your hair some love this fall</ServicesP>
      </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Services;