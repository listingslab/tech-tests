import React from "react"
import {
Avatar,
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
  Grid,
} from "@mui/material"

export default function DirectorInput() {

  return (<>
            <Box sx={{m:1}}>
                <CardHeader 
                    avatar={<Avatar src={"/png/pimoroni/logo.png"} />}
                    // title={Pimoroni EnviroGrow}
                    subheader={"£39"}
                />
                <CardContent>
                    <Grid container>
                        <Grid item xs={12} md={6}>
                            <CardMedia 
                                component={"img"}
                                height={200}
                                src={"/png/pimoroni/board.webp"}
                                alt={"pimoroni"}
                            />
                        </Grid>
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
                </CardContent>
            </Box>
          </>)
}
