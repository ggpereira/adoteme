import { MapPet } from "./types";

// Approximate points in different neighborhoods of Santa Maria, RS
export const MAP_PETS_MOCK: MapPet[] = [
  {
    id: "3f2a9c1e-8b4d-4e6a-9c2f-1a7b5d3e8f01",
    name: "Thor",
    species: "dog",
    imageUrl: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=160&h=160&fit=crop",
    // Centro (Praça Saldanha Marinho)
    coordinate: { latitude: -29.684167, longitude: -53.806944 },
  },
  {
    id: "a8d4e2b7-5c1f-4b9a-8e3d-2f6c9a1b4e02",
    name: "Mia",
    species: "cat",
    imageUrl: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=160&h=160&fit=crop",
    // Nossa Senhora de Fátima
    coordinate: { latitude: -29.690512, longitude: -53.799874 },
  },
  {
    id: "c6b1f9d3-2e7a-4d8c-b5f1-9e3a7c2d6b03",
    name: "Pipoca",
    species: "dog",
    imageUrl: "https://images.unsplash.com/photo-1517849845537-4d257902454a?w=160&h=160&fit=crop",
    // Medianeira
    coordinate: { latitude: -29.697803, longitude: -53.805121 },
  },
  {
    id: "e1d7a3c9-6f2b-4a5e-9d8c-3b1f7e4a9c04",
    name: "Frajola",
    species: "cat",
    imageUrl: "https://images.unsplash.com/photo-1574158622682-e40e69881006?w=160&h=160&fit=crop",
    // Nossa Senhora das Dores
    coordinate: { latitude: -29.680934, longitude: -53.788512 },
  },
  {
    id: "5b9e3d1a-7c4f-4e2b-a6d9-8f1c3e5b7a05",
    name: "Paçoca",
    species: "dog",
    imageUrl: "https://images.unsplash.com/photo-1594004844563-536a03a6e532?w=160&h=160&fit=crop",
    // Patronato
    coordinate: { latitude: -29.679215, longitude: -53.819437 },
  },
  {
    id: "9c4a7e2d-1b8f-4c3a-b7e5-6d2a9f1c8e06",
    name: "Salem",
    species: "cat",
    imageUrl: "https://images.unsplash.com/photo-1533738363-b7f9aef128ce?w=160&h=160&fit=crop",
    // Camobi (próximo à UFSM)
    coordinate: { latitude: -29.712436, longitude: -53.716958 },
  },
];
