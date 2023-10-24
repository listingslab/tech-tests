import * as React from 'react'
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box,
} from "@mui/material"
import { 
  Icon,
  Font,
} from ".."

export default function AccordionTestData() {
  const [expanded, setExpanded] = React.useState<string | false>(false)

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false)
    }

  return (
    <Box sx={{mt:1}}>
      <Accordion expanded={expanded === 'pimoroni-ad'} onChange={handleChange('pimoroni-ad')}>
        <AccordionSummary
          expandIcon={<Icon icon="expand" />}
          aria-controls="pimorni-content"
          id="pimorni-header"
        >
          <Box sx={{ flexShrink: 1, mr: 2 }}>
            {/* <Avatar src={"/svg/logo.svg"} /> */}
          </Box>
          <Box sx={{ }}>
            <Font variant="description">
              Test data
            </Font>
          </Box>
        </AccordionSummary>

        <AccordionDetails>
          <pre style={{fontSize:10}}>
            Test transaction# 2892bc7fb0c2efe34f655f659bffb4d694ffc33f824cb0752da5ecb2d2ff39dc
          </pre>
          <pre style={{fontSize:10}}>
            Test address# bc1qgyrmw4ncp2rgkatz8p8uq86pls3xpk6u9kzmc7
          </pre>
        
        </AccordionDetails>
      </Accordion>
    </Box>
  )
}
