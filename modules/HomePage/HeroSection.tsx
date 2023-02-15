import { useEffect, useState } from 'react';

import Image from 'next/image';

import { AnimatePresence, motion } from 'framer-motion';
import styled from 'styled-components';

import { Button } from 'components';
import { data } from 'constant';
import { devices } from 'theme';

interface ContentProps {
  $activeSlide: number;
  $dataLength: number;
}

function HeroSection() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      data && activeSlide === data.length - 1 ? setActiveSlide(0) : setActiveSlide(prev => prev + 1);
    }, 2000);

    return () => clearInterval(interval);
  }, [activeSlide]);

  return (
    <HeroSectionWrapper>
      <ContentWrapper>
        <TitleWrapper>
          <AnimatePresence key={activeSlide}>
            <Title>ANONYMOUS BANK ACADEMY</Title>
            <HeroTitle
              key={`title-${activeSlide}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
            >
              {data[activeSlide].title}
            </HeroTitle>
            <HeroSubtitle
              key={`subtitletitle-${activeSlide}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
            >
              {data[activeSlide].description}
            </HeroSubtitle>
          </AnimatePresence>
          <ButtonWrapper
            $dataLength={data.length || 2}
            $activeSlide={activeSlide}
          >
            {data.map((_, index) => (
              <StyledButton
                key={`slide-button-${index}`}
                onClick={() => setActiveSlide(index)}
              />
            ))}
          </ButtonWrapper>
        </TitleWrapper>
      </ContentWrapper>
      <ContentWrapper>
        <ImageWrapper>
          <AnimatePresence key={activeSlide}>
            <Background
              key={`bg-1-${activeSlide}`}
              initial={{ transform: 'rotate(-5deg)' }}
              animate={{ transform: ['rotate(5deg)', 'rotate(-5deg)', 'rotate(5deg)'] }}
              exit={{ transform: 'rotate(5deg)' }}
              transition={{ duration: 1 }}
            />
            <Background
              key={`bg-2-${activeSlide}`}
              initial={{ transform: 'rotate(5deg)' }}
              animate={{ transform: ['rotate(-5deg)', 'rotate(5deg)', 'rotate(-5deg)'] }}
              exit={{ transform: 'rotate(-5deg)' }}
              transition={{ duration: 1 }}
            />
            <HeroImageWrapper
              key={`image-${activeSlide}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ x: 0 }}
              transition={{ duration: 0.1 }}
            >
              <Image
                src={data[activeSlide].image}
                fill
                alt="Anonymous Bank"
              />
            </HeroImageWrapper>
          </AnimatePresence>
        </ImageWrapper>
      </ContentWrapper>
    </HeroSectionWrapper>
  );
}

export default HeroSection;

const HeroSectionWrapper = styled.div`
  width: 100%;
  height: 630px;
  display: flex;
  align-items: center;

  @media ${devices.tablet} {
    flex-direction: column;
    justify-content: center;
    height: 100%;
    & > div:first-of-type {
      margin-bottom: ${p => p.theme.spacing.$8};
    }
  }
`;

const ContentWrapper = styled.div`
  flex: 1;
  height: 100%;
`;

const TitleWrapper = styled.div`
  margin-top: ${p => p.theme.spacing.$24};
  margin-left: 300px;
  display: flex;
  flex-direction: column;
  gap: ${p => p.theme.spacing.base};
  max-width: 370px;
  min-height: 368px;
  word-wrap: break-word;
  position: relative;

  @media ${devices.widescreen} {
    margin-left: 150px;
  }

  @media ${devices.desktop} {
    margin-left: 50px;
  }

  @media ${devices.tablet} {
    margin-left: 0;
    margin-top: ${p => p.theme.spacing.$8};
    text-align: center;
    min-height: 216px;
    align-items: center;
    gap: 0;
    & > *:not(:last-child) {
      margin-bottom: ${p => p.theme.spacing.base};
    }
  }
`;

const Title = styled.h3`
  font-family: ${p => p.theme.fonts.title};
  font-weight: ${p => p.theme.fontWeights.regular};
  font-size: ${p => p.theme.fontSizes.sm};
  line-height: ${p => p.theme.lineHeights.md};
  color: ${p => p.theme.colors.primary.base};
`;

const HeroTitle = styled(motion.h1)`
  font-family: ${p => p.theme.fonts.title};
  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: ${p => p.theme.fontSizes.$3md};
  line-height: ${p => p.theme.lineHeights.$3xl};
  color: ${p => p.theme.colors.grayDark.gray900};
  ${p => p.theme.utils.lineClamp(3)};

  @media ${devices.desktop} {
    font-size: ${p => p.theme.fontSizes.$2md};
  }

  @media ${devices.tablet} {
    font-size: ${p => p.theme.fontSizes.xl};
    line-height: ${p => p.theme.lineHeights.lg};
    max-width: 85%;
  }
`;

const HeroSubtitle = styled(motion.h2)`
  font-weight: ${p => p.theme.fontWeights.light};
  font-size: ${p => p.theme.fontSizes.lg};
  line-height: ${p => p.theme.lineHeights.lg};
  ${p => p.theme.utils.lineClamp(3)};

  @media ${devices.tablet} {
    max-width: 343px;
  }
`;

const ButtonWrapper = styled.div<ContentProps>`
  display: flex;
  gap: ${p => p.theme.spacing.$3};
  position: absolute;
  bottom: 0;

  & > button:nth-child(${p => p.$activeSlide + 1}) {
    background-color: ${p => p.theme.colors.primary.base};
  }

  @media ${devices.tablet} {
    bottom: -320px;
    left: calc(50% - (32 * ${p => p.$dataLength - 1}px));
    gap: 0;

    & > *:not(:last-child) {
      margin-right: ${p => p.theme.spacing.base};
    }
  }
`;

const StyledButton = styled(Button)`
  width: ${p => p.theme.spacing.$8};
  height: ${p => p.theme.spacing.$2};
  padding: 0;
  border-radius: 0;
  background-color: ${p => p.theme.colors.grayDark.gray200};
`;

const ImageWrapper = styled.div`
  padding-left: ${p => p.theme.spacing.$5};
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  position: relative;
  margin-right: 230px;

  & > div:first-child {
    background: ${p => p.theme.colors.secondary.base};
    transform: rotate(5deg);
  }

  & > div:nth-child(2) {
    background: ${p => p.theme.colors.primary.base};
    transform: rotate(-5deg);
  }

  @media ${devices.widescreen} {
    margin-right: ${p => p.theme.spacing.$20};
  }

  @media ${devices.tablet} {
    margin-right: 0;
    padding-left: 0;
  }
`;

const Background = styled(motion.div)`
  width: 620px;
  height: 416px;
  position: absolute;

  @media ${devices.desktop} {
    width: 520px;
    height: 348px;
  }

  @media ${devices.laptop} {
    width: 420px;
    height: 282px;
  }

  @media ${devices.tablet} {
    width: 327px;
    height: 219px;
  }
`;

const HeroImageWrapper = styled(motion.div)`
  width: 620px;
  height: 416px;
  position: relative;
  z-index: 2;

  @media ${devices.desktop} {
    width: 520px;
    height: 348px;
  }

  @media ${devices.laptop} {
    width: 420px;
    height: 282px;
  }

  @media ${devices.tablet} {
    width: 327px;
    height: 219px;
  }
`;
