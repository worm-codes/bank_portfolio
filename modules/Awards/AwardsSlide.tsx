import { useCallback, useEffect, useState } from 'react';

import NextImage from 'next/image';

import styled from 'styled-components';
import SwiperProps from 'swiper';

import { Card, Icon, Swiper } from 'components';
import { awards } from 'constant';
import { devices } from 'theme';

function AwardsSlide() {
  const years = awards ? awards.map(award => award.dateOfReceipt) : [];
  const minYear = Math.min(...years);
  const maxYear = Math.max(...years);
  const [activeYear, setActiveYear] = useState(maxYear);

  const changeYear = useCallback((swiperInstance: SwiperProps) => {
    const activeSlide = swiperInstance.slides[swiperInstance.activeIndex];
    setActiveYear(Number(activeSlide.children[0].getAttribute('data-year')));
  }, []);

  /** On first render, set active year to max year to prevent infinit slider
   */
  useEffect(() => {
    setActiveYear(maxYear);
  }, [awards]);

  return (
    <Wrapper>
      <SwiperContainer>
        <Swiper
          slideClass="swiper-slide"
          slidesPerView="auto"
          centeredSlides
          navigation={{
            prevEl: '#prev',
            nextEl: '#next',
          }}
          scrollbar={{ draggable: true, dragSize: 24 }}
          spaceBetween={48}
          slideChange={swiperInstance => changeYear(swiperInstance)}
        >
          {awards &&
            awards.map((award, index) => (
              <StyledAward
                key={`awards-${index}`}
                data-year={award.dateOfReceipt}
              >
                <NextImage
                  src={award.image}
                  width={120}
                  height={80}
                  alt={`award-${award.title}`}
                />
                <NextImage
                  src="/award-bottom.png"
                  width={187}
                  height={40}
                  alt="award-bottom"
                />
                <AwardTitle>{award.title}</AwardTitle>
                <AwardDesc>{award.description}</AwardDesc>
                <AwardYear>
                  {award.takenBy} ({award.dateOfReceipt})
                </AwardYear>
              </StyledAward>
            ))}
        </Swiper>
      </SwiperContainer>
      <Years>
        <ActiveYear>{activeYear}</ActiveYear>
        <EndYear>{maxYear}</EndYear>
        <StartYear>{minYear}</StartYear>
      </Years>
      <div>
        <Button id="prev">
          <Icon name="arrow-left" />
        </Button>
        <Button id="next">
          <Icon name="arrow-right" />
        </Button>
      </div>
    </Wrapper>
  );
}

export default AwardsSlide;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 72px 0 124px;
  width: 100%;

  @media ${devices.tablet} {
    padding: ${p => p.theme.spacing.$12} 0 ${p => p.theme.spacing.$20};
  }
`;

const SwiperContainer = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  min-height: 540px;
  width: 100%;

  .swiper {
    width: 100%;
  }

  .swiper-wrapper {
    width: 100%;
    @media ${devices.tablet} {
      max-width: 373px;
    }
  }

  .swiper-slide {
    max-width: 318px;
    width: 100%;
  }

  .swiper-scrollbar {
    position: absolute;
    max-width: 224px;
    height: 6px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 50;
    background-color: ${p => p.theme.colors.grayDark.gray200};

    @media ${devices.tablet} {
      max-width: 178px;
    }

    .swiper-scrollbar-drag {
      cursor: grab;
      background-color: ${p => p.theme.colors.primary.base};
    }
  }
`;

const StyledAward = styled(Card)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${p => p.theme.spacing.$6};
  min-height: 360px;
  background-color: ${p => p.theme.colors.white};
  ${p => p.theme.shadows.awardsShadow};
  text-align: center;
  & > *:not(:last-child) {
    margin-bottom: ${p => p.theme.spacing.$6};
  }
`;

const AwardTitle = styled.h6`
  font-size: ${p => p.theme.fontSizes.lg};
  line-height: ${p => p.theme.lineHeights.lg};
  color: ${p => p.theme.colors.grayDark.gray900};
  font-weight: ${p => p.theme.fontWeights.medium};
  ${p => p.theme.utils.lineClamp(1)};
`;

const AwardDesc = styled.p`
  font-size: ${p => p.theme.fontSizes.md};
  line-height: ${p => p.theme.lineHeights.md};
  color: ${p => p.theme.colors.grayDark.gray700};
  font-weight: ${p => p.theme.fontWeights.light};
  text-align: center;
  min-height: ${p => p.theme.spacing.$12};
  ${p => p.theme.utils.lineClamp(2)};
`;

const AwardYear = styled.p`
  font-size: ${p => p.theme.fontSizes.sm};
  line-height: ${p => p.theme.lineHeights.md};
  color: ${p => p.theme.colors.grayDark.gray700};
  font-weight: ${p => p.theme.fontWeights.medium};
`;

const ActiveYear = styled.h5`
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  font-size: ${p => p.theme.fontSizes.$3xl};
  line-height: ${p => p.theme.lineHeights.$2md};
  color: ${p => p.theme.colors.primary.base};
  font-weight: ${p => p.theme.fontWeights.medium};
`;

const Years = styled.div`
  width: 100%;
  position: relative;
  max-width: 312px;
  margin: 0 auto;
`;

const StartYear = styled.p`
  position: absolute;
  bottom: -10px;
  right: -10px;
  font-size: ${p => p.theme.fontSizes.lg};
  line-height: ${p => p.theme.lineHeights.lg};
  color: ${p => p.theme.colors.grayDark.gray600};
  font-weight: ${p => p.theme.fontWeights.medium};
`;

const EndYear = styled.p`
  position: absolute;
  bottom: -10px;
  left: -10px;
  font-size: ${p => p.theme.fontSizes.lg};
  line-height: ${p => p.theme.lineHeights.lg};
  color: ${p => p.theme.colors.grayDark.gray600};
  font-weight: ${p => p.theme.fontWeights.medium};
`;

const Button = styled.button`
  margin-top: ${p => p.theme.spacing.$12};
  padding: ${p => p.theme.spacing.$3};
  border: 1px solid ${p => p.theme.colors.grayDark.gray300};

  &:first-child {
    margin-right: ${p => p.theme.spacing.base};
  }
`;
