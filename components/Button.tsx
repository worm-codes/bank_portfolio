import { ReactNode, ButtonHTMLAttributes } from 'react';

import { LoadingOutlined } from '@ant-design/icons';
import styled from 'styled-components';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  loading?: boolean;
}

function Button({ children, loading = false, ...props }: ButtonProps) {
  return (
    <StyledButton {...props}>
      {children}

      {loading && (
        <Loading>
          <LoadingOutlined />
        </Loading>
      )}
    </StyledButton>
  );
}

export default Button;

const StyledButton = styled.button`
  display: inline-block;
  color: ${p => p.theme.colors.white};
  padding: ${p => `${p.theme.spacing.base} ${p.theme.spacing.$8}`};
  border-radius: ${p => p.theme.radius.lg};
  outline: none;
  background-color: ${p => p.theme.colors.primary.base};
  font-family: ${p => p.theme.fonts.text};

  &:hover,
  &:active {
    background-color: ${p => p.theme.colors.primary.dark};
  }

  &:disabled {
    pointer-events: none;
    background-color: ${p => p.theme.colors.primary.lighter};
    color: ${p => p.theme.colors.primary.light};
  }
`;

const Loading = styled.span`
  margin-left: ${p => p.theme.spacing.$2};
`;
