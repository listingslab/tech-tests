import React from "react"
import {
  Box,
  TextField,
  Button,
  CardContent,
  CardActions,
} from "@mui/material"
import {
  usePwaDispatch,
  setPwaKey,
  usePwaSelect,
  selectSearchStr,
  fetchFilms,
  Font,
} from "../"
export default function DirectorInput() {
    const dispatch = usePwaDispatch()
    const searchStr = usePwaSelect(selectSearchStr)
    return (<>
                <CardContent>
                    <TextField 
                      id="input-box"
                      placeholder="Enter director name"
                      value={searchStr}
                      autoFocus
                      sx={{background: "white"}}
                      fullWidth
                      variant="outlined"
                      onChange={(e) => {
                        e.preventDefault()
                        dispatch(setPwaKey({key: "searchStr", value: e.target.value}))
                      }}
                    />
                  </CardContent>
                  <CardActions>
                    <Button
                      sx={{mt:2, margin: "auto"}}
                      variant="contained"
                      onClick={() => {
                        dispatch(fetchFilms())
                      }}>
                        <Font color="white">Submit</Font>
                    </Button>
                  </CardActions>
                
          </>)
}

/*
<Grid container>
    <Grid item xs={12} md={6}>
        <Button
            sx={{mt:2}}
            fullWidth
            variant="contained"
            onClick={() => {
                
            }}>
            Buy Now
        </Button>
    </Grid>
</Grid>
*/