import { ComponentProps, HTMLAttributes } from 'react';

import styled from 'styled-components';

import { Meta } from 'components';

import Footer from './Footer';
import Navbar from './Navbar';

interface LayoutProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  meta: ComponentProps<typeof Meta>;
}

function Layout({ children, meta, ...props }: LayoutProps) {
  return (
    <>
      <Meta
        title={meta.title}
        description={meta.description}
      />
      <StyledLayout {...props}>
        <Navbar />
        {children}
        <Footer />
      </StyledLayout>
    </>
  );
}

export default Layout;

const StyledLayout = styled.main`
  min-height: 100vh;
`;
