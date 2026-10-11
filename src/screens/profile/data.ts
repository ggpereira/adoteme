import { IconNames } from "@/components/Icons";

// Mock data until the user API exists

export type UserProfile = {
  name: string;
  location: string;
  memberSince: number;
  avatarUrl?: string;
};

export type ProfileStat = {
  label: string;
  value: number;
};

export type FavoritePet = {
  id: string;
  name: string;
  imageUrl: string;
};

export type ProfileMenuItem = {
  id: string;
  label: string;
  icon: IconNames;
};

export const PROFILE: UserProfile = {
  name: "Gabriel Gomes",
  location: "Santa Maria, RS",
  memberSince: 2026,
};

export const PROFILE_STATS: ProfileStat[] = [
  { label: "Favoritos", value: 3 },
  { label: "Adoções", value: 1 },
  { label: "Resgates", value: 2 },
];

export const FAVORITE_PETS: FavoritePet[] = [
  {
    id: "59bf79e0-71c0-469b-b93e-eae022103b4b",
    name: "Mel",
    imageUrl: "https://images.unsplash.com/photo-1594004844563-536a03a6e532",
  },
  {
    id: "57740506-8138-4971-bf8e-67bd055c9385",
    name: "Luna",
    imageUrl: "https://images.unsplash.com/photo-1582725461742-8ecd962c260d",
  },
  {
    id: "f9eb7175-fa69-4c26-b315-34f3e7313ba5",
    name: "Nala",
    imageUrl: "https://images.unsplash.com/photo-1615111784767-4d7c527f32a1",
  },
];

export const PROFILE_MENU: ProfileMenuItem[] = [
  { id: "notifications", label: "Preferências de notificação", icon: "Bell" },
  { id: "area", label: "Área de interesse", icon: "MapPin" },
  { id: "adoptions", label: "Histórico de adoções", icon: "Heart" },
  { id: "volunteer", label: "Ser voluntário", icon: "Star" },
];
