import {store} from "../"

export const useLongestFilm = () => {
    const films = store.getState().films
    if(!films.length) return null
    const film = films.reduce(function(prev, current) {
        return (prev.length > current.length) ? prev : current
    })
    return film.length
    return null
}