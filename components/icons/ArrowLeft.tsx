import theme from 'theme';

const ArrowLeft = ({ color = theme.colors.grayDark.gray900, size = 24, ...props }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M11.1049 12.0001L14.8861 15.7814L13.806 16.8615L8.94458 12.0001L13.806 7.13871L14.8861 8.21885L11.1049 12.0001Z"
      fill={color}
    />
  </svg>
);

export default ArrowLeft;
