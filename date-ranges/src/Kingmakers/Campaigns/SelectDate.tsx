import * as React from 'react'
import dayjs from "dayjs"
import {
  Button,
} from "@mui/material"
import {
  usePwaSelect,
  selectPWA,
  usePwaDispatch,
  toggleCalendar,
  updateCalendarMode,
  Font,
} from ".."

export default function SelectDate(props: any) {
  const {mode} = props
  const pwa = usePwaSelect(selectPWA)
  const dispatch = usePwaDispatch()
  const {fromDate, toDate} = pwa

  return <>
    <Button
      sx={{m:1}}
      onClick={(e: React.MouseEvent) => {
        e.preventDefault()
        dispatch(toggleCalendar(true))
        dispatch(updateCalendarMode(mode))
      }}>
      <Font variant="title">
        {mode === "to" ? <>
          {toDate ? `To ${dayjs(toDate).format("DD/MM/YY")}` : "To..." }
        </> : <>
          {fromDate ? `From ${dayjs(fromDate).format("DD/MM/YY")}` : "From..." }
        </> }
      </Font>
    </Button>
  </>
}
