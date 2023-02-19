/* eslint-disable react/no-unescaped-entities */

import Image from 'next/image';

import styled from 'styled-components';

import { iconGroup } from 'constant';
import { useResponsive } from 'hooks';
import { devices } from 'theme';

const InfoBoxSection = () => {
  const { isTablet } = useResponsive();

  return (
    <InfoBoxWrapper>
      {iconGroup.map((infoBox: InformationBoxProps, index: number) => {
        return (
          <InfoBox
            borderColor={infoBox.color}
            key={index}
          >
            <Image
              src={infoBox.icon}
              alt={infoBox.icon}
              width={isTablet ? 40 : 80}
              height={isTablet ? 40 : 80}
            />
            <InfoBoxTextGroup>
              <InfoTitle textColor={infoBox.color}>{infoBox.title}</InfoTitle>
              <InfoText>{infoBox.description}</InfoText>
            </InfoBoxTextGroup>
          </InfoBox>
        );
      })}
    </InfoBoxWrapper>
  );
};

export default InfoBoxSection;
const InfoBoxWrapper = styled.div`
  margin-bottom: ${p => p.theme.spacing.base};
  display: flex;
  flex-direction: column;
  gap: ${p => p.theme.spacing.base};

  @media ${devices.tablet} {
    margin-top: ${p => p.theme.spacing.$16};
    margin-bottom: ${p => p.theme.spacing.$16};
  }
`;

const InfoText = styled.p`
  font-family: ${p => p.theme.fonts.text};
  line-height: ${p => p.theme.lineHeights.md};
  @media ${devices.tablet} {
    padding-top: ${p => p.theme.spacing.base};
  }
`;

const InfoBox = styled('div')<{ borderColor: string }>`
  display: flex;
  align-items: center;
  border: 1px solid ${p => p.borderColor};
  width: 1060px;
  justify-content: space-evenly;
  padding: 0 ${p => p.theme.spacing.$6};
  gap: ${p => p.theme.spacing.$10};
  @media ${devices.tablet} {
    gap: 0;
    flex-direction: column;
    align-items: flex-start;
    max-width: 343px;
    padding: ${p => p.theme.spacing.base};
  }
`;

const InfoBoxTextGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 auto;
  max-width: 849px;
  padding-bottom: ${p => p.theme.spacing.base};
  @media ${devices.tablet} {
    padding-top: ${p => p.theme.spacing.$3};
  }
`;

const InfoTitle = styled('h6')<{ textColor: string }>`
  font-family: ${p => p.theme.fonts.title};
  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: ${p => p.theme.fontSizes.xl};
  line-height: ${p => p.theme.lineHeights.md};
  color: ${p => p.textColor};
  margin-top: ${p => p.theme.spacing.base};
  margin-bottom: ${p => p.theme.spacing.base};

  @media ${devices.tablet} {
    font-size: ${p => p.theme.fontSizes.lg};
    line-height: ${p => p.theme.lineHeights.lg};
  }
`;
