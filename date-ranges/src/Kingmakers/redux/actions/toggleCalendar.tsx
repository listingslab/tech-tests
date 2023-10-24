import { setPwaKey } from "../.."

export const toggleCalendar =
  (calendarOpen: boolean): any =>
  async (dispatch: any) => {
    try {
      dispatch(setPwaKey({ key: "calendarOpen", value: calendarOpen }))
    } catch (error: any) {
      console.log("Action error: toggleCalendar", error)
    }
  }
