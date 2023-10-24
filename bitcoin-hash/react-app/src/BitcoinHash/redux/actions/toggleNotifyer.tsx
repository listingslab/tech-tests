import { NotifyerShape } from "../../types"
import { setPwaKey } from "../.."

export const toggleNotifyer =
  (nofifyer: NotifyerShape|null): any =>
  async (dispatch: any) => {
    try {
        dispatch(setPwaKey({ key: "notifyer", value: nofifyer }))
    } catch (error: any) {
      console.log("Action error: openNotifyer", error)
    }
  }
