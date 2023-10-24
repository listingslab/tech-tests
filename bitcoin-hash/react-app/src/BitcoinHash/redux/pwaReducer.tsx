import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "./store"
import {
  KeyValueShape,
  PwaReduxShape,
} from "../types"
import {
  theme,
  currencies,
} from "../"

const initialState: PwaReduxShape = {
  started: false,
  lastUpdate: Date.now(),
  transactions: [],
  searching: false,
  searchStr: "",
  searchResults: null,
  currencies,
  selectedCurrency: "EUR",
  theme,
  notifyer: null,
  persisted: false,
}

export const pwaSlice = createSlice({
  name: "pwa",
  initialState,
  reducers: {
    setPwaKey: (state, action: PayloadAction<KeyValueShape>) => {
      const { key, value } = action.payload
      // @ts-ignore
      state[key] = value
    },
  },
})

export const selectPWA = (state: RootState) => state
export const { setPwaKey } = pwaSlice.actions
export default pwaSlice.reducer
