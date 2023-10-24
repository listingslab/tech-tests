import pJSON from "../../package.json"
import React from "react"
import "./theme/default.css"
import {
  ApolloClient, 
  InMemoryCache, 
  ApolloProvider,
} from "@apollo/client"
import {
  Container,
} from "@mui/material"
import {
  AppShell,
  MuiTheme,
  WrapRedux,
} from "./"
console.log(pJSON.name, pJSON.version)

export const client = new ApolloClient({
  uri: "https://graphql.bitquery.io/",
  cache: new InMemoryCache(),
  headers: {
    "Content-Type": "application/json",
    // @ts-ignore
    "X-API-KEY": process.env.REACT_APP_BITQUERY_API_KEY,
  },
})

export default function BitcoinHash() {
  return (<>
            <ApolloProvider client={client}>
              <WrapRedux>
                <MuiTheme>
                  <Container maxWidth="md">
                    <AppShell />
                  </Container>
                </MuiTheme>
              </WrapRedux>
            </ApolloProvider>
          </>)
}


/*
  const output: any = null
  {output ? <pre>{JSON.stringify(output, null, 2)}</pre> : null}
*/