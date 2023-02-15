import theme from 'theme';

const ArrowUp = ({ color = theme.colors.primary.base, size = 8, ...props }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 8 6"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3.99997 2.86853L1.83969 5.02957L0.758789 3.94943L3.99997 0.708252L7.24115 3.94943L6.16025 5.02957L3.99997 2.86853Z"
      fill={color}
    />
  </svg>
);

export default ArrowUp;
