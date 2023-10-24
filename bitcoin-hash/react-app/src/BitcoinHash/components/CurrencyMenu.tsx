import * as React from "react"
import { 
  Box,
  Avatar,
  IconButton,
  Tooltip,
  useTheme,
  
} from "@mui/material"
import { 
  usePwaSelect, 
  usePwaDispatch, 
  selectPWA, 
  setCurrency,
} from ".."

export default function CurrencyMenu() {
  const pwa = usePwaSelect(selectPWA)
  const dispatch = usePwaDispatch()  
  const theme = useTheme()
  const borderColor = theme.palette.primary.main
  const { selectedCurrency, currencies } = pwa

  return (<Box sx={{display: "flex"}}>
          { currencies.map((item: any, i: number) => {
            const {
              code,
              name,
              icon,
            } = item
            let isCurrent = false
            if (code === selectedCurrency) isCurrent = true
            return <Box
                    key={`locale_${i}`}
                    sx={{
                      pb:1,
                      borderBottom: isCurrent ? "1px solid " + borderColor : null,
                    }}>
                    <Tooltip title={name} >
                      <IconButton
                        size="small"
                        onClick={(e: React.MouseEvent) => {
                          e.preventDefault()
                          // @ts-ignore
                          if (!isCurrent) dispatch(setCurrency(code))
                        }}>
                        <Avatar 
                          sx={{width: 24, height: 24}}
                          src={icon} 
                          alt={name} />
                      </IconButton>
                    </Tooltip>
                </Box>
          })}
    </Box>
  )
}
