import styled from 'styled-components';

import { devices } from 'theme';
interface NewsDetailsProps {
  data: SingleNewProps;
}

function NewsContent({ data }: NewsDetailsProps) {
  return <ContentWrapper>{data.description}</ContentWrapper>;
}

export default NewsContent;

const ContentWrapper = styled.div`
  margin-top: ${p => p.theme.spacing.$16};
  color: ${p => p.theme.colors.grayDark.gray900};
  max-width: 840px;

  @media ${devices.tablet} {
    max-width: 343px;
  }

  & > *:not(:last-child) {
    margin-bottom: ${p => p.theme.spacing.$6};

    @media ${devices.tablet} {
      margin-bottom: ${p => p.theme.spacing.base};
    }
  }

  p,
  li {
    font-size: ${p => p.theme.fontSizes.md};
    line-height: ${p => p.theme.lineHeights.md};
    font-weight: ${p => p.theme.fontWeights.regular};
  }

  h5 {
    font-size: ${p => p.theme.fontSizes.$2xl};
    line-height: ${p => p.theme.lineHeights.xl};
    font-weight: ${p => p.theme.fontWeights.medium};
    font-family: ${p => p.theme.fonts.title};

    @media ${devices.tablet} {
      font-size: ${p => p.theme.fontSizes.lg};
      line-height: ${p => p.theme.lineHeights.lg};
    }

    &:not(:first-child) {
      margin-top: ${p => p.theme.spacing.$6};

      @media ${devices.tablet} {
        margin-top: ${p => p.theme.spacing.base};
      }
    }
  }
`;
