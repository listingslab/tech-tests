import {store} from "../"

export const useBestRatedFilm = () => {
    const films = store.getState().films
    if(!films.length) return null
    const film = films.reduce(function(prev, current) {
        return (prev.rating > current.rating) ? prev : current
    })
    return film.name
}
