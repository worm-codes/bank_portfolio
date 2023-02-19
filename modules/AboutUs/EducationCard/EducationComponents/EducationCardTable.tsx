import styled from 'styled-components';

import { appCards, modelCards } from 'constant';
import { useResponsive } from 'hooks';

import EducationCard from './EducationCard';
interface CardProps {
  isAboutAppCard?: boolean;
}
import EducationCardSwiper from './EducationCardSwiper';

const EducationCardsSection = ({ isAboutAppCard = true }: CardProps) => {
  const { isTablet } = useResponsive();
  const data = isAboutAppCard ? appCards : modelCards;

  return (
    <>
      {!isTablet ? (
        <CardWrapper>
          {data?.map((card: EducationCardProps, index: number) => {
            return (
              <EducationCard
                key={index}
                description={card.description}
                isAboutAppCard={isAboutAppCard}
              />
            );
          })}
        </CardWrapper>
      ) : (
        <EducationCardSwiper
          cardContents={data}
          isAboutAppCard={isAboutAppCard}
        />
      )}
    </>
  );
};

export default EducationCardsSection;

const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 1000px;
  gap: ${p => p.theme.spacing.$8};
`;
