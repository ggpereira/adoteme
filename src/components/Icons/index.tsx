import * as icons from "lucide-react-native/icons";

export type IconNames = keyof typeof icons;
interface IconProps {
  name: IconNames;
  color?: string;
  size?: number;
}

export default function Icon({ name, color, size }: IconProps) {
  const LucideIcon = icons[name];

  return <LucideIcon color={color} size={size} />;
}
