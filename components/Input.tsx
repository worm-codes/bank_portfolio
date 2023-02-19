import { InputHTMLAttributes } from 'react';

import styled from 'styled-components';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  type?: string;
  label?: string;
  sublabel?: string;
}

function Input({ id, type = 'text', label, sublabel, ...props }: InputProps) {
  return (
    <InputContainer>
      {label && <Label htmlFor={id}>{label}</Label>}
      {sublabel && <Sublabel>{sublabel}</Sublabel>}
      <StyledInput
        type={type}
        id={id}
        {...props}
      />
    </InputContainer>
  );
}

export default Input;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Label = styled.label`
  margin-bottom: ${p => p.theme.spacing.$1};
  font-size: ${p => p.theme.fontSizes.sm};
  line-height: ${p => p.theme.lineHeights.md};
  font-weight: ${p => p.theme.fontWeights.medium};
  color: ${p => p.theme.colors.grayDark.gray700};
`;

const StyledInput = styled.input`
  padding: ${p => {
    const { $3, base, $6 } = p.theme.spacing;
    return `${$3} ${$6} ${$3} ${base} `;
  }};
  border: 1px solid ${p => p.theme.colors.grayDark.gray200};

  &::placeholder {
    font-size: ${p => p.theme.fontSizes.sm};
    line-height: ${p => p.theme.lineHeights.md};
    font-weight: ${p => p.theme.fontWeights.light};
    color: ${p => p.theme.colors.grayDark.gray200};
  }

  &:focus {
    outline: 1px solid ${p => p.theme.colors.primary.base};
  }
`;

const Sublabel = styled.span`
  font-size: ${p => p.theme.fontSizes.xs};
  line-height: ${p => p.theme.lineHeights.md};
  font-weight: ${p => p.theme.fontWeights.light};
  color: ${p => p.theme.colors.grayDark.gray400};
  margin-bottom: ${p => p.theme.spacing.$2};
`;
