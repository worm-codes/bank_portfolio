import Link from 'next/link';

import styled from 'styled-components';

import { Icon } from 'components';
import { devices } from 'theme';

import { contactInformation, siteMap } from '../../constant/footerData';

function LeftSection() {
  return (
    <LeftSectionWrapper>
      <div>
        <Title>Contact</Title>
        <FooterList>
          {contactInformation.map((contact, index) => (
            <ListElement key={`contact-${index}`}>
              <Link
                href={contact.url}
                rel="noreferrer noopener"
                target={contact.name === 'map-pin' ? '_blank' : '_self'}
              >
                <ContactWrapper>
                  <Icon name={contact.name} />
                  <ContactLabel>{contact.value}</ContactLabel>
                </ContactWrapper>
              </Link>
            </ListElement>
          ))}
        </FooterList>
      </div>
      <div>
        <Title>Navigation</Title>
        <FooterList>
          {siteMap.map((link, index) => (
            <ListElement key={`sitemap-url-${index}`}>
              <Link
                href={link.url}
                passHref
              >
                {link.label}
              </Link>
            </ListElement>
          ))}
        </FooterList>
      </div>
    </LeftSectionWrapper>
  );
}

export default LeftSection;

const LeftSectionWrapper = styled.div`
  flex: 2;
  display: flex;
  margin-left: ${p => p.theme.spacing.$20};
  gap: ${p => p.theme.spacing.$24};
  padding-top: ${p => p.theme.spacing.$12};
  flex-wrap: wrap;

  @media ${devices.desktop} {
    margin-left: ${p => p.theme.spacing.$8};
    gap: ${p => p.theme.spacing.$8};
  }

  @media ${devices.tablet} {
    margin-top: 144px;
    padding-top: 0;
    margin-left: ${p => p.theme.spacing.base};
    gap: 0;
    & > *:not(:last-child) {
      margin-right: ${p => p.theme.spacing.$8};
    }
  }
`;

const Title = styled.h4`
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.lg};
  line-height: ${p => p.theme.lineHeights.lg};
  color: ${p => p.theme.colors.grayDark.gray900};
`;

const FooterList = styled.ul`
  margin-bottom: ${p => p.theme.spacing.$12};
`;

const ListElement = styled.li`
  margin-top: ${p => p.theme.spacing.$3};
  font-weight: ${p => p.theme.fontWeights.regular};
  font-size: ${p => p.theme.fontSizes.md};
  line-height: ${p => p.theme.lineHeights.md};
  color: ${p => p.theme.colors.grayDark.gray800};

  &:hover {
    color: ${p => p.theme.colors.primary.base};
  }
`;

const ContactWrapper = styled.div`
  display: flex;
  gap: ${p => p.theme.spacing.$3};
`;

const ContactLabel = styled.span`
  max-width: 225px;
`;
