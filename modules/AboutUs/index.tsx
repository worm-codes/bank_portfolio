import styled from 'styled-components';

import { aboutcontent } from 'constant';
import { devices } from 'theme';

import EducationCardSection from './EducationCard';
import InfoBoxSection from './InfoBoxSection';

function AboutUs() {
  return (
    <Wrapper>
      <Subtitle>WHO WE ARE?</Subtitle>
      <Title>{aboutcontent.mainTitle}</Title>
      <Description>{aboutcontent.mainDescription}</Description>
      <AboutContainer>
        <DescriptionContainer>
          <SubTitle>{aboutcontent.title}</SubTitle>
          <SubDescription>{aboutcontent.description}</SubDescription>
        </DescriptionContainer>

        <InfoBoxSection />

        <DescriptionContainer>
          <ApplicationTitle>{aboutcontent.subTitle}</ApplicationTitle>
          <SubDescription>{aboutcontent.subDescription}</SubDescription>
        </DescriptionContainer>

        <EducationCardSection />
      </AboutContainer>
    </Wrapper>
  );
}

export default AboutUs;
const Wrapper = styled.div`
  position: relative;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;

  & > svg {
    position: absolute;
    z-index: -1;

    @media ${devices.tablet} {
      top: ${p => p.theme.spacing.$6};
    }
  }

  & > svg:first-child {
    right: 0;
  }

  & > svg:nth-child(2) {
    left: 0;
  }
  & > div:last-child {
    margin-bottom: 126px;
  }
`;

const Subtitle = styled.h6`
  font-family: ${p => p.theme.fonts.title};
  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: ${p => p.theme.fontSizes.sm};
  line-height: ${p => p.theme.lineHeights.md};
  color: ${p => p.theme.colors.primary.base};
  margin-top: ${p => p.theme.spacing.$20};

  @media ${devices.tablet} {
    font-size: ${p => p.theme.fontSizes.xs};
    line-height: ${p => p.theme.lineHeights.sm};
    margin-top: ${p => p.theme.spacing.$8};
  }
`;

const ApplicationTitle = styled.h6`
  font-family: ${p => p.theme.fonts.title};
  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: ${p => p.theme.fontSizes.$3xl};
  line-height: ${p => p.theme.lineHeights.$2md};
  color: ${p => p.theme.colors.grayDark.gray900};
  margin-top: ${p => p.theme.spacing.$3};
  text-align: center;

  @media ${devices.tablet} {
    font-size: ${p => p.theme.fontSizes.xl};
    line-height: ${p => p.theme.lineHeights.lg};
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

const SubTitle = styled.h6`
  font-family: ${p => p.theme.fonts.title};
  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: ${p => p.theme.fontSizes.xl};
  line-height: ${p => p.theme.lineHeights.$2md};
  color: ${p => p.theme.colors.grayDark.gray900};
  margin-top: ${p => p.theme.spacing.$3};

  @media ${devices.tablet} {
    font-size: ${p => p.theme.fontSizes.lg};
    line-height: ${p => p.theme.lineHeights.lg};
  }
`;

const SubDescription = styled.p`
  line-height: ${p => p.theme.lineHeights.lg};
  color: ${p => p.theme.colors.grayDark.gray700};
  margin-top: ${p => p.theme.spacing.$6};
  text-align: center;
  max-width: 956px;
  margin: ${p => p.theme.spacing.base};

  @media ${devices.phone} {
    width: 343px;
    text-align: center;
    line-height: ${p => p.theme.lineHeights.md};
  }
`;

const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
  line-height: ${p => p.theme.lineHeights.lg};
  text-align: center;
  max-width: 1060px;

  @media ${devices.phone} {
    width: 343px;
    text-align: center;
  }
`;

const Description = styled.p`
  font-weight: ${p => p.theme.fontWeights.medium};
  line-height: ${p => p.theme.lineHeights.md};
  color: ${p => p.theme.colors.grayDark.gray700};
  margin-top: ${p => p.theme.spacing.$6};
  text-align: center;
  max-width: 620px;

  @media ${devices.phone} {
    width: 343px;
    text-align: center;
  }
`;

const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${p => p.theme.spacing.$8};
  margin-top: ${p => p.theme.spacing.$10};

  @media ${devices.tablet} {
    gap: 0;
    margin-top: ${p => p.theme.spacing.$8};
  }
`;
