import { PaletteMode, AlertColor } from "@mui/material"

export type PwaReduxShape = {
  started: boolean
  lastUpdate: number
  transactions: Array<TransactionShape>
  theme: ThemeShape
  notifyer: NotifyerShape|null
  searching: boolean
  searchStr: string
  searchResults: any
  selectedCurrency: string
  currencies: Array<CurrencyShape>
  persisted: boolean
}

export type TransactionShape = {
  hash: any
  received?: any
  status?: any
  size?: any
  confirmations?: any
  input?: any
  output?: any
  fees?: any
}

export type AddressShape = {
  confirmedTransactions: any
  received: any
  spent: any
  unspent: any
  balance: any
}

export type NotifyerShape = {
  severity: AlertColor
  message: string
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


