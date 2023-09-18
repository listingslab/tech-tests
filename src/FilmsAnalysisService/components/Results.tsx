import React from "react"
import {
  Grid,
  CardContent,
  Paper,
} from "@mui/material"
import {
  Font,
  useShortestDays,
  useBestRatedFilm,
  useLongestFilm,
  useAverageRating,
} from "../"
export default function Results() {
    const shortestDays = useShortestDays()
    const bestRatedFilm = useBestRatedFilm()
    const longestFilm = useLongestFilm()
    const averageRating = useAverageRating()
    return (<>
              <CardContent sx={{display: "flex"}}>
                <Grid container spacing={1}>

                  <Grid item xs={12} md={6}>
                    <Paper square sx={{background: "white", p:2, boxShadow:"none"}}>
                      <Font variant="small">
                        Best rated film
                      </Font>
                      <Font variant="giant">
                        <div id="best-rated-film">{bestRatedFilm || "N/A"}</div>
                      </Font>
                    </Paper>
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <Paper square sx={{background: "white", p:2, boxShadow:"none"}}>
                      <Font variant="small">
                        Longest Film
                      </Font>
                      <Font variant="giant">
                        <div id="longest-film">{longestFilm || "N/A"}</div>
                      </Font>
                    </Paper>
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <Paper square sx={{background: "white", p:2, boxShadow:"none"}}>
                      <Font variant="small">
                        Average rating
                      </Font>
                      <Font variant="giant">
                        <div id="average-rating">{averageRating || "0"}</div>
                      </Font>
                    </Paper>
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <Paper square sx={{background: "white", p:2, boxShadow:"none"}}>
                      <Font variant="small">Shortest days between releases</Font>
                      <Font variant="giant">
                        <div id="shortest-days">{shortestDays || "N/A"}</div>
                      </Font>
                    </Paper>
                  </Grid>
                </Grid>
              </CardContent>  
          </>)
}
