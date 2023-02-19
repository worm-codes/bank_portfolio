import Link from 'next/link';

import styled from 'styled-components';

// import { Button } from 'components';

import MobileNav from './MobileNav';

function MobileDropdown() {
  return (
    <Wrapper>
      <MobileNav />
    </Wrapper>
  );
}

export default MobileDropdown;

const Wrapper = styled.div`
  position: fixed;
  top: 97px;
  left: 0;
  display: flex;
  flex-direction: column;
  height: calc(100% - 97px);
  z-index: 9;
  background-color: ${p => p.theme.colors.white};
`;

const ButtonWrapper = styled.div`
  margin: ${p => {
    const { $12, base } = p.theme.spacing;
    return `${$12} ${base} 0 ${base}`;
  }};
`;
