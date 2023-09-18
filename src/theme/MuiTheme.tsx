import {ThemeShape} from "../types"
import React from "react"
import makeTheme from "./makeTheme"
import {
  createTheme,
  ThemeProvider,
} from "@mui/material"
import {
  selectPWA,
} from "../redux/pwaReducer"
import {usePwaSelect} from "../hooks/usePwaSelect"

export default function MuiTheme(props: any) {
  const pwa = usePwaSelect(selectPWA)
  const {theme} = pwa
  const {
    mode,
    primaryColor,
    secondaryColor,
  } = theme
  const {children} = props
  const customTheme = makeTheme(
    mode, 
    primaryColor, 
    secondaryColor
  )
  return (
    <>
      <ThemeProvider theme={createTheme(customTheme)}>
        {children}
      </ThemeProvider>
    </>
  )
}