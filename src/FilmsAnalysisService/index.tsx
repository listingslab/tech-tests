import {
    store,
    persistor,
} from "./redux/store"
import {WrapRedux} from "./redux/WrapRedux"
import {
    setPwaKey,
} from "./redux/pwaReducer"
import Results from "./components/Results"
import DirectorInput from "./components/DirectorInput"
import {useAverageRating} from "./hooks/useAverageRating"
import {useBestRatedFilm} from "./hooks/useBestRatedFilm"
import {useLongestFilm} from "./hooks/useLongestFilm"
import {usePwaDispatch} from "./hooks/usePwaDispatch"
import {usePwaSelect} from "./hooks/usePwaSelect"
import {useShortestDays} from "./hooks/useShortestDays"
import MuiTheme from "./theme/MuiTheme"
import {Font} from "./theme/Font"
import Icon from "./theme/Icon"
import {resetRedux} from "./actions/resetRedux"
import {fetchFilms} from "./actions/fetchFilms"
import {
    selectPWA, 
    selectTheme, 
    selectSearchStr,
    selectFilms,
} from "./redux/pwaReducer"

export {
    store,
    persistor,
    setPwaKey,
    selectPWA,
    selectTheme,
    selectSearchStr,
    selectFilms,
    WrapRedux,
    DirectorInput,
    Results,
    usePwaSelect,
    usePwaDispatch,
    useShortestDays,
    useAverageRating,
    useBestRatedFilm,
    useLongestFilm,
    MuiTheme,
    Font,
    Icon,
    resetRedux,
    fetchFilms,
}
