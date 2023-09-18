import { PaletteMode } from "@mui/material"
export type PwaReduxShape = {
  searchStr: string
  films: Array<any>
  theme: ThemeShape
}

export interface Film {

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
