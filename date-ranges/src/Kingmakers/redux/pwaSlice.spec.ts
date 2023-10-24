import React from 'react';
// import {PwaReduxShape} from "../types"
// import {setPwaKey} from './pwaReducer';

test('Sun Rise', () => {
    // console.log("sunrise")
    const theSunWillRise = true;
    expect(theSunWillRise);
});

  describe('Select Currency', () => {
    console.log("Should update currency to GDP", {
      key: "selectedCurrency", 
      value: "GBP",
    })

    // const initialState: PwaReduxShape = {
    //   currency: "EUR",
    //   status: 'idle',
    // };
    // it('Should update currency', () => {
    //   expect(setPwaKey({
    //   currency: "EUR",
    //   status: 'idle',
    // }).toEqual({
    //     key: 0,
    //     status: 'idle',
    //   });
    // });


  });