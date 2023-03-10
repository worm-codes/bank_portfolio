import Image from 'next/image';

import styled from 'styled-components';

import { useResponsive } from 'hooks';
import { devices } from 'theme';

function Copyright() {
  const { isTablet } = useResponsive();
  return (
    <CopyrightWrapper>
      <Image
        src="/heroimage/logo.png"
        width={!isTablet ? 120 : 88}
        height={!isTablet ? 88 : 70}
        alt="copyright logo"
      />
      <CopyrightText>Copyright © 2022 Anonymous Bank</CopyrightText>
    </CopyrightWrapper>
  );
}

export default Copyright;

const CopyrightWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${p => p.theme.colors.primary.base};
  color: ${p => p.theme.colors.grayDark.gray500};
  padding: ${p => {
    const { $5, $20 } = p.theme.spacing;
    return `${$5} ${$20}`;
  }};

  @media ${devices.tablet} {
    padding: ${p => {
      const { $5, $7 } = p.theme.spacing;
      return `${$5} ${$7}`;
    }};
    align-items: center;
  }
`;

const CopyrightText = styled.p`
  font-weight: ${p => p.theme.fontWeights.regular};
  color: ${p => p.theme.colors.white};

  @media ${devices.tablet} {
    font-size: ${p => p.theme.fontSizes.sm};
    line-height: ${p => p.theme.lineHeights.md};
    margin-top: ${p => p.theme.spacing.$3};
  }
`;
