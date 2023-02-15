import Image from 'next/image';

function Logo({ width = 140, height = 100 }) {
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
