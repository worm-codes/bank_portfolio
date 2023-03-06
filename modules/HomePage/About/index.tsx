import Image from 'next/image';
import Link from 'next/link';

import { motion } from 'framer-motion';
import styled from 'styled-components';

import { Button } from 'components';
import { homecontentdata } from 'constant';
import { devices } from 'theme';

import Leaves from '../Leaves';

import Strokes from './Strokes';

function About() {
  return (
    <AboutWrapper
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <ContentWrapper>
        <ImageWrapper>
          <Strokes />
          <AboutImageWrapper>
            <Image
              src={homecontentdata.aboutImage}
              fill
              alt="about"
            />
          </AboutImageWrapper>
          <Strokes
            width={344}
            height={344}
          />
        </ImageWrapper>
      </ContentWrapper>
      <ContentWrapper>
        <DescriptionWrapper>
          <Title>A little bit about us</Title>
          <AboutTitle>
            {homecontentdata?.aboutTitle}
            <Leaves />
          </AboutTitle>
          <p>{homecontentdata.aboutDescription}</p>
          <ButtonWrapper>
            <Link href="/who-we-are">
              <StyledButton>Show more!</StyledButton>
            </Link>
          </ButtonWrapper>
        </DescriptionWrapper>
      </ContentWrapper>
    </AboutWrapper>
  );
}

export default About;

const AboutWrapper = styled(motion.div)`
  width: 100%;
  height: 100%;
  display: flex;
  background-color: ${p => p.theme.colors.secondary.lighter};

  @media ${devices.tablet} {
    flex-direction: column-reverse;
    align-items: center;
    margin-top: 112px;
  }
`;

const ContentWrapper = styled.div`
  flex: 1;

  @media ${devices.tablet} {
    position: relative;
    min-height: 368px;
  }
`;

const ImageWrapper = styled.div`
  margin-left: 300px;
  padding: ${p => p.theme.spacing.$24} 0;
  position: relative;

  & svg {
    position: absolute;
    z-index: -1;
  }

  & svg:first-child {
    top: ${p => p.theme.spacing.$2};
    left: 364px;

    @media ${devices.desktop} {
      width: 200px;
      height: 200px;
      left: 314px;
    }

    @media ${devices.laptop} {
      width: 150px;
      height: 150px;
      left: 254px;
    }

    @media ${devices.tablet} {
      width: 123px;
      height: 121px;
      left: -62px;
    }
  }

  & svg:last-child {
    top: 300px;
    left: -100px;

    @media ${devices.desktop} {
      width: 280px;
      height: 280px;
      top: 250px;
    }

    @media ${devices.laptop} {
      width: 220px;
      height: 220px;
      left: -50px;
    }

    @media ${devices.tablet} {
      width: 123px;
      height: 89px;
      left: 234px;
    }
  }

  @media ${devices.widescreen} {
    margin-left: 100px;
  }

  @media ${devices.desktop} {
    margin-left: 50px;
  }

  @media ${devices.tablet} {
    padding-top: ${p => p.theme.spacing.$8};
    margin-left: 0;
  }
`;

const AboutImageWrapper = styled.div`
  width: 550px;
  height: 450px;
  position: relative;

  @media ${devices.desktop} {
    width: 450px;
    height: 368px;
  }

  @media ${devices.laptop} {
    width: 343px;
    height: 280px;
  }
`;

const DescriptionWrapper = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  margin: ${p => p.theme.spacing.$24} 200px 0 100px;
  gap: ${p => p.theme.spacing.base};
  max-width: 440px;

  @media ${devices.widescreen} {
    margin: ${p => p.theme.spacing.$24} 150px 0 150px;
  }

  @media ${devices.desktop} {
    margin: ${p => p.theme.spacing.$24} 50px 0 50px;
  }

  @media ${devices.laptop} {
    margin: 0;
    margin-top: ${p => p.theme.spacing.$8};
    text-align: center;
    align-items: center;
    min-height: 368px;
  }

  p {
    color: ${p => p.theme.colors.grayDark.gray800};
    line-height: ${p => p.theme.lineHeights.md};
    font-weight: ${p => p.theme.fontWeights.light};

    @media ${devices.tablet} {
      margin: 0 ${p => p.theme.spacing.base};
    }
  }
`;

const Title = styled.h3`
  font-family: ${p => p.theme.fonts.title};
  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: ${p => p.theme.fontSizes.sm};
  line-height: ${p => p.theme.lineHeights.md};
  color: ${p => p.theme.colors.secondary.base};
  letter-spacing: 0.04em;

  @media ${devices.tablet} {
    font-size: ${p => p.theme.fontSizes.sm};
    line-height: ${p => p.theme.lineHeights.sm};
    max-width: 240px;
  }
`;

const AboutTitle = styled.div`
  font-family: ${p => p.theme.fonts.title};
  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: ${p => p.theme.fontSizes.$3xl};
  line-height: ${p => p.theme.lineHeights.$2md};
  color: ${p => p.theme.colors.grayDark.gray900};
  position: relative;

  & > svg {
    position: absolute;
    top: -${p => p.theme.spacing.$9};
    right: ${p => p.theme.spacing.$5};

    @media ${devices.laptop} {
      right: -${p => p.theme.spacing.$8};
    }

    @media ${devices.tablet} {
      display: none;
    }
  }

  @media ${devices.laptop} {
    font-size: ${p => p.theme.fontSizes.$2md};
    max-width: 300px;
  }

  @media ${devices.tablet} {
    font-size: ${p => p.theme.fontSizes.xl};
    line-height: ${p => p.theme.lineHeights.lg};
  }
`;

const ButtonWrapper = styled.div`
  align-self: flex-end;

  @media ${devices.tablet} {
    position: absolute;
    top: 712px;
    align-self: unset;
    padding-top: ${p => p.theme.spacing.$8};
  }
`;

const StyledButton = styled(Button)`
  background: ${p => p.theme.colors.secondary.base};
  border-radius: 0;
  padding: ${p => `${p.theme.spacing.$3} ${p.theme.spacing.$6}`};
  margin-top: ${p => p.theme.spacing.$2};

  @media ${devices.laptop} {
    margin-top: 0;
  }

  @media ${devices.tablet} {
    width: 343px;
  }
`;
