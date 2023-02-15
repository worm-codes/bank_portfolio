import { iconList } from 'types/icon';

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
