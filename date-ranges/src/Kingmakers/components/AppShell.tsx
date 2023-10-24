import React from "react"
import {
  usePwaSelect,
  usePwaDispatch,
  startApp,
  selectPWA,
  Campaigns,
  registerAddCampaigns,
} from "../"

export default function AppShell() {
  const pwa = usePwaSelect(selectPWA)
  const dispatch = usePwaDispatch()
  
  React.useEffect(() => {
    const {started} = pwa
    registerAddCampaigns()
    if (!started) dispatch(startApp())
  }, [pwa, dispatch])

  return <Campaigns />
}
