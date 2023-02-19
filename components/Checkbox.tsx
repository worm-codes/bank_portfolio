import { InputHTMLAttributes, ReactNode } from 'react';

import styled from 'styled-components';

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  children: ReactNode;
}

function Checkbox({ id, children, ...props }: CheckboxProps) {
  return (
    <CheckboxContainer>
      <Label htmlFor={id}>
        <CheckboxInput
          id={id}
          type="checkbox"
          {...props}
        />
        {children}
        <Checkmark className="checkmark" />
      </Label>
    </CheckboxContainer>
  );
}

export default Checkbox;

const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  cursor: pointer;
  user-select: none;
  padding-left: 30px;

  &:hover input ~ .checkmark {
    border-color: ${p => p.theme.colors.primary.base};
  }

  & input:checked ~ .checkmark {
    background-color: ${p => p.theme.colors.primary.base};
  }

  & input:checked ~ .checkmark:after {
    display: block;
  }
`;

const Label = styled.label`
  margin-bottom: ${p => p.theme.spacing.$1};
  font-size: ${p => p.theme.fontSizes.sm};
  line-height: ${p => p.theme.lineHeights.md};
  font-weight: ${p => p.theme.fontWeights.medium};
  color: ${p => p.theme.colors.grayDark.gray700};
  cursor: pointer;
`;

const CheckboxInput = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
`;

const Checkmark = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  height: ${p => p.theme.spacing.$6};
  width: ${p => p.theme.spacing.$6};
  background-color: ${p => p.theme.colors.primary.lighter};
  border: 1px solid ${p => p.theme.colors.primary.light};

  &:after {
    content: '';
    position: absolute;
    display: none;

    left: 9px;
    top: 5px;
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
  }
`;
