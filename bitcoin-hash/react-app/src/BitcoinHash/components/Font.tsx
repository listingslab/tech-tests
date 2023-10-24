import React from "react"
// import { FontShape } from "../../types"
import "../theme/fonts/quicksand.css"
import { useTheme, Typography } from "@mui/material"

export function Font(props: any) {
  const theme = useTheme()
  const { variant, fontSize, color, children, align, width } = props  
  let textAlign = "left"
  let w: any = "100%"
  let c = theme.palette.text.secondary
  if (color) c = color
  if (width) w = width
  let textfontSize: any = "1rem"
  let textFont = "Quicksand-Bold"
  let lineHeight: any = "1.2rem"
  if (align) textAlign = align
  if (variant === "black") textFont = "Quicksand-Bold"
  if (variant === "bold") textFont = "Quicksand-Black"
  if (variant === "thin") textFont = "Quicksand-Light"
  if (variant === "title") {
    textfontSize = "1.2rem"
    lineHeight = "1.4rem"
  }
  if (variant === "description") {
    textfontSize = "1.1rem"
    lineHeight = "1.3rem"
  }
  if (variant === "giant") {
    textfontSize = "1.6rem"
    lineHeight = "1.75rem"
  }
  if (variant === "subheader") {
    textfontSize = "1.1rem"
    lineHeight = "1.2rem"
  }
  if (variant === "small") {
    textfontSize = "0.9rem"
    lineHeight = "1rem"
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
