import { PaletteMode, /*lighten*/ } from "@mui/material"

export function makeTheme(
  mode: PaletteMode,
  primary: string,
  secondary: string
) {
  return {
    palette: {
      mode,
      primary: {
        main: primary,
      },
      secondary: {
        main: secondary,
      },
      // success: {
      //   main: lighten(secondary, 0.8)
      // },
      background: {
        // default: primary,
        // paper: lighten(primary, 0.8),
      }
    },
  }
}
