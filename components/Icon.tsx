import { iconList, IconList } from 'types/icon';

interface IconProps {
  name: IconList;
  color?: string;
  size?: number;
}

const Icon = ({ name, color, size, ...props }: IconProps) => {
  const selectedIcon = iconList.find(icon => icon.label === name);

  if (!selectedIcon) return null;
  const IconComponent = selectedIcon.icon;

  return (
    <IconComponent
      color={color}
      size={size}
      {...props}
    />
  );
};

export default Icon;
