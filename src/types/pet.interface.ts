import { Species } from './species.enum'

export interface Pet {
  name: string
  birthday: string
  species: Species
  quirks: string
}
