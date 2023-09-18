import { PaletteMode } from "@mui/material"
export type PwaReduxShape = {
  searchStr: string
  theme: ThemeShape
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
