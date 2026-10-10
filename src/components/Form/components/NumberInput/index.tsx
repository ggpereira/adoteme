import Input, { InputProps } from "../Input";

function isNumber(value: string) {
  if (Number.isNaN(Number(value))) return false;
  return true;
}

export default function NumberInput({ onChangeText, ...rest }: InputProps) {
  const handleTextChange = (text: string) => {
    if (!isNumber(text)) return;
    onChangeText(text);
  };

  return (
    <Input
      {...rest}
      onChangeText={handleTextChange}
      keyboardType="number-pad"
    />
  );
}
