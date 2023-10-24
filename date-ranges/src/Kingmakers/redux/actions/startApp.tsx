// import { AppThunk } from "../store"
import { setPwaKey } from "../../"

export const startApp =
  (): any =>
  async (dispatch: any) => {
    try {
      dispatch(setPwaKey({ key: "started", value: true }))
    } catch (error: any) {
      console.log("Action error: startApp", error)
    }
  }
