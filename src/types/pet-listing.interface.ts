import { Pet } from './pet.interface'
export interface PetListing {
  id: number
  pet: Pet
  description: string
  favorite: boolean
  picture: string
  shelter: string
  createdAt: string
  updatedAt: string
}
