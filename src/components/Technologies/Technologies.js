import React from 'react';
import { AiOutlineSafetyCertificate } from 'react-icons/ai';
import { FaRegHandshake, FaHardHat } from 'react-icons/fa';
import { HiOutlineClipboardCheck } from 'react-icons/hi';
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
      <ListItem>
        <FaRegHandshake size="3rem" />
        <ListTitle>Integrity</ListTitle>
        <ListParagraph>
          We strive to sustian <br />
          clear communication <br />
          and keep you informed<br />
          on the progress of your <br />
          project.
        </ListParagraph>
      </ListItem>
      <ListItem>
        <HiOutlineClipboardCheck size="3rem" />
        <ListTitle>Reliability</ListTitle>
        <ListParagraph>
          We go the extra <br />
          distance and put <br />
          everything into your <br />
          project to ensure its <br />
          done right the first time.
        </ListParagraph>
      </ListItem>
      <ListItem>
        <FaHardHat size="3rem" />
        <ListTitle>Quality Workmanship</ListTitle>
        <ListParagraph>
          We utilize leading products <br />
          and gurantee perfection from <br />
          our highly skilled team on <br />
          every project.
          
        </ListParagraph>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
