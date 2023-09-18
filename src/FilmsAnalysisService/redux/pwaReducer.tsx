import {
  KeyValueShape,
  PwaReduxShape,
} from "../../types"
import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "./store"

const initialState: PwaReduxShape = {
  searchStr: "", // Ridley Scott
  theme: {
    mode: "light",
    primaryColor: "#ffbb4b",
    secondaryColor: "#7d7da7",
    font: "Quicksand"
  },
}

export const pwaSlice = createSlice({
  name: "listingslab",
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
export const selectTheme = (state: RootState) => state.theme
export const selectSearchStr = (state: RootState) => state.searchStr

export const { setPwaKey } = pwaSlice.actions
export default pwaSlice.reducer
