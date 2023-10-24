## ![alt text](../svg/logo16.svg "Bitcoin Hash Logo")  Initialise project

Public GitHub repo with CI workflow and a live demo on firebase

- [Repository](https://github.com/listingslab/bitcoin-hash)
- [Demo](https://bitcoin-hash-demo.web.app)
- [Tests](https://github.com/listingslab/bitcoin-hash/blob/master/react-app/src/BitcoinHash/BitcoinHash.test.tsx)
- [Docs](https://github.com/listingslab/bitcoin-hash/tree/master/react-app/public/markdown)

#### Portability

Copy the folder [/src/BitcoinHash/](https://github.com/listingslab/bitcoin-hash/tree/master/react-app/src/BitcoinHash) into any JS app and it _should just work_. (If all the dependencies exist)

Whatever code comes next should be be modular enough to pick up and place in any JavaScript App. That's done by creating a folder called `/src/BitcoinHash` in which all bitcoin-hash code lives. This command will install those deps in your-project. It won't matter if you already have them

```shell
npm install @apollo/client graphql react-redux @reduxjs/toolkit redux-persist @mui/material @emotion/react @emotion/styled @mui/icons-material moment
```

#### Create React App

The goal is that so long as the required dependencies exist in the main project, the Bitcoin Hash model/app/whatever should work anywhere. Like Storybook

`npx create-react-app react-app --template redux-typescript`
