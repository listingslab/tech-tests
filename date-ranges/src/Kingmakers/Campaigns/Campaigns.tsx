import React from "react"
import dayjs from "dayjs"
import isBetween from "dayjs/plugin/isBetween"
import {
  CampaignsShape,
} from "../types"
import {
  styled,
  IconButton,
  Avatar,
  Card,
  CardHeader,
  TableCell,
  TableRow,
  TableContainer,
  Table,
  TableBody,
  FormControl,
  Box,
  InputAdornment,
  Input,
} from "@mui/material"
import { tableCellClasses } from '@mui/material/TableCell'
import {
  Calendar,
  SelectDate,
  DeselectDate, 
  NoCampaigns,
  usePwaSelect,
  usePwaDispatch,
  updateSearchStr,
  selectPWA,
  Font,
  Icon,
  TableInfo,
} from ".."

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.primary.main,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}))

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}))

export default function Campaigns() {
  const pwa = usePwaSelect(selectPWA)
  const dispatch = usePwaDispatch()
  const {campaigns, searchStr, fromDate, toDate} = pwa
  function createData(
    id: number,
    name: string,
    startDate: string,
    endDate: string,
    budget: number,
  ) {
    return { id, name, startDate, endDate, budget}
  }
  const rows: CampaignsShape = []
  const filteredCampaigns: CampaignsShape  = []
  for (let i=0; i<campaigns.length; i++){
      let inc = true
      let excludeByDate = false
      if (searchStr && searchStr !== "") {
        inc = false
        if (campaigns[i].name?.toLocaleLowerCase().includes(searchStr.toLocaleLowerCase())){
          filteredCampaigns.push(campaigns[i])
        }
      }
      if (fromDate){
        if (!dayjs(campaigns[i].startDate).isBefore(dayjs(fromDate))) excludeByDate = true
        if (!dayjs(campaigns[i].endDate).isBefore(dayjs(fromDate))) excludeByDate = true
      }
      if (toDate){
        if (!dayjs(campaigns[i].startDate).isBefore(dayjs(toDate))) excludeByDate = true
        if (!dayjs(campaigns[i].endDate).isBefore(dayjs(toDate))) excludeByDate = true
      }
      if (inc && !excludeByDate){
        filteredCampaigns.push(campaigns[i])
      }
  }

  for (let j=0; j<filteredCampaigns.length; j++){
    let visible = true
    const { id, name, startDate, endDate, budget,
    } = filteredCampaigns[j]
    if (visible){
      rows.push(createData(
        id,
        name, 
        startDate,
        endDate,
        budget,
      ))
    }
  }
  const hasCampaigns = rows.length

  return (<>
            

              <CardHeader
                title={<Box sx={{mt:0.5}}><Font variant="giant">
                          KM Test Case
                        </Font></Box>}
                avatar={<IconButton
                          color="primary"
                          onClick={(e: React.MouseEvent) => {
                            e.preventDefault()
                            window.open("https://github.com/listingslab/km-test-case", "_blank")
                          }}>
                          <Avatar src="/png/logo192.png" alt={"KM Test Case"}/>
                        </IconButton>
                }/>
              
                <Calendar />

                <Box sx={{display: "flex"}}>
                  <Box sx={{m:1.5}}>
                    <SelectDate mode="from"/>
                    <DeselectDate mode="from"/>
                  </Box>
                  <Box sx={{m:1.5}}>
                    <SelectDate mode="to"/>
                    <DeselectDate mode="to"/>
                  </Box>
                  <Box sx={{ '& > :not(style)': { m: 2 } }}>
                    <FormControl variant="standard">
                      <Input
                        value={searchStr}
                        placeholder="Name"
                        onChange={(t: any) => {
                          dispatch(updateSearchStr(t.target.value))
                        }}
                        startAdornment={<>
                          <InputAdornment position="start" sx={{mr:2}}>
                              <IconButton
                                disabled={searchStr === "" ? true : false}
                                onClick={() => dispatch(updateSearchStr(""))}
                                onMouseDown={() => dispatch(updateSearchStr(""))}
                                edge="end">
                                <Icon icon={searchStr !== "" ? "close" : "filter"} />
                              </IconButton>
                          </InputAdornment>
                        </>
                        }
                      />
                    </FormControl>
                  </Box>
              </Box>

              <Card sx={{m:2}}>
                
                {!hasCampaigns ? <NoCampaigns /> : 
                
                <TableContainer component={"div"}>
                  <Table sx={{ minWidth: 500 }} aria-label="customized table">
                    <TableInfo />
                    <TableBody>
                      {rows.map((row, i: number) => {
                        const {startDate, endDate} = row
                        const op: boolean = false
                        if (op) console.log(isBetween)
                        const active = dayjs().isBetween(startDate, dayjs(endDate))
                        return <StyledTableRow key={`campaign_${i}`}>
                                  <StyledTableCell component="th" scope="row">
                                    <Font>{row.name}</Font>
                                  </StyledTableCell>
                                  <StyledTableCell align="left">
                                    <Font>{row.startDate ? dayjs(row.startDate).format("DD/MM/YY") : null}</Font>
                                  </StyledTableCell>
                                  <StyledTableCell align="left">
                                    <Font>{row.endDate ? dayjs(row.endDate).format("DD/MM/YY") : null}</Font>
                                  </StyledTableCell>
                                  <StyledTableCell align="left">
                                    <Icon icon={active ? "tick" : "close" } 
                                          color={active ? "success" : "warning" } />
                                  </StyledTableCell>
                                  <StyledTableCell align="right">
                                    <Font align="right">{row.budget ? <>${Math.floor(row.budget/1000)}K</> : null }</Font>
                                  </StyledTableCell>
                                </StyledTableRow>
                              })}
                    </TableBody>
                  </Table>
                </TableContainer>
              }
            </Card>
          </>)
}
