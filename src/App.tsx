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
  usePwaSelect,
  selectFilms,
  resetRedux,
  Results,
} from "./FilmsAnalysisService"

export default function App() {
  const dispatch = usePwaDispatch()
  const films = usePwaSelect(selectFilms)
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
                  <Results />
                  
                </Card>
              </Container>
            </MuiTheme>
          </>)
}
