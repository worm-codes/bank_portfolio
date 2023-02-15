import theme from 'theme';

const ArrowRight = ({ color = theme.colors.grayDark.gray900, size = 24, ...props }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12.8951 12.0001L9.11389 8.21885L10.194 7.13871L15.0554 12.0001L10.194 16.8615L9.11389 15.7814L12.8951 12.0001Z"
      fill={color}
    />
  </svg>
);

export default ArrowRight;
