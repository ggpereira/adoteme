import FormBuilder from "@/components/Form";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import { useState } from "react";
import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "./components/Header";
import RescueSuccess from "./components/RescueSuccess";
import { RESCUE_FORM } from "./formConfig";
import { styles } from "./styles";

export default function RescueScreen() {
  const tabBarHeight = useBottomTabBarHeight();
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  // A new key remounts FormBuilder, so "Novo chamado" starts with a clean form
  const [formKey, setFormKey] = useState<number>(0);

  // TODO: send the request to the rescue API once it exists
  const handleSubmit = () => setIsSubmitted(true);

  const handleNewRequest = () => {
    setFormKey((key) => key + 1);
    setIsSubmitted(false);
  };

  return (
    <SafeAreaView style={styles.container} edges={["top", "left", "right"]}>
      {isSubmitted ? (
        <RescueSuccess onNewRequest={handleNewRequest} />
      ) : (
        <ScrollView
          style={styles.container}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
          contentContainerStyle={[
            styles.scrollContent,
            { paddingBottom: tabBarHeight + 16 },
          ]}
        >
          <Header />
          <FormBuilder
            key={formKey}
            config={RESCUE_FORM}
            submitLabel="Enviar chamado de resgate"
            onSubmit={handleSubmit}
          />
        </ScrollView>
      )}
    </SafeAreaView>
  );
}
