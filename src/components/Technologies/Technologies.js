import React from 'react';
import { DiFirebase, AiOutlineSafetyCertificate, DiZend } from 'react-icons/ai';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider />
    <SectionTitle>Values</SectionTitle>
    <SectionText>
      Here is preview of our values. 
    </SectionText>
    <List>
      <ListItem>
        <AiOutlineSafetyCertificate size="3rem" />
        <ListTitle>Safety</ListTitle>
        <ListParagraph>
          We aim to maintain <br />
          a clean and safe <br />
          work environment.
        </ListParagraph>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
