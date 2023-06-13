import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>

        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:123-456-7890">587-899-7321</LinkItem>
        </LinkColumn>

        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:rowlandsonbrandon@gmail.com" target="_blank">brandon@brandonrowlandson.tech</LinkItem>
        </LinkColumn>

      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Learning to code one day at a time</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href="https://github.com/Barndon99">
            <AiFillGithub size="3rem"/>
          </SocialIcons>
          <SocialIcons href="https://www.linkedin.com/in/brandon-rowlandson-377806177/">
            <AiFillLinkedin size="3rem"/>
          </SocialIcons>
          <SocialIcons href="https://www.instagram.com/brandon.rowlandson/">
            <AiFillInstagram size="3rem"/>
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
