import React from "react"
import {
  Grid,
  CardContent,
  Paper,
} from "@mui/material"
import {
  Font,
} from "../"
export default function Results() {
    let shortestDays = "N/A"
    return (<>
                <CardContent sx={{display: "flex"}}>
                  <Grid container spacing={1}>
                    <Grid item xs={12} md={6}>
                      <Paper square sx={{background: "white", p:2,}}>
                        <Font variant="small">Shortest days between releases</Font>
                        <Font variant="title">
                          {shortestDays}
                        </Font>
                      </Paper>
                    </Grid>
                    
                  </Grid>
                </CardContent>  
          </>)
}
