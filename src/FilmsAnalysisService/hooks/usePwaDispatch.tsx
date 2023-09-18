import type {AppDispatch} from "../redux/store"
import { useDispatch } from "react-redux"
export const usePwaDispatch = () => useDispatch<AppDispatch>()
