import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { GridContainer, Img, BlogCard } from '../Hero/HeroStyles';
import { LeftSection } from './HeroStyles';
import { hero } from '../../constants/logo';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        GSR CONSTRUCTION LLC
      </SectionTitle>
      <GridContainer>
      {hero.map(({ id, image }) => (
        <BlogCard key={id}>
          <Img src={image} />
        </BlogCard>
      ))}
      </GridContainer>
      <Button onClick={() => window.location = '#projects'}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;