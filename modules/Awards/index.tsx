import styled from 'styled-components';

import { devices } from 'theme';

import AwardsSlide from './AwardsSlide';

function Awards() {
  return (
    <Wrapper>
      <Title>Awards</Title>
      <Description>
        We enrich our journey with the awards we have earned so far and consider them as a shared success for each one of us. Each award we receive from
        established institutions in their respective fields, supports our excitement towards achieving even better.
      </Description>
      <AwardsSlide />
    </Wrapper>
  );
}

export default Awards;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  & > svg {
    position: absolute;
    top: 231px;
    left: 0;
    z-index: -1;
  }
`;

const Title = styled.h3`
  font-family: ${p => p.theme.fonts.title};
  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: ${p => p.theme.fontSizes.$3xl};
  line-height: ${p => p.theme.lineHeights.$2md};
  color: ${p => p.theme.colors.grayDark.gray900};
  margin-top: ${p => p.theme.spacing.$20};

  @media ${devices.tablet} {
    font-size: ${p => p.theme.fontSizes.$2xl};
    line-height: ${p => p.theme.lineHeights.xl};
    margin-top: ${p => p.theme.spacing.$10};
  }

  @media ${devices.phone} {
    max-width: 200px;
    text-align: center;
  }
`;

const Description = styled.p`
  font-weight: ${p => p.theme.fontWeights.light};
  line-height: ${p => p.theme.lineHeights.md};
  color: ${p => p.theme.colors.grayDark.gray700};
  margin-top: ${p => p.theme.spacing.$6};
  text-align: center;
  max-width: 620px;

  @media ${devices.phone} {
    width: 343px;
    text-align: center;
    margin-top: ${p => p.theme.spacing.base};
  }
`;
