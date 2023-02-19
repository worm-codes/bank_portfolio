import styled from 'styled-components';

import { Swiper } from 'components';

import EducationCard from '../EducationComponents/EducationCard';

import getGroup from './groupCardDescriptions';

interface CardProps {
  isAboutAppCard: boolean;
  cardContents?: EducationCardProps[];
}

function CardSwiper({ isAboutAppCard, cardContents }: CardProps) {
  const descriptionGroup = cardContents ? getGroup(cardContents, isAboutAppCard) : [];
  return (
    <SwiperWrapper isAboutAppCard={isAboutAppCard}>
      <Swiper
        slideClass="swiper-slide"
        slidesPerView={isAboutAppCard ? 1.6 : 1.2}
        navigation={{ prevEl: '#prev', nextEl: '#next' }}
        spaceBetween={isAboutAppCard ? 0 : 8}
      >
        {descriptionGroup.map((group, index) => (
          <MobileSwipeSection key={index}>
            {group.map((value: string, index: number) => (
              <EducationCard
                isAboutAppCard={isAboutAppCard}
                key={index}
                description={value}
              />
            ))}
          </MobileSwipeSection>
        ))}
      </Swiper>
    </SwiperWrapper>
  );
}

export default CardSwiper;

const SwiperWrapper = styled('div')<{ isAboutAppCard: boolean }>`
  width: 100%;
  max-width: 370px;
`;

const MobileSwipeSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${p => p.theme.spacing.$6};
`;
