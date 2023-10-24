import React from "react"
// import { FontShape } from "../../types"
import "../theme/fonts/noka.css"
import { useTheme, Typography } from "@mui/material"

export function Font(props: any) {
  const theme = useTheme()
  const { variant, fontSize, color, children, align, width } = props  
  let textAlign = "left"
  let w: any = "100%"
  let c = theme.palette.text.primary
  if (color) c = color
  if (width) w = width
  let textfontSize: any = "0.8rem"
  let textFont = "Noka-Medium"
  let lineHeight: any = "1.2rem"
  if (align) textAlign = align
  if (variant === "title") {
    textfontSize = "1rem"
    lineHeight = "1.1rem"
    c = theme.palette.primary.main
  }
  if (variant === "giant") {
    textfontSize = "1.6rem"
    lineHeight = "1.75rem"
  }
  if (fontSize) {
    lineHeight = fontSize
    textfontSize = fontSize
  }
  return (
    <Typography
      // noWrap={true}
      component="span"
      sx={{
        // border: "1px solid red",
        display: "block",
        overflow: "hidden",
        textAlign,
        fontFamily: textFont,
        fontSize: textfontSize,
        lineHeight,
        color: c,
        width: w,
      }}
    >
      {children}
    </Typography>
  )
}
