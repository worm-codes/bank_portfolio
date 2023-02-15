import { useState } from 'react';

import Link from 'next/link';

import styled from 'styled-components';

import { Icon } from 'components';
import { devices } from 'theme';

import Dropdown from './Dropdown';
import { SubMenuProps, Submenus } from './types';

interface MenuItemProps {
  item: {
    label: string;
    url?: string;
    submenus?: Submenus;
  };
  index: number;
}

function MenuItem({ item, index }: MenuItemProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  return (
    <NavbarLink key={`navbar-link-${index}`}>
      {!item.url ? (
        <>
          <SubMenuWrapper
            $isDropdownOpen={isDropdownOpen}
            onClick={() => setIsDropdownOpen(prev => !prev)}
          >
            {item.label}
            <IconWrapper>
              <Icon name={isDropdownOpen ? 'arrow-up' : 'arrow-down'} />
            </IconWrapper>
          </SubMenuWrapper>
          {item.submenus && (
            <Dropdown
              submenus={item.submenus}
              isDropdownOpen={isDropdownOpen}
            />
          )}
        </>
      ) : (
        <NavbarMenuLink
          href={item.url}
          passHref
        >
          {item.label}
        </NavbarMenuLink>
      )}
    </NavbarLink>
  );
}

export default MenuItem;

const NavbarLink = styled.li`
  position: relative;
`;

const NavbarMenuLink = styled(Link)`
  font-weight: ${p => p.theme.fontWeights.medium};
  color: ${p => p.theme.colors.grayDark.gray900};
  padding: ${p => {
    const { $3, base, $6 } = p.theme.spacing;
    return `${$3} ${base} ${$3} ${$6}`;
  }};

  &:hover {
    color: ${p => p.theme.colors.primary.base};
  }

  @media ${devices.laptop} {
    padding: ${p => p.theme.spacing.$2};
  }
`;

const IconWrapper = styled.span`
  padding-left: ${p => p.theme.spacing.base};
`;

const SubMenuWrapper = styled.span<SubMenuProps>`
  font-weight: ${p => p.theme.fontWeights.medium};
  color: ${p => (p.$isDropdownOpen ? p.theme.colors.primary.base : p.theme.colors.grayDark.gray900)};
  padding: ${p => {
    const { $3, base, $6 } = p.theme.spacing;
    return `${$3} ${base} ${$3} ${$6}`;
  }};
  cursor: pointer;

  &:hover {
    color: ${p => p.theme.colors.primary.base};
  }
`;
