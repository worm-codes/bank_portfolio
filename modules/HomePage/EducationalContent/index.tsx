import { useRef } from 'react';

import { useInView } from 'framer-motion';
import styled from 'styled-components';

import { educationData } from 'constant';
import { useResponsive } from 'hooks';
import { devices } from 'theme';

import Leaves from '../Leaves';

import Counter from './Counter';
import MobileLeaves from './MobileLeaves';

function EducationalContent() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref);
  const { isLaptop } = useResponsive();

  return (
    <Container>
      <Title>Under the umbrella of Anonymous Bank Academy;</Title>
      <EducationWrapper ref={ref}>
        {educationData.map((education, index) => (
          <Education key={`education-${index}`}>
            <EducationTitle>{education.label}</EducationTitle>

            <Counter
              number={education.count as number}
              shouldStartCountup={isInView}
            />
          </Education>
        ))}
        {isLaptop ? (
          <>
            <MobileLeaves />
            <MobileLeaves />
            <MobileLeaves />
            <MobileLeaves />
          </>
        ) : (
          <>
            <Leaves fill="#fff" />
            <Leaves fill="#fff" />
            <Leaves fill="#fff" />
            <Leaves fill="#fff" />
            <Leaves fill="#fff" />
            <Leaves fill="#fff" />
          </>
        )}
      </EducationWrapper>
      <Subtitle>learning together...</Subtitle>
    </Container>
  );
}

export default EducationalContent;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h2`
  font-family: ${p => p.theme.fonts.title};
  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: ${p => p.theme.fontSizes.$3xl};
  line-height: ${p => p.theme.lineHeights.$2md};
  color: ${p => p.theme.colors.grayDark.gray900};
  padding-top: ${p => p.theme.spacing.$24};

  @media ${devices.tablet} {
    padding-top: ${p => p.theme.spacing.$16};
    font-size: ${p => p.theme.fontSizes.xl};
    line-height: ${p => p.theme.lineHeights.lg};
  }
`;

const EducationWrapper = styled.div`
  display: flex;
  margin-top: ${p => p.theme.spacing.$16};
  background-color: ${p => p.theme.colors.primary.base};
  padding: ${p => p.theme.spacing.$12};
  color: ${p => p.theme.colors.white};
  justify-content: center;
  position: relative;

  & > svg {
    opacity: 0.4;
    position: absolute;
  }

  & > svg:first-of-type {
    left: ${p => p.theme.spacing.base};

    @media ${devices.laptop} {
      top: 65px;
    }
  }

  & > svg:nth-of-type(2) {
    left: 183px;

    @media ${devices.laptop} {
      bottom: 272px;
    }
  }

  & > svg:nth-of-type(3) {
    left: 466px;

    @media ${devices.laptop} {
      top: 286px;
    }
  }

  & > svg:nth-of-type(4) {
    left: 718px;

    @media ${devices.laptop} {
      bottom: 60px;
    }
  }

  & > svg:nth-of-type(5) {
    left: 978px;

    @media ${devices.laptop} {
      display: none;
    }
  }

  & > svg:nth-of-type(6) {
    left: 1173px;

    @media ${devices.desktop} {
      display: none;
    }
  }

  & > svg:nth-child(even) {
    bottom: -15%;
    transform: rotate(45deg) rotateY(180deg);

    @media ${devices.laptop} {
      transform: rotate(180deg);
      left: -8px;
    }
  }

  & > svg:nth-child(odd) {
    top: -20%;
    transform: rotate(320deg) rotateY(180deg) scale(1, -1);

    @media ${devices.laptop} {
      top: unset;
      left: 306px;
      transform: unset;
    }
  }

  @media ${devices.desktop} {
    padding: ${p => p.theme.spacing.$8};
  }

  @media ${devices.laptop} {
    flex-direction: column;
    padding: ${p => p.theme.spacing.$6};
    margin-top: ${p => p.theme.spacing.$6};
  }
`;

const Education = styled.div`
  width: 148px;
  margin: 0 ${p => p.theme.spacing.$14};
  text-align: center;
  position: relative;

  &::after {
    content: '';
    border-right: 1px solid rgba(255, 255, 255, 0.3);
    height: 100%;
    position: absolute;
    top: 0;
    right: -${p => p.theme.spacing.$14};

    @media ${devices.tablet} {
      display: none;
    }
  }

  &:first-of-type {
    margin-left: 0;
  }

  &:last-of-type {
    border-right: none;
    margin-right: 0;
  }

  @media ${devices.desktop} {
    margin: 0 ${p => p.theme.spacing.$8};
  }

  @media ${devices.laptop} {
    margin: ${p => p.theme.spacing.$6} 0 0 0;
    width: 295px;

    &:first-of-type {
      margin-top: 0;
    }
  }
`;

const EducationTitle = styled.h5`
  font-family: ${p => p.theme.fonts.title};
  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: ${p => p.theme.fontSizes.md};
  line-height: ${p => p.theme.lineHeights.lg};
  color: ${p => p.theme.colors.grayDark.gray200};

  @media ${devices.laptop} {
    font-size: ${p => p.theme.fontSizes.sm};
    line-height: ${p => p.theme.lineHeights.md};
    margin-bottom: ${p => p.theme.spacing.$2};
  }
`;

const Subtitle = styled.h6`
  font-family: ${p => p.theme.fonts.title};
  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: ${p => p.theme.fontSizes.xl};
  line-height: ${p => p.theme.lineHeights.lg};
  padding-top: ${p => p.theme.spacing.$8};
  padding-bottom: ${p => p.theme.spacing.$24};

  @media ${devices.tablet} {
    padding-top: ${p => p.theme.spacing.base};
    font-size: ${p => p.theme.fontSizes.lg};
  }
`;
