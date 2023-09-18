import React from "react"
import {
  CssBaseline,
  Container,
} from "@mui/material"
import {DirectorInput} from "./components"

export default function App() {
  return (<>
            <Container maxWidth="xs">
              <CssBaseline />
              <DirectorInput />
            </Container>
          </>)
}
