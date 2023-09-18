import React from "react"
import {
  CssBaseline,
  Container,
  Card,
  CardHeader,
  IconButton,
} from "@mui/material"
import {
  MuiTheme,
  DirectorInput,
  Icon,
  Font,
  usePwaDispatch,
  resetRedux
} from "./FilmsAnalysisService"

export default function App() {
  const dispatch = usePwaDispatch()
  return (<>
            <MuiTheme>
              <Container maxWidth="sm">
                <CssBaseline />
                <Card sx={{my:2}}>
                  <CardHeader 
                    title={<Font variant="title" color="#7d7da7">
                            Films Analysis Service
                          </Font>}
                    action={<IconButton
                              color="primary"
                              onClick={(e: React.MouseEvent) => {
                                e.preventDefault()
                                dispatch(resetRedux())
                              }}
                            >
                              <Icon icon="refresh" />
                            </IconButton>}
                  />
                  <DirectorInput />
                </Card>
              </Container>
            </MuiTheme>
          </>)
}
