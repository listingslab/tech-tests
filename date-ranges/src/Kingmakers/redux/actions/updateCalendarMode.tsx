import { setPwaKey } from "../.."

export const updateCalendarMode =
  (calendarMode: string|null): any =>
  async (dispatch: any) => {
    try {
      dispatch(setPwaKey({ key: "calendarMode", value: calendarMode }))
    } catch (error: any) {
      console.log("Action error: updateCalendarMode", error)
    }
  }
