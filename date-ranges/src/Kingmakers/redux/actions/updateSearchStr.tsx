import { setPwaKey } from "../.."

export const updateSearchStr =
  (searchStr: string): any =>
  async (dispatch: any) => {
    try {
      dispatch(setPwaKey({ key: "searchStr", value: searchStr }))
    } catch (error: any) {
      console.log("Action error: updateSearchStr", error)
    }
  }
