import Button from "@/components/Button";
import Icon from "@/components/Icons";
import Text from "@/components/Text";
import { COLORS } from "@/styles/Colors";
import { globalStyles } from "@/styles/global";
import { View } from "react-native";
import { styles } from "../styles";

type Props = {
  onNewRequest: () => void;
};

export default function RescueSuccess({ onNewRequest }: Props) {
  return (
    <View style={styles.success}>
      <View style={styles.successIcon}>
        <Icon name="CircleCheck" size={48} color={COLORS.feedback.success} />
      </View>
      <Text style={[globalStyles.screenTitle, styles.successTitle]}>
        Resgate registrado!
      </Text>
      <Text style={styles.successText}>
        Nossa rede de voluntários foi acionada. Entraremos em contato em breve
        com atualizações.
      </Text>
      <Button
        text="Novo chamado"
        style={styles.successButton}
        textStyle={styles.successButtonText}
        onPress={onNewRequest}
      />
    </View>
  );
}
