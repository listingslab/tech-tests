import { PaletteMode } from "@mui/material"

export default function makeTheme(
  mode: PaletteMode,
  primary: string,
  secondary: string,
) {
  return {
    palette: {
      mode,
      background: {
        paper: "#f7f7fa",
      },
      primary: {
        main: primary,
      },
      
      secondary: {
        main: secondary,
      },
      success: {
        main: primary,
      },
      info: {
        main: "#C09F52",
      },
    },
  }
}
