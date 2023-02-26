import Image from 'next/image';
import { useRouter } from 'next/router';

import styled from 'styled-components';

import { Card, Icon, Swiper } from 'components';
import { newsdata } from 'constant';
import { devices } from 'theme';
import { dayjs } from 'utils';

import NewsHeader from './Header';

function NewsFromUs() {
  const { push } = useRouter();
  return (
    <>
      <HeaderWrapper>
        <NewsHeader />
      </HeaderWrapper>
      <SwiperWrapper>
        <Swiper
          slideClass="swiper-slide"
          slidesPerView="auto"
          spaceBetween={32}
          navigation={{
            prevEl: '#prevNew',
            nextEl: '#nextNew',
          }}
        >
          {newsdata?.map((data, index) => (
            <StyledNew
              key={`data-${index}`}
              onClick={() => push(`/news-from-us/${data.id}`)}
            >
              <Image
                src={data.homepageImage}
                alt="new"
                width={284}
                height={208}
              />
              <NewTitle>{data.title}</NewTitle>
              <NewDesc>{data.subTitle}</NewDesc>
              <NewDate>{dayjs(data.date).format('DD MMMM, YYYY')}</NewDate>
            </StyledNew>
          ))}
        </Swiper>
        <ButtonWrapper>
          <Button id="prevNew">
            <Icon name="arrow-left" />
          </Button>
          <Button id="nextNew">
            <Icon name="arrow-right" />
          </Button>
        </ButtonWrapper>
      </SwiperWrapper>
    </>
  );
}

export default NewsFromUs;

const HeaderWrapper = styled.div`
  background-color: ${p => p.theme.colors.secondary.lighter};
  min-height: 500px;
  position: relative;

  & > svg {
    position: absolute;
    top: ${p => p.theme.spacing.$12};

    @media ${devices.laptop} {
      display: none;
    }
  }
`;

const SwiperWrapper = styled.div`
  margin-left: 190px;
  margin-top: -232px;
  .swiper-slide {
    width: 100%;
    max-width: 332px;
  }

  @media ${devices.laptop} {
    margin-left: ${p => p.theme.spacing.$12};
  }

  @media ${devices.phone} {
    margin-left: ${p => p.theme.spacing.base};
  }
`;

const StyledNew = styled(Card)`
  padding: ${p => p.theme.spacing.$6};
  display: flex;
  flex-direction: column;
  background-color: ${p => p.theme.colors.white};
  gap: ${p => p.theme.spacing.$6};
  ${p => p.theme.shadows.newsShadow};
  transition: transform 0.5s;
  cursor: pointer;

  img {
    object-fit: cover;
  }

  &:hover {
    transform: scale(1.1);
  }

  @media ${devices.tablet} {
    gap: 0;

    & > *:not(:last-child) {
      margin-bottom: ${p => p.theme.spacing.$6};
    }
  }
`;

const NewTitle = styled.h5`
  color: ${p => p.theme.colors.grayDark.gray900};
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.lg};
  line-height: ${p => p.theme.lineHeights.lg};
  ${p => p.theme.utils.lineClamp(2)}
  min-height: ${p => p.theme.spacing.$16};
`;

const NewDesc = styled.p`
  color: ${p => p.theme.colors.grayDark.gray700};
  font-weight: ${p => p.theme.fontWeights.light};
  font-size: ${p => p.theme.fontSizes.md};
  line-height: ${p => p.theme.lineHeights.md};
  margin-top: -${p => p.theme.spacing.$2};
  ${p => p.theme.utils.lineClamp(3)}
  min-height: 72px;
`;

const NewDate = styled.span`
  color: ${p => p.theme.colors.grayDark.gray600};
  font-size: ${p => p.theme.fontSizes.sm};
  line-height: ${p => p.theme.lineHeights.md};
`;

const ButtonWrapper = styled.div`
  padding-bottom: ${p => p.theme.spacing.$24};

  @media ${devices.phone} {
    display: flex;
    justify-content: center;
  }
`;

const Button = styled.button`
  margin-top: ${p => p.theme.spacing.$12};
  padding: ${p => p.theme.spacing.$3};
  border: 1px solid ${p => p.theme.colors.grayDark.gray300};

  &:first-child {
    margin-right: ${p => p.theme.spacing.base};
  }
`;
