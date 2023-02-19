import Link from 'next/link';

import styled from 'styled-components';

import { devices } from 'theme';

import { SubMenuProps, Submenus } from './types';

interface DropdownProps {
  submenus: Submenus;
  isDropdownOpen: boolean;
}

function Dropdown({ submenus, isDropdownOpen }: DropdownProps) {
  return (
    <SubMenu $isDropdownOpen={isDropdownOpen}>
      {submenus.map((submenu, subIndex) => (
        <NavbarMenuLink
          href={submenu.url}
          passHref
          key={`navbar-submenu-${subIndex}`}
        >
          {submenu.label}
        </NavbarMenuLink>
      ))}
    </SubMenu>
  );
}

export default Dropdown;

const SubMenu = styled.ul<SubMenuProps>`
  display: flex;
  position: absolute;
  top: ${p => p.theme.spacing.$14};
  margin-top: 1px;
  width: 152px;
  height: max-content;
  flex-direction: column;
  border: 1px solid ${p => p.theme.colors.grayDark.gray200};
  z-index: 2;
  background-color: ${p => p.theme.colors.white};
  box-shadow: ${p => p.theme.shadows.navbarDropdown};
  padding: ${p => p.theme.spacing.$2};
  gap: ${p => p.theme.spacing.$1};
  line-height: ${p => p.theme.spacing.$6};
  visibility: ${p => (p.$isDropdownOpen ? 'visible' : 'hidden')};
  opacity: ${p => (p.$isDropdownOpen ? 1 : 0)};
  transition: opacity 1s linear;
`;

const NavbarMenuLink = styled(Link)`
  font-weight: ${p => p.theme.fontWeights.medium};
  color: ${p => p.theme.colors.grayDark.gray900};
  padding: ${p => `${p.theme.spacing.$3} ${p.theme.spacing.$3}`};

  &:hover {
    color: ${p => p.theme.colors.primary.base};
  }

  @media ${devices.laptop} {
    padding: ${p => p.theme.spacing.$2};
  }
`;
