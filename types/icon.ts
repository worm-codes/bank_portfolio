import { ArrowUp, ArrowDown, ArrowRight, ArrowLeft, Phone, MapPin, Mail, ExternalLink } from 'components/icons';

export const iconList = [
  { label: 'arrow-up', icon: ArrowUp },
  { label: 'arrow-down', icon: ArrowDown },
  { label: 'arrow-right', icon: ArrowRight },
  { label: 'arrow-left', icon: ArrowLeft },
  { label: 'phone', icon: Phone },
  { label: 'map-pin', icon: MapPin },
  { label: 'mail', icon: Mail },
  { label: 'external-link', icon: ExternalLink },
];

export type IconList = typeof iconList[number]['label'];
