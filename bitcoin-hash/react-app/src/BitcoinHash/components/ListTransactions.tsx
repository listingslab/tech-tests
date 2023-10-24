import * as React from "react"
import moment from "moment"
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box,
  LinearProgress,
} from "@mui/material"
import { 
  Icon,
  Font,
  usePwaSelect,
  // usePwaDispatch,
  // updateTransactions,
  selectPWA,
} from ".."

export default function ListTransactions() {
  // const dispatch = usePwaDispatch()
  const [expanded, setExpanded] = React.useState<string | false>("transaction-acc")

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false)
    }

  const pwa = usePwaSelect(selectPWA)
  const {transactions, searching, lastUpdate} = pwa

  return (
    <Box sx={{mt:1, mb: "90px"}}>
      <Accordion expanded={expanded === "transaction-acc"} onChange={handleChange("transaction-acc")}>
      {searching ? <LinearProgress color="secondary"/> : <Box sx={{height: 4}} /> }
        <AccordionSummary
          expandIcon={<Icon icon="expand" />}
          aria-controls="transactions-content"
          id="transactions-header"
        >
          <Box sx={{ flexShrink: 1, mr: 2 }}>
            <Icon icon="transaction" />
          </Box>
          <Box sx={{ mt:-1 }}>
            <Font variant="title">
                Last 50 Blockchain Transactions
            </Font>
            <Font variant="small">
              Updated {moment(lastUpdate).fromNow()}
            </Font>
          </Box>
        </AccordionSummary>
        <AccordionDetails>
          <pre style={{fontSize:10}}>
            {JSON.stringify(transactions, null, 2)}
          </pre>
        </AccordionDetails>
      </Accordion>
    </Box>
  )
}
