import { 
  PaletteMode, 
  AlertColor,
} from "@mui/material"

export type CampaignShape = {
  id: number
  name?: any
  startDate?: any
  endDate?: any
  budget?: any
  Budget?: any
}
export type CampaignsShape =Array<CampaignShape>

export type PwaReduxShape = {
  started: boolean
  notifyer: NotifyShape|null
  data?: any
  lastUpdated?: any
  persisted?: boolean
  theme: ThemeShape
  searchStr: string
  calendarOpen: boolean,
  calendarMode: string|null,
  fromDate: any
  toDate: any
  campaigns: CampaignsShape
}

export type NotifyShape = {
  severity: AlertColor
  message?: string
}

export type SearchShape = {
  type?: string
}

export type CurrencyShape = {
  code: string
  name: string
  icon: string
}

export type ThemeShape = {
  title: string
  primaryColor: string
  secondaryColor: string
  font: string
  mode: PaletteMode
}

export interface KeyValueShape {
  key: string
  value: any
}
