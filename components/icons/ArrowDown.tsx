import theme from 'theme';

const ArrowDown = ({ color = theme.colors.grayDark.gray900, size = 8, ...props }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 8 6"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M3.99997 5.29178L0.758789 2.0506L1.83969 0.970459L3.99997 3.1315L6.16025 0.970459L7.24115 2.0506L3.99997 5.29178Z"
      fill={color}
    />
  </svg>
);

export default ArrowDown;
