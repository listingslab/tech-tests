import { setPwaKey } from "../.."

export const updateSearchStr =
  (searchStrT: string): any =>
  async (dispatch: any) => {
    try {
      dispatch(setPwaKey({ key: "searchStr", value: searchStrT }))
    } catch (error: any) {
      console.log("Action error: updateSearchStr", error)
    }
  }
