import * as React from 'react'
import {
  IconButton,
} from "@mui/material"
import {
  usePwaSelect,
  selectPWA,
  usePwaDispatch,
  updateToDate,
  updateFromDate,
  Icon,
} from ".."

export default function DeselectDate(props: any) {
  const {mode} = props
  const pwa = usePwaSelect(selectPWA)
  const dispatch = usePwaDispatch()
  const {fromDate, toDate} = pwa
  if (mode === "from" && !fromDate) return null 
  if (mode === "to" && !toDate) return null 

  return <>
    <IconButton
      sx={{textTransform: "none"}}
      color="primary"
      onClick={(e: React.MouseEvent) => {
        e.preventDefault()
        if (mode === "from") dispatch(updateFromDate(null))
        if (mode === "to") dispatch(updateToDate(null))
      }}>
      <Icon icon="close" />
    </IconButton>
  </>
}
