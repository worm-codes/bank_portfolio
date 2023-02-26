import { useState } from 'react';

import Image from 'next/image';

import styled from 'styled-components';
import { Swiper as SwiperProps } from 'swiper/types';

import { Icon, Swiper } from 'components';
import { useResponsive } from 'hooks';
import { devices } from 'theme';

import SwiperThumbs from './SwiperThumbs';

interface NewResponse {
  data: SingleNewProps;
}

function NewsSlider({ data }: NewResponse) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [swiper, setSwiper] = useState<SwiperProps | null>(null);
  const { isTablet } = useResponsive();

  return (
    <>
      {data.sliderStrings && (
        <SwiperWrapper>
          <Swiper
            slideClass="swiper-slide"
            slidesPerView="auto"
            navigation={{
              prevEl: '#prevSlide',
              nextEl: '#nextSlide',
            }}
            slideChange={(swiperInstance: SwiperProps) => setActiveIndex(swiperInstance.activeIndex)}
            onSwiper={(swiper: SwiperProps) => setSwiper(swiper)}
          >
            {data.sliderStrings.map((image, index) => (
              <Image
                src={image}
                width={isTablet ? 343 : 1060}
                height={isTablet ? 172 : 532}
                alt={`slider-photo-${index}`}
                key={`slider-photo-${index}`}
              />
            ))}
          </Swiper>
          <BottomWrapper>
            <ThumbsWrapper>
              {data.sliderStrings.map((item, index) => (
                <SwiperThumbs
                  key={index}
                  item={item}
                  index={index}
                  activeIndex={activeIndex}
                  swiper={swiper as SwiperProps}
                />
              ))}
            </ThumbsWrapper>
            <Button id="prevSlide">
              <Icon name="arrow-left" />
            </Button>
            <Button id="nextSlide">
              <Icon name="arrow-right" />
            </Button>
          </BottomWrapper>
        </SwiperWrapper>
      )}
    </>
  );
}

export default NewsSlider;

const SwiperWrapper = styled.div`
  max-width: 1060px;
  display: flex;
  flex-direction: column;
  margin-top: -270px;

  .swiper {
    width: 100%;

    @media ${devices.tablet} {
      width: 343px;
    }
  }

  img {
    object-fit: cover;
  }

  @media ${devices.phone} {
    margin-top: -100px;
  }
`;

const BottomWrapper = styled.div`
  position: relative;
  margin-top: ${p => p.theme.spacing.base};
  display: flex;
  align-items: center;
  justify-content: center;
  height: 140px;

  @media ${devices.tablet} {
    margin-top: ${p => p.theme.spacing.$2};
    height: 56px;
  }
`;

const ThumbsWrapper = styled.div`
  width: 964px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media ${devices.tablet} {
    width: 263px;
  }
`;

const Button = styled.button`
  padding: ${p => p.theme.spacing.$1};
  border: 1px solid ${p => p.theme.colors.grayDark.gray300};
  position: absolute;

  &:first-of-type {
    left: 0;
  }

  &:last-of-type {
    right: 0;
  }
`;
