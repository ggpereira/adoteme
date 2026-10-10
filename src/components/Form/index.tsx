import { useState } from "react";
import { View } from "react-native";
import Input from "./components/Input";
import NumberInput from "./components/NumberInput";
import Photo from "./components/Photo";
import Select from "./components/Select";

export default function Form() {
  const [textValue, setTextValue] = useState<string>("");
  const [numberValue, setNumberValue] = useState<string>("");
  const [photoUri, setPhotoUri] = useState<string | null>(null);

  const onChangeText = (text: string) => setTextValue(text);
  const onChangeNumber = (text: string) => setNumberValue(text);

  return (
    <View style={{ gap: 10 }}>
      <Input
        value={textValue}
        label="Text input"
        onChangeText={onChangeText}
        placeholder="Texto teste"
      />
      <NumberInput
        value={numberValue}
        label="Number input"
        onChangeText={onChangeNumber}
        placeholder="Número teste"
      />
      <Select />
      <Photo value={photoUri} onChange={setPhotoUri} />
      <NumberInput
        value={numberValue}
        label="Number input"
        onChangeText={onChangeNumber}
        placeholder="Número teste"
      />
    </View>
  );
}
