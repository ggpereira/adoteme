export type PetStatus = "available" | "in-rescue";

export type Pet = {
  id: string;
  name: string;
  species: "dog" | "cat";
  breed: string;
  age: string;
  gender: "Macho" | "Fêmea";
  size: "Pequeno" | "Médio" | "Grande";
  city: string;
  state: string;
  distance: string;
  status: PetStatus;
  description: string;
  imageUrl: string;
  vaccinated: boolean;
  castrated: boolean;
  contact: {
    phone: string;
    email: string;
  };
};

export type Coordinate = {
  latitude: number;
  longitude: number;
};

export type MapPet = Pick<Pet, "id" | "name" | "species" | "imageUrl"> & {
  coordinate: Coordinate;
};
