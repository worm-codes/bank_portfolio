import { useState } from 'react';

import Link from 'next/link';

import { CloseOutlined, MenuOutlined } from '@ant-design/icons';
import { motion } from 'framer-motion';
import styled from 'styled-components';

import { Button, Logo } from 'components';
import { useResponsive } from 'hooks';
import { devices } from 'theme';

import MenuItem from './MenuItem';
import MobileDropdown from './MobileDropdown';
import { links } from './links';
import useNavbarScroll from './useNavbarScroll';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isLaptop, isTablet } = useResponsive();
  const { hideHeader } = useNavbarScroll();

  return (
    <NavbarWrapper animate={hideHeader ? { y: 'calc(-100% - 25px)' } : { y: 0 }}>
      <StyledContainer>
        <Link
          href="/"
          passHref
        >
          {isLaptop ? (
            <Logo
              width={!isTablet ? 120 : 88}
              height={!isTablet ? 43 : 32}
            />
          ) : (
            <Logo />
          )}
        </Link>

        {!isTablet && (
          <>
            <NavbarLinks>
              {links.map((link, index) => (
                <MenuItem
                  item={link}
                  index={index}
                  key={index}
                />
              ))}
            </NavbarLinks>
            <Link href="/giris">
              <LoginButton>Login</LoginButton>
            </Link>
          </>
        )}

        {isTablet && (!isMenuOpen ? <MenuOutlined onClick={() => setIsMenuOpen(true)} /> : <CloseOutlined onClick={() => setIsMenuOpen(false)} />)}
        {isMenuOpen && <MobileDropdown />}
      </StyledContainer>
    </NavbarWrapper>
  );
}

export default Navbar;

const NavbarWrapper = styled(motion.nav)`
  display: flex;
  padding: ${p => {
    const { base, $24 } = p.theme.spacing;
    return `${base} ${$24}`;
  }};
  border-bottom: 1px solid ${p => p.theme.colors.grayDark.gray200};
  background-color: ${p => p.theme.colors.white};
  height: max-content;
  z-index: 9999;
  position: sticky;
  inset: 0;

  @media ${devices.widescreen} {
    padding: ${p => p.theme.spacing.base} 0;
  }
`;

const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: ${p => p.theme.spacing.$16};
  padding: 0 ${p => p.theme.spacing.$20};

  @media ${devices.laptop} {
    padding: 0 ${p => p.theme.spacing.$6};
  }
`;

const NavbarLinks = styled.ul`
  display: flex;
  gap: ${p => p.theme.spacing.base};
  list-style-type: none;
`;

const LoginButton = styled(Button)`
  border-radius: 0;
  padding: ${p => `${p.theme.spacing.$3} ${p.theme.spacing.$6}`};
  font-size: ${p => p.theme.fontSizes.md};
  line-height: ${p => p.theme.lineHeights.md};
`;
