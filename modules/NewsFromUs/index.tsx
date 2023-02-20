import { useState } from 'react';

import styled from 'styled-components';

import { newsdata } from 'constant';
import { useResponsive } from 'hooks';
import { devices } from 'theme';

import NewCard from './NewCard';
import Pagination from './Pagination';

interface BackgroundProps {
  $cardCount: number;
}

function NewsFromUs() {
  const [page, setPage] = useState(1);
  const { isTablet } = useResponsive();

  const pageSize = isTablet ? 5 : 8;

  return (
    <Wrapper>
      <Subtitle>NEWS</Subtitle>
      <Title>News From Us</Title>
      <CardContainer>
        {newsdata?.map((data, index) => (
          <NewCard
            data={data}
            key={`new-${index}`}
          />
        ))}
      </CardContainer>
      <Pagination
        total={newsdata.length || pageSize}
        current={page}
        pageSize={pageSize}
        onChange={page => {
          {
            setPage(page);
          }
        }}
      />
    </Wrapper>
  );
}

export default NewsFromUs;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  & > svg {
    position: absolute;
  }

  & > svg:first-child {
    right: 0;
  }

  & > svg:nth-child(2) {
    left: 0;
  }
`;

const Subtitle = styled.h5`
  color: ${p => p.theme.colors.primary.base};
  font-size: ${p => p.theme.fontSizes.sm};
  line-height: ${p => p.theme.lineHeights.md};
  margin-top: ${p => p.theme.spacing.$20};
  font-family: ${p => p.theme.fonts.title};
  font-weight: ${p => p.theme.fontWeights.medium};

  @media ${devices.tablet} {
    font-size: ${p => p.theme.fontSizes.xs};
    line-height: ${p => p.theme.lineHeights.sm};
    margin-top: ${p => p.theme.spacing.$12};
  }
`;

const Title = styled.h2`
  color: ${p => p.theme.colors.grayDark.gray900};
  font-size: ${p => p.theme.fontSizes.$3md};
  line-height: ${p => p.theme.lineHeights.$3xl};
  margin-top: ${p => p.theme.spacing.base};
  font-family: ${p => p.theme.fonts.title};
  font-weight: ${p => p.theme.fontWeights.medium};

  @media ${devices.tablet} {
    font-size: ${p => p.theme.fontSizes.$2xl};
    line-height: ${p => p.theme.lineHeights.xl};
    margin-top: ${p => p.theme.spacing.$3};
  }
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: ${p => p.theme.spacing.$10};
  margin-top: ${p => p.theme.spacing.$13};
  width: 85%;
  position: relative;

  @media ${devices.tablet} {
    gap: 0;
    & > *:not(:last-child) {
      margin-bottom: ${p => p.theme.spacing.$10};
    }
  }

  @media ${devices.widescreen} {
    width: 100%;
  }
`;

const StyledBackground = styled.div<BackgroundProps>`
  width: 700px;
  height: ${p => p.$cardCount * 255}px;
  position: absolute;
  top: 332px;
  z-index: -1;
  background-color: ${p => p.theme.colors.secondary.lighter};

  @media ${devices.laptop} {
    & > img {
      display: none;
    }
  }

  @media ${devices.phone} {
    width: 311px;
    height: ${p => p.$cardCount * 455}px;
    top: 180px;
  }
`;
