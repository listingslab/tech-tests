import * as React from 'react'
import {
  Snackbar,
  Alert,
} from "@mui/material"
import { 
  usePwaSelect, 
  usePwaDispatch, 
  selectPWA, 
  toggleNotifyer,
} from ".."

export default function Notifyer() {

  const pwa = usePwaSelect(selectPWA)
  const dispatch = usePwaDispatch()
  const { 
    notifyer, 
  } = pwa
  if( !notifyer ) return null
  let { severity, message } = notifyer
  const closeNotifyer = () => dispatch(toggleNotifyer(null))

  return (
    <Snackbar
      open
      anchorOrigin={{ 
        vertical:"top", 
        horizontal:"right" 
      }}
      autoHideDuration={ 4000 }
      onClose={closeNotifyer}
    >
      <Alert 
        onClose={closeNotifyer} 
        variant="filled"
        severity={ severity }
        sx={{ width: '100%' }}>
          { message }
      </Alert>
    </Snackbar>
  )
}
