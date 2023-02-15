import styled from 'styled-components';

import { devices } from 'theme';

import Copyright from './Copyright';
import LeftSection from './LeftSection';
import RightSection from './RightSection';

function Footer() {
  return (
    <>
      <FooterContainer>
        <FooterWrapper>
          <LeftSection />
          <RightSection />
        </FooterWrapper>
      </FooterContainer>
      <Copyright />
    </>
  );
}

export default Footer;

const FooterContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  border-top: 1px solid ${p => p.theme.colors.grayDark.gray300};

  @media ${devices.tablet} {
    position: relative;
  }
`;

const FooterWrapper = styled.div`
  width: 85%;
  display: flex;

  @media ${devices.widescreen} {
    width: 100%;
  }

  @media ${devices.tablet} {
    flex-direction: column;
  }
`;
