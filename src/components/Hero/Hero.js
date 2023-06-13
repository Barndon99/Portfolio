import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Brandon <br />
        Rowlandson
      </SectionTitle>
      <SectionText> 
        AKA Barndon99. Month to month I turn ideas into apps. Day to day I turn coffee into code. ☕️ 

      TODO ADD CAROUSEL FOR PROJECTS
      </SectionText>
      <Button onClick={() => window.location = '#about'}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;