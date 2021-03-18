import { Pet } from './pet.interface'
export interface PetListing {
  id?: number
  pet: Pet
  picture: string
  shelter: string
  createdAt: string
  updatedAt: string
  description: string
}
