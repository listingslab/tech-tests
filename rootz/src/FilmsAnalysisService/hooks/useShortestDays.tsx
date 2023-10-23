import {store} from "../"
import dayjs from "dayjs"

/*
In this hook:

We first ensure that the array contains at least two numbers.
We sort the array in ascending order using the sort method.
We iterate through the sorted array, calculating the difference between adjacent elements and keeping track of the smallest difference encountered so far.
Finally, we return the smallest difference found.
*/

export const useShortestDays = () => {
    const films = store.getState().films
    if(!films.length) return null
    const dates: Array<number> = []
    for(let i = 0; i < films.length; i++){ 
        dates.push(dayjs(films[i].releaseDate).unix())
    }

    function findSmallestDifference(arr: number[]): number {
        if (arr.length < 2) {
          throw new Error('Array should contain at least two numbers.');
        }
        // Sort the array in ascending order
        arr.sort((a, b) => a - b);
        let minDifference = Infinity;
        for (let i = 1; i < arr.length; i++) {
          const difference = arr[i] - arr[i - 1];
          if (difference < minDifference) {
            minDifference = difference;
          }
        }
        return minDifference;
      }
      
      const smallestDifference = findSmallestDifference(dates)
      return Math.floor(smallestDifference/86400)

}
