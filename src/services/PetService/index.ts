import { PETS_MOCK } from "./pets.mock";
import { Pet } from "./types";

export type { Pet, PetStatus } from "./types";

// Single entry point for pet data. Screens never import the mock directly,
// so switching to the real API only changes this file.
export function getPets(): Pet[] {
  return PETS_MOCK;
}

export function getPetById(id: string): Pet | undefined {
  return PETS_MOCK.find((pet) => pet.id === id);
}
