import * as React from 'react'
import { 
  Avatar,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box,
  Button,
  Grid,
  CardMedia,
} from "@mui/material"
import { 
  Icon,
  Font,
} from ".."

export default function AccordionAdvert() {
  const [expanded, setExpanded] = React.useState<string | false>(false)

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false)
    }

  return (
    <Box sx={{m:1}}>
      <Accordion expanded={expanded === 'pimoroni-ad'} onChange={handleChange('pimoroni-ad')}>
        <AccordionSummary
          expandIcon={<Icon icon="expand" />}
          aria-controls="pimorni-content"
          id="pimorni-header"
        >
          <Box sx={{ flexShrink: 1, mr: 2 }}>
            <Avatar src={"/png/pimoroni/logo.png"} />
            
          </Box>
          <Box sx={{ mt: 1.5 }}>
            <Font variant="description">
              Kingmakers Campaigns
            </Font>
          </Box>
        </AccordionSummary>

        <AccordionDetails>

          <Grid container>

            <Grid item xs={12} md={4}>
              <CardMedia 
                  component={"img"}
                  height={150}
                  src={"/png/kingmakers.png"}
                  alt={"kingmakers"}
              />
            </Grid>

            <Grid item xs={12} md={8}>

              <Font>
                Engaging and rewarding Africa through unique 
                sports &amp; digital entertainment experiences
              </Font>

              <Button
                sx={{mt:2}}
                variant="contained"
                onClick={() => {
                    window.open("https://kingmakers.com", "_blank")
                }}>
                kingmakers.com
              </Button>

            </Grid>
          </Grid>
        
        </AccordionDetails>
      </Accordion>
    </Box>
  )
}
