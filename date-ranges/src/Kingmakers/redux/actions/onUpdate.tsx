import { AppThunk } from "../store"
import { setPwaKey } from "../.."
// import {QueryShape} from "../../types"

export const onUpdate =
  (data: any): AppThunk =>
  async (dispatch: any) => {
    try {
      // console.log("onUpdate", data)
      dispatch(setPwaKey({ key: "lastUpdated", value: Date.now() }))
      dispatch(setPwaKey({ key: "data", value: data }))
    } catch (error: any) {
      console.log("Action error: onUpdate", error)
    }
  }
