import React from "react"
import "./fonts/quicksand.css"
import { 
  useTheme,
  useMediaQuery,
  Typography, 
} from "@mui/material"

export function Font(props: any) {
  const textFont = "Quicksand"
  const theme = useTheme()
  const isBig = useMediaQuery(theme.breakpoints.up("sm"))
  const { 
    variant, 
    fontSize, 
    color, 
    children, 
    align, 
    width,
    fixedH,
  } = props  
  let textAlign = "left"
  let w: any = "100%"
  let c = theme.palette.text.primary
  let fH: any = null
  if (color) c = color
  if (color === "primary") c = theme.palette.primary.main
  if (color === "secondary") c = theme.palette.secondary.main
  if (width) w = width
  let textfontSize: any = "1.0rem"
  textfontSize = isBig ? "1.0rem" : "0.8rem"

  if (align) textAlign = align
  if (variant === "title") {
    textfontSize = isBig ? "1.0rem" : "1.1rem"
  }
  if (variant === "small") {
    textfontSize = isBig ? "0.8rem" : "0.8rem"
  }
  if (variant === "giant") {
    textfontSize = isBig ? "2rem" : "2rem"
    c = "#7d7da7"
  }
  if (fontSize) textfontSize = fontSize
  if (fixedH) fH = fixedH

  return (
    <Typography
      component="span"
      overflow={"hidden"}
      sx={{
        display: "block",
        overflow: "hidden",
        textAlign,
        fontFamily: textFont,
        fontSize: textfontSize,
        color: c,
        width: w,
        height: fH,
      }}>
      {children}
    </Typography>
  )
}
