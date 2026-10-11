import Dropdown from "@/components/Dropdown";
import Icon from "@/components/Icons";
import Text from "@/components/Text";
import { COLORS } from "@/styles/Colors";
import { Image } from "expo-image";
import * as ImagePicker from "expo-image-picker";
import { useState } from "react";
import {
  Alert,
  Linking,
  Pressable,
  TouchableOpacity,
  View,
} from "react-native";
import FieldError from "../FieldError";
import { fieldStyles } from "../fieldStyles";
import { styles } from "./styles";

const PICKER_OPTIONS: ImagePicker.ImagePickerOptions = {
  mediaTypes: ["images"],
  allowsEditing: true,
  aspect: [4, 3],
  quality: 0.7,
};

const MODAL_CLOSE_DELAY = 350;

const SOURCES = [
  { id: "camera", label: "Tirar foto" },
  { id: "gallery", label: "Escolher da galeria" },
];

type Props = {
  value: string | null;
  onChange: (uri: string | null) => void;
  label?: string;
  placeholder?: string;
  cameraType?: ImagePicker.CameraType;
  error?: string;
};

export default function Photo({
  value,
  onChange,
  label,
  placeholder = "Adicionar foto (opcional)",
  cameraType = ImagePicker.CameraType.back,
  error,
}: Props) {
  const [sourcesOpen, setSourcesOpen] = useState<boolean>(false);

  const handleResult = (result: ImagePicker.ImagePickerResult) => {
    if (!result.canceled) {
      onChange(result.assets[0].uri);
    }
  };

  const pickFromGallery = async () => {
    handleResult(await ImagePicker.launchImageLibraryAsync(PICKER_OPTIONS));
  };

  const takePhoto = async () => {
    const { granted } = await ImagePicker.requestCameraPermissionsAsync();
    if (!granted) {
      Alert.alert(
        "Permissão necessária",
        "Precisamos de acesso à câmera para fotografar o animal.",
        [
          { text: "Cancelar", style: "cancel" },
          {
            text: "Abrir configurações",
            onPress: () => Linking.openSettings(),
          },
        ],
      );
      return;
    }
    handleResult(
      await ImagePicker.launchCameraAsync({ ...PICKER_OPTIONS, cameraType }),
    );
  };

  const handleSourcePress = (source: string) => {
    // Wait for the dropdown Modal to close, otherwise iOS dismisses the picker with it
    setTimeout(
      source === "camera" ? takePhoto : pickFromGallery,
      MODAL_CLOSE_DELAY,
    );
  };

  const trigger = value ? (
    <Pressable
      style={styles.previewContainer}
      onPress={() => setSourcesOpen(true)}
    >
      <Image
        source={{ uri: value }}
        style={styles.preview}
        contentFit="cover"
      />
      <TouchableOpacity
        style={styles.removeButton}
        onPress={() => onChange(null)}
      >
        <Icon name="X" size={16} color={COLORS.base.foreground} />
      </TouchableOpacity>
    </Pressable>
  ) : (
    <Pressable
      style={[styles.emptyBox, error ? fieldStyles.boxError : null]}
      onPress={() => setSourcesOpen(true)}
    >
      <Icon name="Camera" size={16} color={COLORS.text["muted-foreground"]} />
      <Text style={fieldStyles.placeholder}>{placeholder}</Text>
    </Pressable>
  );

  return (
    <View style={fieldStyles.container}>
      {label && <Text style={fieldStyles.label}>{label}</Text>}
      <Dropdown
        items={SOURCES}
        onItemPress={handleSourcePress}
        isExpanded={sourcesOpen}
        onRequestDismiss={() => setSourcesOpen(false)}
        trigger={trigger}
      />
      <FieldError message={error} />
    </View>
  );
}
