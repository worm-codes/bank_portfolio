import styled from 'styled-components';

import { schools } from 'constant';
import { devices } from 'theme';

import School from './School';

function Schools() {
  return (
    <Wrapper>
      <Subtitle>SCHOOLS</Subtitle>
      <Title>We value people and personal effort.</Title>
      <Description>
        Anonymous Bank Academy is dedicated to supporting the learning and development journeys of its employees by offering various certificate programs and
        training opportunities through six different schools.
      </Description>
      <SchoolContainer>
        {schools?.map((school, index) => (
          <School
            key={`school-${index}`}
            data={school}
          />
        ))}
      </SchoolContainer>
    </Wrapper>
  );
}

export default Schools;

const Wrapper = styled.div`
  position: relative;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;

  & > svg {
    position: absolute;
    z-index: -1;

    @media ${devices.tablet} {
      top: ${p => p.theme.spacing.$6};
    }
  }

  & > svg:first-child {
    right: 0;
  }

  & > svg:nth-child(2) {
    left: 0;
  }
`;

const Subtitle = styled.h6`
  font-family: ${p => p.theme.fonts.title};
  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: ${p => p.theme.fontSizes.sm};
  line-height: ${p => p.theme.lineHeights.md};
  color: ${p => p.theme.colors.primary.base};
  margin-top: ${p => p.theme.spacing.$20};

  @media ${devices.tablet} {
    font-size: ${p => p.theme.fontSizes.xs};
    line-height: ${p => p.theme.lineHeights.sm};
    margin-top: ${p => p.theme.spacing.$8};
  }
`;

const Title = styled.h3`
  font-family: ${p => p.theme.fonts.title};
  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: ${p => p.theme.fontSizes.$3xl};
  line-height: ${p => p.theme.lineHeights.$2md};
  color: ${p => p.theme.colors.grayDark.gray900};
  margin-top: ${p => p.theme.spacing.$3};

  @media ${devices.tablet} {
    font-size: ${p => p.theme.fontSizes.$2xl};
    line-height: ${p => p.theme.lineHeights.xl};
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
  }
`;

const SchoolContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${p => p.theme.spacing.$16};
  margin-top: 156px;

  @media ${devices.tablet} {
    gap: 0;
    margin-top: ${p => p.theme.spacing.$20};
  }
`;
