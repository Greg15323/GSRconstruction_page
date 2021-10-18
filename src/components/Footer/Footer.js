import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { Section, SectionDivider, SectionTitle, SectionText } from '../../styles/GlobalComponents';
import { SocialIcons } from '../Header/HeaderStyles';
import { ListTitle, CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper nopadding id="footer">
      <SectionTitle main>Contact</SectionTitle>
      <ListTitle>Let's work together! <br />
      Call or email us for a free estimate.</ListTitle>
      <LinkColumn>
        <LinkTitle>Phone</LinkTitle>
        <LinkItem href="tel:435-225-6099">435-225-6099</LinkItem>
       </LinkColumn>
       <LinkColumn>
        <LinkTitle>Email</LinkTitle>
        <LinkItem href="mailto:gsrconstructionut@gmail.com">GSRCONSTRUCTIONUT@GMAIL.COM</LinkItem>
       </LinkColumn>
      <LinkList>
      </LinkList>
      <CompanyContainer>
        <Slogan>GSR CONSTRUCTION © 2021 | <LinkItem href="https://www.linkedin.com/in/greg-rodriguez-5936331b5/">Designed by Greg Rodriguez</LinkItem>
        </Slogan>
      </CompanyContainer>
    </FooterWrapper>
  );
};

export default Footer;
