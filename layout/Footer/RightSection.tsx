import Image from 'next/image';
import Link from 'next/link';

import styled from 'styled-components';

import { socialList } from 'constant';
import { useResponsive } from 'hooks';
import { devices } from 'theme';

function RightSection() {
  const { isTablet } = useResponsive();
  return (
    <RightSectionWrapper>
      <Image
        src="/footerlogo.png"
        alt="footer logo"
        width={isTablet ? 345 : 340}
        height={120}
      />
      <SocialList>
        {socialList.map((social, index) => (
          <Social key={`social-${index}`}>
            <Link
              href={social.url}
              rel="noreferrer noopener"
            >
              {social.logo}
            </Link>
          </Social>
        ))}
      </SocialList>
    </RightSectionWrapper>
  );
}

export default RightSection;

const RightSectionWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: ${p => p.theme.spacing.$20};

  @media ${devices.desktop} {
    margin-right: ${p => p.theme.spacing.base};
  }

  & > img {
    @media ${devices.tablet} {
      position: absolute;
      left: calc(50% - (345px / 2));
      top: 0;
    }
  }

  @media ${devices.tablet} {
    display: block;
  }
`;

const SocialList = styled.div`
  display: flex;
  gap: ${p => p.theme.spacing.base};
  margin-top: ${p => p.theme.spacing.$8};
  margin-left: ${p => p.theme.spacing.base};

  @media ${devices.tablet} {
    margin: 0;
    padding-bottom: ${p => p.theme.spacing.$8};
    padding-left: ${p => p.theme.spacing.base};
  }
`;

const Social = styled.div`
  padding: ${p => p.theme.spacing.base};
  border: 1px solid ${p => p.theme.colors.grayDark.gray300};
  cursor: pointer;
`;
