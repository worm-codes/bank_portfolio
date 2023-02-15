import Image from 'next/image';

function Logo({ width = 121, height = 64 }) {
  return (
    <Image
      src="/logo.png"
      alt="logo"
      width={width}
      height={height}
    />
  );
}

export default Logo;
