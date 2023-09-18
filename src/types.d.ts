import { PaletteMode } from "@mui/material"
export type PwaReduxShape = {
  searchStr: string
  films: Array<any>
  theme: ThemeShape
}

export interface FilmShape {
  name: string
  length: number
  rating: number
  releaseDate: string
  directorName: string
}

export interface KeyValueShape {
  key: string
  value: any
}

export type ThemeShape = {
  mode: PaletteMode
  primaryColor: string
  secondaryColor: string
  backgroundColor?: string
  font?: string
}
