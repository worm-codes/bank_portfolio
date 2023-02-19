import { HTMLAttributes, ReactNode } from 'react';

import styled from 'styled-components';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

function Card({ children, ...props }: CardProps) {
  return <CardContainer {...props}>{children}</CardContainer>;
}

export default Card;

const CardContainer = styled.article`
  overflow: hidden;
`;
