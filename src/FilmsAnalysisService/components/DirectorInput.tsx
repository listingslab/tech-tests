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
                <CardContent sx={{display: "flex"}}>
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
                  <Box sx={{display: "flex"}}>
                    <Button
                      sx={{boxShadow: "none", ml:1}}
                      variant="contained"
                      onClick={() => {
                        dispatch(fetchFilms())
                      }}>
                        <Font color="white" variant="title">
                          Submit
                        </Font>
                    </Button>
                    </Box>
                  </CardContent>
                
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