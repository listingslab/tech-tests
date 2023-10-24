## Bitcoin Hash Application

The [demo app](https://bitcoin-hash-demo.web.app/) consists of a React/MUI interface to the bitquery GraphQL. You can look up either an address or a transaction by it's hash. Once a record is found, the user can subscribe to updates, achived with @apollo's rect hooks (hopefully)

To query data for a hash using Bitquery's GraphQL API with Apollo in React and TypeScript, follow these steps:

1. Set up Apollo client configuration. Add the following code:

```typescript
import { ApolloClient, InMemoryCache } from '@apollo/client';
export const client = new ApolloClient({
  uri: "https://graphql.bitquery.io/",
  cache: new InMemoryCache(),
  headers: {
    "Content-Type": "application/json",
    "X-API-KEY": process.env.REACT_APP_BITQUERY_API_KEY,
  },
})
```

2. In your React component file, import the necessary dependencies and the Apollo client instance:

```typescript
import { useQuery, gql } from '@apollo/client';
import client from './apolloClient';
```






Combining [Bitquery's GraphQL API](https://bitquery.io/labs/graphql) service with [@apollo/client](https://www.npmjs.com/package/@apollo/client) in React, we developed an async data layer interface which is used via [redux actions](https://github.com/listingslab/bitcoin-hash/tree/master/react-app/src/BitcoinHash/redux/actions)

`bitcoin/address/bc1qgyrmw4ncp2rgkatz8p8uq86pls3xpk6u9kzmc7`


https://explorer.bitquery.io/

bitcoin/tx/2892bc7fb0c2efe34f655f659bffb4d694ffc33f824cb0752da5ecb2d2ff39dc

`bitcoin/tx/2892bc7fb0c2efe34f655f659bffb4d694ffc33f824cb0752da5ecb2d2ff39dc`
