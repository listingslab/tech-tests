import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "./store"
import {
  KeyValueShape,
  PwaReduxShape,
} from "../types"
import {
  theme,
} from "../"
import {campaignsData} from "../Campaigns"
const initialState: PwaReduxShape = {
  started: false,
  notifyer: null,
  theme,
  campaigns: campaignsData,
  calendarMode: null,
  calendarOpen: false,
  fromDate: null,
  toDate: null,
  searchStr: "",
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
