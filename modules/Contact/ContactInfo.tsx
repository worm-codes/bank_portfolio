import Link from 'next/link';

import styled, { useTheme } from 'styled-components';

import { Icon } from 'components';
import { contactInfo } from 'constant';
import { devices } from 'theme';

function ContactInfo() {
  const { colors } = useTheme();

  return (
    <Wrapper>
      <ContactContainer>
        {contactInfo.map((contact, index) => (
          <Contact key={`contact-${index}`}>
            <IconWrapper>
              <Icon
                name={contact.icon}
                color={colors.white}
              />
            </IconWrapper>
            <Label>{contact.label}</Label>
            <Link
              href={contact.url}
              rel="noreferrer noopener"
              target={contact.icon === 'map-pin' ? '_blank' : '_self'}
            >
              {contact.link}
            </Link>
          </Contact>
        ))}
      </ContactContainer>
    </Wrapper>
  );
}

export default ContactInfo;

const Wrapper = styled.div`
  width: 100%;
  background-color: ${p => p.theme.colors.secondary.lighter};
  margin-top: ${p => p.theme.spacing.$24};
  margin-bottom: 124px;
  display: flex;
  justify-content: center;
`;

const ContactContainer = styled.div`
  padding: ${p => p.theme.spacing.$20} 190px;
  display: flex;

  @media ${devices.tablet} {
    padding: ${p => {
      const { base, $8 } = p.theme.spacing;
      return `${$8} ${base}`;
    }};
    flex-direction: column;
  }
`;

const Contact = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  min-width: 325px;
  &:not(:last-of-type) {
    margin-right: ${p => p.theme.spacing.$10};

    @media ${devices.tablet} {
      margin-right: 0;
      margin-bottom: ${p => p.theme.spacing.$10};
    }
  }
`;

const IconWrapper = styled.div`
  padding: ${p => p.theme.spacing.$2};
  background-color: ${p => p.theme.colors.primary.base};
  border-radius: ${p => p.theme.radius.full};
  width: ${p => p.theme.spacing.$10};
  height: ${p => p.theme.spacing.$10};
  margin-bottom: ${p => p.theme.spacing.base};
`;

const Label = styled.h6`
  margin-bottom: ${p => p.theme.spacing.$2};
  font-size: ${p => p.theme.fontSizes.lg};
  line-height: ${p => p.theme.lineHeights.lg};
  color: ${p => p.theme.colors.grayDark.gray700};
  font-weight: ${p => p.theme.fontWeights.medium};
`;
