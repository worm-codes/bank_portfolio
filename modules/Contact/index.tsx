import styled from 'styled-components';

import { ContactForm } from 'forms';
import { devices } from 'theme';

import ContactInfo from './ContactInfo';

function Contact() {
  return (
    <Wrapper>
      <Subtitle>CONTACT</Subtitle>
      <Title>Reach Us</Title>
      <Description>How can we help you?</Description>
      <ContactForm />
      <ContactInfo />
    </Wrapper>
  );
}

export default Contact;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  & > svg {
    position: absolute;
    &:first-of-type {
      right: 0;
      top: 268px;
    }
    &:last-of-type {
      left: 0;
      top: 132px;
    }
  }
`;

const Subtitle = styled.h6`
  font-family: ${p => p.theme.fonts.title};
  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: ${p => p.theme.fontSizes.sm};
  line-height: ${p => p.theme.lineHeights.md};
  color: ${p => p.theme.colors.primary.base};
  margin-top: ${p => p.theme.spacing.$8};

  @media ${devices.tablet} {
    font-size: ${p => p.theme.fontSizes.xs};
    line-height: ${p => p.theme.lineHeights.sm};
    margin-top: ${p => p.theme.spacing.$8};
  }
`;

const Title = styled.h3`
  font-family: ${p => p.theme.fonts.title};
  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: ${p => p.theme.fontSizes.$3xl};
  line-height: ${p => p.theme.lineHeights.$2md};
  color: ${p => p.theme.colors.grayDark.gray900};
  margin-top: ${p => p.theme.spacing.$3};

  @media ${devices.tablet} {
    font-size: ${p => p.theme.fontSizes.$2xl};
    line-height: ${p => p.theme.lineHeights.xl};
  }

  @media ${devices.phone} {
    max-width: 200px;
    text-align: center;
  }
`;

const Description = styled.p`
  font-weight: ${p => p.theme.fontWeights.light};
  line-height: ${p => p.theme.lineHeights.md};
  color: ${p => p.theme.colors.grayDark.gray700};
  margin-top: ${p => p.theme.spacing.$6};
  margin-bottom: ${p => p.theme.spacing.$20};
  text-align: center;
  max-width: 620px;

  @media ${devices.phone} {
    width: 343px;
    text-align: center;
  }
`;
