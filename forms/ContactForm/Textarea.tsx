import { InputHTMLAttributes } from 'react';

import styled from 'styled-components';

interface TextareaProps extends InputHTMLAttributes<HTMLTextAreaElement> {
  id: string;
  label: string;
}

function Textarea({ id, label, ...props }: TextareaProps) {
  return (
    <InputContainer>
      <Label htmlFor={id}>{label}</Label>
      <StyledTextarea
        id={id}
        {...props}
      />
    </InputContainer>
  );
}

export default Textarea;

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

const StyledTextarea = styled.textarea`
  border: 1px solid ${p => p.theme.colors.grayDark.gray200};
  min-height: ${p => p.theme.spacing.$24};
  resize: none;
  padding: ${p => p.theme.spacing.$2};

  &:focus {
    outline: 1px solid ${p => p.theme.colors.primary.base};
  }
`;
