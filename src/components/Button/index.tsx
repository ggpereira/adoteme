import { Contained, ContainedProps } from "./Contained";
import { Outlined } from "./Outlined";

const BUTTON_TYPES = {
  contained: Contained,
  outlined: Outlined,
};

type Props = {
  mode?: keyof typeof BUTTON_TYPES;
} & ContainedProps;

export default function Button(props: Props) {
  const { mode = "contained", ...rest } = props;

  const ButtonVariant = BUTTON_TYPES[mode];

  return <ButtonVariant {...rest} />;
}
