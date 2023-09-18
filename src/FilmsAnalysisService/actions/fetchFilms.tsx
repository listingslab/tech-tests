import axios from "axios"
import {
  store,
  setPwaKey,
} from "../"

const filmsEndpointURL = "https://app.codescreen.com/api/assessments/films";
const apiToken = "8c5996d5-fb89-46c9-8821-7063cfbc18b1"

export const fetchFilms = (): any =>
  async (dispatch: any) => {
    try {
        const {searchStr} = store.getState()
        const ep = `${filmsEndpointURL}?directorName=${searchStr}`
        dispatch(setPwaKey({key: "fetching", value: true}))
        axios.get(ep, {headers: { Authorization: `Bearer ${apiToken}` }})
            .then(function (response) {
                dispatch(setPwaKey({key: "films", value: response.data}))
                dispatch(setPwaKey({key: "fetching", value: false}))
            })
            .catch(function (error) {
                dispatch(setPwaKey({key: "error", value: error.toString()}))
                dispatch(setPwaKey({key: "fetching", value: false}))
            })
    } catch (error: any) {
      console.log("Action error: fetchFilms", error)
    }
}
