import Image from 'next/image';

import styled from 'styled-components';
import { Swiper } from 'swiper/types';

import { devices } from 'theme';

interface SwiperThumbsProps {
  item: string;
  index: number;
  activeIndex: number;
  swiper: Swiper;
}

interface ActiveThumbProps {
  $isActive: boolean;
}

function SwiperThumbs({ item, index, activeIndex, swiper }: SwiperThumbsProps) {
  return (
    <ImageWrapper
      key={index}
      onClick={() => {
        swiper.slideTo(index);
      }}
      $isActive={activeIndex === index}
    >
      <Image
        src={item}
        fill
        alt={`slide-thumbs-${index}`}
      />
    </ImageWrapper>
  );
}

export default SwiperThumbs;

const ImageWrapper = styled.div<ActiveThumbProps>`
  position: relative;
  min-width: ${p => (p.$isActive ? '242px' : '164.5px')};
  min-height: ${p => (p.$isActive ? '140px' : '112px')};
  cursor: pointer;
  transition: all ease 0.5s;

  img {
    object-fit: cover;
  }

  &:not(:last-child) {
    margin-right: ${p => p.theme.spacing.base};
    @media ${devices.tablet} {
      margin-right: ${p => p.theme.spacing.$2};
    }
  }

  @media ${devices.tablet} {
    min-width: ${p => (p.$isActive ? '104px' : '71.5px')};
    min-height: ${p => (p.$isActive ? '56px' : '40px')};
  }
`;
