import theme from 'theme';

const ExternalLink = ({ color = theme.colors.primary.base, size = 24, ...props }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10.4722 7.41667V8.94444H6.65278V17.3472H15.0556V13.5278H16.5833V18.1111C16.5833 18.3137 16.5029 18.508 16.3596 18.6513C16.2163 18.7945 16.022 18.875 15.8194 18.875H5.88889C5.68629 18.875 5.49199 18.7945 5.34874 18.6513C5.20548 18.508 5.125 18.3137 5.125 18.1111V8.18056C5.125 7.97796 5.20548 7.78366 5.34874 7.6404C5.49199 7.49715 5.68629 7.41667 5.88889 7.41667H10.4722ZM18.875 5.125V11.2361H17.3472V7.73215L11.3942 13.6859L10.3141 12.6058L16.2663 6.65278H12.7639V5.125H18.875Z"
      fill={color}
    />
  </svg>
);

export default ExternalLink;