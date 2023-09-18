export type FilmShape = {
    name: string
    length: number
    rating: number
    releaseDate: string
    directorName: string
}
export const useLongestFilm = (films: Array<FilmShape>) => {
    if (!films) return "N/A"
    if (!films.length) return "N/A"
    return films.reduce(function(prev, current) {
        return (prev.length > current.length) ? prev : current
    })
}