import Avatar from "@/components/Avatar";
import Text from "@/components/Text";
import { COLORS } from "@/styles/Colors";
import { FONTS } from "@/styles/Fonts";
import { SPACING } from "@/styles/global";
import { StyleSheet, View } from "react-native";
import { ProfileStat, UserProfile } from "../data";
import ProfileStats from "./ProfileStats";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingHorizontal: SPACING.screenHorizontal,
  },
  avatar: {
    marginBottom: 12,
  },
  name: {
    fontFamily: FONTS.fontFamily.playfairDisplay,
    fontSize: FONTS.fontSize["2xl"],
    fontWeight: FONTS.fontWeight.bold,
    color: COLORS.base.foreground,
  },
  details: {
    marginBottom: 16,
    fontSize: FONTS.fontSize.base,
    color: COLORS.text["muted-foreground"],
  },
});

type Props = {
  profile: UserProfile;
  stats: ProfileStat[];
};

export default function ProfileHeader({ profile, stats }: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.avatar}>
        <Avatar name={profile.name} imageUrl={profile.avatarUrl} />
      </View>
      <Text style={styles.name}>{profile.name}</Text>
      <Text style={styles.details}>
        {profile.location} · membro desde {profile.memberSince}
      </Text>
      <ProfileStats stats={stats} />
    </View>
  );
}
