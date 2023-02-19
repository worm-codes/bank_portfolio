import styled from 'styled-components';
interface CardProps {
  isAboutAppCard?: boolean;
  key: number;
  description: string;
}
const EducationCard = ({ isAboutAppCard = true, key, description }: CardProps) => {
  return (
    <CardBox
      key={key}
      isAboutAppCard={isAboutAppCard}
    >
      <CardContent isAboutAppCard={isAboutAppCard}>
        <CardText>{description}</CardText>
      </CardContent>
    </CardBox>
  );
};

export default EducationCard;

const CardText = styled.h6`
  font-family: ${p => p.theme.fonts.text};
  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: ${p => p.theme.fontSizes.xl};
  line-height: ${p => p.theme.lineHeights.lg};
  text-align: center;
  color: ${p => p.theme.colors.white};
`;
const CardBox = styled('div')<{ isAboutAppCard: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${p => (p.isAboutAppCard ? '38px 16px' : '15px 16px')};
  width: ${p => (p?.isAboutAppCard ? 206 : 285)}px;
  height: ${p => (p?.isAboutAppCard ? 118 : 164)}px;

  background-color: ${p => (p?.isAboutAppCard ? p.theme.colors.secondary.base : p.theme.colors.primary.base)};
`;
const CardContent = styled('div')<{ isAboutAppCard: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${p => (p?.isAboutAppCard ? 182 : 261)}px;
  height: ${p => (p?.isAboutAppCard ? 94 : 140)}px;
  background-color: ${p => (p?.isAboutAppCard ? p.theme.colors.secondary.base : p.theme.colors.primary.base)};
  border: 2px solid ${p => (p?.isAboutAppCard ? p.theme.colors.applicationCardBorder : p.theme.colors.modelCardBorder)};
`;
