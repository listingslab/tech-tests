import { AppThunk } from "../store"
import { setPwaKey } from "../.."

export const setCurrency =
  (selectedCurrency: string): AppThunk =>
  async (dispatch: any) => {
    try {
      dispatch(setPwaKey({ key: "selectedCurrency", value: selectedCurrency }))
    } catch (error: any) {
      console.log("Action error: setCurrency", error)
    }
  }
