import * as React from 'react'
import {
  styled,
  CssBaseline,
  Box,
  AppBar,
  Toolbar,
  Fab,
} from "@mui/material"
import {
  usePwaSelect,
  usePwaDispatch,
  selectPWA,
  scrollTop,
  startApp,
  ListTransactions,
  Icon,
  Notifyer,
  // updateTransactions,
} from "./"

const StyledFab = styled(Fab)({
  position: 'absolute',
  zIndex: 1,
  top: -30,
  left: 0,
  right: 0,
  margin: '0 auto',
})

export default function AppShell() {
  const pwa = usePwaSelect(selectPWA)
  const dispatch = usePwaDispatch()

  React.useEffect(() => {
    const {started} = pwa
    if (!started){
      // @ts-ignore
      dispatch(startApp())
    }
  }, [pwa, dispatch])

  
  return (<>
    <CssBaseline />
    <ListTransactions />
    <AppBar position="fixed" color="primary" sx={{ top: 'auto', bottom: 0 }}>
      <Toolbar>
        <StyledFab 
          color="primary"
          onClick={(e: React.MouseEvent) => {
            e.preventDefault()
            dispatch(scrollTop())
          }}>
          <Icon icon="up" />
        </StyledFab>
        <Box sx={{ flexGrow: 1 }} />
      </Toolbar>
    </AppBar>
    <Notifyer />
  </>
  )
}
