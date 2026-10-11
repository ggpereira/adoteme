import * as icons from "lucide-react-native/icons";

export type IconNames = keyof typeof icons;
interface IconProps {
  name: IconNames;
  color?: string;
  size?: number;
  fill?: string;
}

export default function Icon({ name, color, size, fill }: IconProps) {
  const LucideIcon = icons[name];

  // Only forward `fill` when set: an explicit `undefined` overrides lucide's
  // default `fill="none"` and the SVG falls back to a black fill.
  return <LucideIcon color={color} size={size} {...(fill ? { fill } : null)} />;
}
