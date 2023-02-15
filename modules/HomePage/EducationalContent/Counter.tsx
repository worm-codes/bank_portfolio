import styled from 'styled-components';
import { useCountUp } from 'use-count-up';

interface CounterProps {
  number: number;
  shouldStartCountup: boolean;
}

const Counter = ({ number, shouldStartCountup }: CounterProps) => {
  const { value } = useCountUp({
    isCounting: shouldStartCountup,
    end: number,
    duration: 3,
  });

  return <EducationNumber>{value}+</EducationNumber>;
};

export default Counter;

const EducationNumber = styled.span`
  font-family: ${p => p.theme.fonts.title};
  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: ${p => p.theme.fontSizes.$2md};
  line-height: ${p => p.theme.lineHeights.$2xl};
`;
