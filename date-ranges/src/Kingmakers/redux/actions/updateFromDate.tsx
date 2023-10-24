import { setPwaKey } from "../.."

export const updateFromDate =
  (fromDate: string|null): any =>
  async (dispatch: any) => {
    try {
      dispatch(setPwaKey({ key: "fromDate", value: fromDate }))
    } catch (error: any) {
      console.log("Action error: updateFromDate", error)
    }
  }
