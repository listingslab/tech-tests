import { 
  setPwaKey, 
  updateTransactions,
} from "../../"

export const startApp =
  (): any =>
  async (dispatch: any) => {
    try {
      dispatch(updateTransactions())
      dispatch(setPwaKey({ key: "persisted", value: true }))
      dispatch(setPwaKey({ key: "started", value: true }))
    } catch (error: any) {
      console.log("Action error: startApp", error)
    }
  }