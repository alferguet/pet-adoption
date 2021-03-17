import { Species } from './species.enum'

export interface Pet {
  name: string
  birthday: Date
  species: Species
  quirks: string
}
