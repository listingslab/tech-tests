export type FilmShape = {
    name: string
    length: number
    rating: number
    releaseDate: string
    directorName: string
}
export const useAverageRating = (films: Array<FilmShape>) => {
    if (!films) return 0
    if (!films.length) return 0
    let total = 0
    for(let i = 0; i < films.length; i++){        
        const {rating} = films[i]
        total += rating
    }
    return Math.round(total/films.length * 10) / 10
}