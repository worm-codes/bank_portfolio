import { useRouter } from 'next/router';

import styled from 'styled-components';

import { newsdata } from 'constant';
import { NewsFromUsHome } from 'modules';
import { devices } from 'theme';
import { dayjs } from 'utils';

import NewsContent from './NewsContent';
import NewsSlider from './NewsSlider';

function NewsDetails() {
  const {
    query: { slug },
  } = useRouter();
  const data = newsdata.find(item => item.id === Number(slug));
  return (
    <>
      <Wrapper>
        <TitleWrapper>
          <div>
            <Date>{dayjs(data?.date).format('DD MMMM, YYYY')}</Date>
            <Title>{data?.title}</Title>
            <Subtitle>{data?.subTitle}</Subtitle>
          </div>
        </TitleWrapper>
        {data && (
          <>
            <NewsSlider data={data} />
            <NewsContent data={data} />
          </>
        )}
      </Wrapper>
      <NewsFromUsHome />
    </>
  );
}

export default NewsDetails;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  margin-bottom: 124px;

  & > svg {
    position: absolute;
    right: 0;

    @media ${devices.tablet} {
      top: 70px;
    }
  }
`;

const TitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 540px;
  background-color: ${p => p.theme.colors.secondary.lighter};

  div:first-of-type {
    max-width: 1060px;
    margin-top: ${p => p.theme.spacing.$14};

    @media ${devices.phone} {
      max-width: 343px;
      margin-top: ${p => p.theme.spacing.$8};
    }
  }

  @media ${devices.phone} {
    height: 407px;
  }
`;

const Date = styled.span`
  color: ${p => p.theme.colors.grayDark.gray500};
  font-size: ${p => p.theme.fontSizes.sm};
  line-height: ${p => p.theme.lineHeights.md};
  font-weight: ${p => p.theme.fontWeights.medium};
`;

const Title = styled.h4`
  color: ${p => p.theme.colors.grayDark.gray900};
  font-family: ${p => p.theme.fonts.title};
  font-size: ${p => p.theme.fontSizes.$2md};
  line-height: ${p => p.theme.lineHeights.$2xl};
  font-weight: ${p => p.theme.fontWeights.medium};
  margin-top: ${p => p.theme.spacing.base};
  margin-bottom: ${p => p.theme.spacing.$6};

  @media ${devices.tablet} {
    font-size: ${p => p.theme.fontSizes.xl};
    line-height: ${p => p.theme.lineHeights.lg};
    margin-top: ${p => p.theme.spacing.$3};
    margin-bottom: ${p => p.theme.spacing.base};
  }
`;

const Subtitle = styled.p`
  color: ${p => p.theme.colors.grayDark.gray700};
  font-size: ${p => p.theme.fontSizes.md};
  line-height: ${p => p.theme.lineHeights.md};
  font-weight: ${p => p.theme.fontWeights.light};
  margin-bottom: ${p => p.theme.spacing.$12};
`;
