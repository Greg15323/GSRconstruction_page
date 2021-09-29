import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        GSR CONSTRUCTION LLC
      </SectionTitle>
      <SectionText>
      GSR Construction is a family owned and operated business, based out of Weber County, UT. Licensed and insured allows us to proudly service all of Utah. We specialize in both residential and commercial work, in which we pride ourselves with the ability to add custom detail work based on the customers needs/vision and budget. 
      </SectionText>
      <Button onClick={() => window.location = '#projects'}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;