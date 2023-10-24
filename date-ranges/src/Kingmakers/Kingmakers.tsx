import React from "react"
import pJSON from "../../package.json"
import "./theme/default.css"
import {
  Container,
} from "@mui/material"
import {
  AppShell,
  MuiTheme,
  WrapRedux,
  Notifyer,
} from "."
console.log(pJSON.name, pJSON.version)

export default function Kingmakers() {
  
  return (<React.Fragment>
            <WrapRedux>
              <MuiTheme>
                <Notifyer />
                <Container maxWidth="lg">
                  <AppShell />
                </Container>
              </MuiTheme>
            </WrapRedux>
          </React.Fragment>)
}
