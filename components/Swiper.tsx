import { ReactNode } from 'react';

import styled from 'styled-components';
import SwiperDefaultProps, { Pagination, Autoplay, Keyboard, Navigation, Scrollbar } from 'swiper';
import { Swiper as SwiperContainer, SwiperSlide } from 'swiper/react';
import { SwiperOptions } from 'swiper/types';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import 'swiper/css/keyboard';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';

interface SwiperProps extends SwiperOptions {
  slideClass?: string;
  children?: ReactNode[];
  slideChange?: (swiperInstance: SwiperDefaultProps) => void;
  onSwiper?: (swiperInstance: SwiperDefaultProps) => void;
}

const Swiper = ({ slideClass, children, slideChange, onSwiper, ...props }: SwiperProps) => {
  return (
    <StyledSwiperContainer
      modules={[Pagination, Autoplay, Keyboard, Navigation, Scrollbar]}
      onSlideChange={slideChange}
      onSwiper={onSwiper}
      {...props}
    >
      {children &&
        (children.length > 1 ? (
          children.map((child, index) => (
            <SwiperSlide
              className={slideClass}
              key={index}
            >
              {child}
            </SwiperSlide>
          ))
        ) : (
          <SwiperSlide className={slideClass}>{children}</SwiperSlide>
        ))}
    </StyledSwiperContainer>
  );
};

export default Swiper;

const StyledSwiperContainer = styled(SwiperContainer)`
  .swiper-slide {
    height: auto;
  }
`;
