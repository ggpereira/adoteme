import { Contained, ContainedProps } from "./Contained";

const BUTTON_TYPES = {
  contained: Contained,
};

type Props = {
  mode?: keyof typeof BUTTON_TYPES;
} & ContainedProps;

export default function Button(props: Props) {
  const { mode = "contained", ...rest } = props;

  const ButtonVariant = BUTTON_TYPES[mode];

  return <ButtonVariant {...rest} />;
}
