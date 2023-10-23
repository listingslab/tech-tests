import {ThemeShape} from "../../types"
import React from "react"
import makeTheme from "./makeTheme"
import {
  createTheme,
  ThemeProvider,
} from "@mui/material"
import {
  selectTheme,
} from "../"
import {usePwaSelect} from "../hooks/usePwaSelect"

export default function MuiTheme(props: any) {
  const {children} = props
  const theme = usePwaSelect(selectTheme)
  const {
    mode,
    primaryColor,
    secondaryColor,
  } = theme
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