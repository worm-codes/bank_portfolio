import Image from 'next/image';

import { motion } from 'framer-motion';
import styled from 'styled-components';

import { useResponsive } from 'hooks';
import { devices } from 'theme';

interface SingleSchoolProps {
  data: SchoolProps;
}

function School({ data }: SingleSchoolProps) {
  const { isTablet } = useResponsive();

  return (
    <Wrapper
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <Image
        src={data.image}
        alt={data.title}
        width={isTablet ? 343 : 400}
        height={isTablet ? 343 : 400}
      />
      <TextWrapper>
        <SchoolTitle>{data.title}</SchoolTitle>
        <p>{data.description}</p>
      </TextWrapper>
    </Wrapper>
  );
}

export default School;

const Wrapper = styled(motion.div)`
  display: flex;
  gap: ${p => p.theme.spacing.$24};
  max-width: 1060px;
  margin-bottom: 156px;

  &:nth-child(even) {
    flex-direction: row-reverse;

    @media ${devices.tablet} {
      flex-direction: column;
    }
  }

  @media ${devices.laptop} {
    width: 95%;
  }

  @media ${devices.tablet} {
    width: 100%;
    flex-direction: column;
    gap: 0;
    align-items: center;
    margin-bottom: ${p => p.theme.spacing.$16};
  }
`;

const TextWrapper = styled.div`
  @media ${devices.tablet} {
    max-width: 600px;
    text-align: center;
  }
  @media ${devices.phone} {
    max-width: 343px;
    text-align: center;
  }

  p {
    font-size: ${p => p.theme.fontSizes.lg};
    line-height: ${p => p.theme.lineHeights.lg};
    color: ${p => p.theme.colors.grayDark.gray700};
    font-weight: ${p => p.theme.fontWeights.light};
  }
`;

const SchoolTitle = styled.h5`
  font-size: ${p => p.theme.fontSizes.$2xl};
  line-height: ${p => p.theme.lineHeights.xl};
  color: ${p => p.theme.colors.grayDark.gray900};
  font-weight: ${p => p.theme.fontWeights.medium};
  margin-top: ${p => p.theme.spacing.$8};
  margin-bottom: ${p => p.theme.spacing.$6};

  @media ${devices.tablet} {
    font-size: ${p => p.theme.fontSizes.xl};
    line-height: ${p => p.theme.lineHeights.lg};
    margin-bottom: ${p => p.theme.spacing.base};
  }
`;
