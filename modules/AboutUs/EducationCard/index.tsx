import styled from 'styled-components';

import { devices } from 'theme';

import EducationCardTable from './EducationComponents/EducationCardTable';
const EducationCardSection = () => {
  return (
    <div>
      <BoardTitle>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</BoardTitle>
      <EducationCardTable isAboutAppCard={false} />
      <BoardTitle>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</BoardTitle>
      <EducationCardTable />
    </div>
  );
};

export default EducationCardSection;

const BoardTitle = styled.h5`
  font-family: ${p => p.theme.fonts.title};
  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: ${p => p.theme.fontSizes.$2xl};
  line-height: ${p => p.theme.lineHeights.xl};
  color: ${p => p.theme.colors.grayDark.gray800};
  text-align: center;
  margin: ${p => p.theme.spacing.$12};

  &:first-of-type {
    margin-top: 0;
  }

  @media ${devices.tablet} {
    max-width: 343px;
    font-size: ${p => p.theme.fontSizes.lg};
    line-height: ${p => p.theme.lineHeights.lg};
    margin: ${p => p.theme.spacing.$8};
  }
`;
