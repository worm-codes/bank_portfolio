import Link from 'next/link';

import styled from 'styled-components';

import { Button } from 'components';
import { devices } from 'theme';

import Leaves from '../Leaves/index';

function NewsHeader() {
  return (
    <Header>
      <TitleWrapper>
        <Subtitle>NEWS</Subtitle>
        <Title>News from us</Title>
        <Leaves />
      </TitleWrapper>
      <Description>You can find the latest news about Anonymous Bank Academy here.</Description>
      <Link href="/news-from-us">
        <StyledButton>See All</StyledButton>
      </Link>
    </Header>
  );
}

export default NewsHeader;

const Header = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: ${p => p.theme.spacing.$24};
  padding-bottom: ${p => p.theme.spacing.$20};
  gap: 132px;

  @media ${devices.desktop} {
    gap: ${p => p.theme.spacing.$16};
  }

  @media ${devices.laptop} {
    flex-direction: column;
    gap: 0;
    padding-top: ${p => p.theme.spacing.$8};
    text-align: center;

    & > *:not(:last-child) {
      margin-bottom: ${p => p.theme.spacing.$3};
    }
  }
`;

const TitleWrapper = styled.div`
  max-width: 360px;
  position: relative;

  & > svg {
    position: absolute;
    bottom: ${p => p.theme.spacing.$6};
    right: -${p => p.theme.spacing.$14};

    @media ${devices.laptop} {
      display: none;
    }
  }
`;

const Subtitle = styled.h5`
  color: ${p => p.theme.colors.secondary.base};
  padding-bottom: ${p => p.theme.spacing.$3};

  @media ${devices.phone} {
    font-size: ${p => p.theme.fontSizes.xs};
    line-height: ${p => p.theme.lineHeights.sm};
  }
`;

const Title = styled.h2`
  font-family: ${p => p.theme.fonts.title};
  font-size: ${p => p.theme.fontSizes.$3xl};
  line-height: ${p => p.theme.fontSizes.$3md};
  font-weight: ${p => p.theme.fontWeights.medium};
  color: ${p => p.theme.colors.grayDark.gray900};

  @media ${devices.phone} {
    font-size: ${p => p.theme.fontSizes.xl};
    line-height: ${p => p.theme.fontSizes.$2xl};
    margin-bottom: ${p => p.theme.spacing.$1};
  }
`;

const Description = styled.p`
  font-weight: ${p => p.theme.fontWeights.light};
  color: ${p => p.theme.colors.grayDark.gray800};
  line-height: ${p => p.theme.lineHeights.md};
  max-width: 340px;

  @media ${devices.phone} {
    margin-bottom: ${p => p.theme.spacing.$3};
  }
`;

const StyledButton = styled(Button)`
  border-radius: 0;
  padding: ${p => {
    const { $3, $6 } = p.theme.spacing;
    return `${$3} ${$6}}`;
  }};
  background-color: ${p => p.theme.colors.secondary.base};
  font-size: ${p => p.theme.fontSizes.md};
  line-height: ${p => p.theme.lineHeights.md};

  @media ${devices.phone} {
    width: 95%;
  }
`;
