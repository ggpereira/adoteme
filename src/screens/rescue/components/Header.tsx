import Icon from "@/components/Icons";
import Text from "@/components/Text";
import { COLORS } from "@/styles/Colors";
import { globalStyles } from "@/styles/global";
import { View } from "react-native";
import { styles } from "../styles";

export default function Header() {
  return (
    <View style={globalStyles.screenHeader}>
      <View style={styles.titleRow}>
        <Icon name="TriangleAlert" size={20} color={COLORS.primary.default} />
        <Text style={globalStyles.screenTitle}>Chamado de Resgate</Text>
      </View>
      <Text style={globalStyles.screenSubtitle}>
        Encontrou um animal em risco? Nos avise.
      </Text>
    </View>
  );
}
