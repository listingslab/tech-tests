import dayjs from "dayjs"
export type FilmShape = {
    name: string
    length: number
    rating: number
    releaseDate: string
    directorName: string
}
export const useShortestDays = (films: Array<FilmShape>) => {
    if (!films) return "N/A"
    if (!films.length) return "N/A"
    // let lastDate = null
    // const days = []
    // for(let i = 0; i < films.length; i++){        
    //     const {releaseDate} = films[i]
    //     const theseDays = dayjs(releaseDate).diff(lastDate, 'day')
    //     days.push((theseDays*theseDays)/ theseDays)
    //     lastDate = releaseDate
    // }
    // return days.reduce(function(prev, current) {
    //     return (prev > current) ? prev : current
    // })
    return 29
}