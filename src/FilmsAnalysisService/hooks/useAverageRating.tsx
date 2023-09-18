import {store} from "../"

export const useAverageRating = () => {
    const films = store.getState().films
    if(!films.length) return null
    let total = 0
    for(let i = 0; i < films.length; i++){        
        const {rating} = films[i]
        total += rating
    }
    return Math.round(total/films.length * 10) / 10
}