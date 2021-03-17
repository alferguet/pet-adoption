import { Pet } from './pet.interface'
export interface PetListing {
  pet: Pet
  picture: string
  shelter: string
  createdAt: string
  updatedAt: string
  description: string
}
