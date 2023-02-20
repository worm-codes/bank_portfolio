import Image from 'next/image';
import { useRouter } from 'next/router';

import { ArrowRightOutlined } from '@ant-design/icons';
import styled from 'styled-components';

import { Card } from 'components';
import { useResponsive } from 'hooks';
import { devices } from 'theme';
import { dayjs } from 'utils';

interface NewCardProps {
  data: SingleNewProps;
}

function NewCard({ data }: NewCardProps) {
  const { push } = useRouter();
  const { isTablet } = useResponsive();
  return (
    <StyledCard>
      <Image
        src={data.mainImage}
        alt={data.title}
        width={isTablet ? 311 : 462}
        height={isTablet ? 180 : 208}
      />
      <NewDate>{dayjs(data.date).format('DD MMMM, YYYY')}</NewDate>
      <NewTitle>{data.title}</NewTitle>
      <NewDesc>{data.subTitle}</NewDesc>
      <ReadMoreButton onClick={() => push(`/news-from-us/${data.id}`)}>
        Read More <ArrowRightOutlined />
      </ReadMoreButton>
    </StyledCard>
  );
}

export default NewCard;

const StyledCard = styled(Card)`
  width: 510px;
  padding: ${p => p.theme.spacing.$6};
  border: 1px solid ${p => p.theme.colors.grayDark.gray200};
  display: flex;
  flex-direction: column;
  gap: ${p => p.theme.spacing.$6};
  transition: transform 0.5s;
  background-color: ${p => p.theme.colors.white};

  img {
    object-fit: cover;
  }

  &:hover {
    transform: scale(1.05);
  }

  @media ${devices.tablet} {
    width: 343px;
    padding: ${p => p.theme.spacing.base};
    gap: 0;

    & > img {
      object-fit: cover;
    }
  }
`;

const NewDate = styled.span`
  font-size: ${p => p.theme.fontSizes.sm};
  line-height: ${p => p.theme.lineHeights.md};
  color: ${p => p.theme.colors.grayDark.gray600};
  ${p => p.theme.utils.lineClamp(2)};

  @media ${devices.tablet} {
    font-size: ${p => p.theme.fontSizes.xs};
    line-height: ${p => p.theme.lineHeights.sm};
    margin-top: ${p => p.theme.spacing.base};
  }
`;

const NewTitle = styled.h4`
  font-family: ${p => p.theme.fonts.title};
  font-size: ${p => p.theme.fontSizes.xl};
  line-height: ${p => p.theme.lineHeights.lg};
  color: ${p => p.theme.colors.grayDark.gray900};
  ${p => p.theme.utils.lineClamp(2)};
  height: ${p => p.theme.spacing.$16};

  @media ${devices.tablet} {
    font-size: ${p => p.theme.fontSizes.lg};
    margin-top: ${p => p.theme.spacing.base};
  }
`;

const NewDesc = styled.p`
  font-weight: ${p => p.theme.fontWeights.light};
  line-height: ${p => p.theme.lineHeights.md};
  color: ${p => p.theme.colors.grayDark.gray700};
  margin-top: -${p => p.theme.spacing.$2};
  ${p => p.theme.utils.lineClamp(2)};
  height: ${p => p.theme.spacing.$12};

  @media ${devices.tablet} {
    font-size: ${p => p.theme.fontSizes.sm};
    margin-top: ${p => p.theme.spacing.base};
  }
`;

const ReadMoreButton = styled.button`
  border: 1px solid ${p => p.theme.colors.grayDark.gray300};
  padding: ${p => {
    const { $3, $6, base } = p.theme.spacing;
    return `${$3} ${base} ${$3} ${$6}`;
  }};
  font-size: ${p => p.theme.fontSizes.md};
  line-height: ${p => p.theme.lineHeights.md};
  font-weight: ${p => p.theme.fontWeights.medium};
  width: max-content;
  display: flex;
  align-items: center;
  font-family: ${p => p.theme.fonts.text};
  align-self: flex-end;

  &:hover {
    background-color: ${p => p.theme.colors.primary.base};
    color: ${p => p.theme.colors.white};
  }

  svg {
    margin-left: ${p => p.theme.spacing.$2};
  }

  @media ${devices.tablet} {
    margin-top: ${p => p.theme.spacing.base};
  }
`;
