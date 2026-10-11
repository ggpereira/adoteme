import Text from "@/components/Text";
import { globalStyles } from "@/styles/global";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import { ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import FavoritePets from "./components/FavoritePets";
import MenuItem from "./components/MenuItem";
import ProfileHeader from "./components/ProfileHeader";
import { FAVORITE_PETS, PROFILE, PROFILE_MENU, PROFILE_STATS } from "./data";
import { styles } from "./styles";

export default function ProfileScreen() {
  const tabBarHeight = useBottomTabBarHeight();

  return (
    <SafeAreaView style={styles.container} edges={["top", "left", "right"]}>
      <ScrollView
        style={styles.container}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[
          styles.scrollContent,
          { paddingBottom: tabBarHeight + 16 },
        ]}
      >
        <View style={styles.section}>
          <Text style={globalStyles.screenTitle}>Meu Perfil</Text>
        </View>

        <ProfileHeader profile={PROFILE} stats={PROFILE_STATS} />

        <View>
          <Text style={[styles.sectionTitle, styles.section]}>
            Animais favoritados
          </Text>
          <FavoritePets pets={FAVORITE_PETS} />
        </View>

        {/* TODO: navigate to each settings screen once they exist */}
        <View style={[styles.section, styles.menu]}>
          {PROFILE_MENU.map((item) => (
            <MenuItem key={item.id} label={item.label} icon={item.icon} />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
