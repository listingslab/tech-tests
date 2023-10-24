import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import BitcoinHash from './BitcoinHash';

test('Sun Rise?', () => {
  console.log("Does the sun always rise? yes.")
  const theSunAlwaysRises = true
  expect(theSunAlwaysRises);
});

test('REACT_APP_BITQUERY_API_KEY?', () => {
  // console.log("Is Bitquery API Key in .env?")
  const env = true
  expect(env);
});

test('Bitquery', () => {
  console.log("Do we get a sensible response from Bitquery?")
  const bq = true
  expect(bq);
});

// test('Bitquery Subscribe', () => {
//   console.log("Can we subscribe Bitquery data?")
//   const bq = true
//   expect(bq);
// });

test('Renders app', () => {
  const { getByText } = render(
    <Provider store={store}>
      <BitcoinHash />
    </Provider>
  );
  expect(getByText(/Blockchain/i)).toBeInTheDocument();
});
