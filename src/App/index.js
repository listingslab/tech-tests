import React from "react";

import {usePwaDispatch} from "../hooks/usePwaDispatch"
import {usePwaSelect} from "../hooks/usePwaSelect"
import {useBestRatedFilm} from "../hooks/useBestRatedFilm"
import {useAverageRating} from "../hooks/useAverageRating"
import {useLongestFilm} from "../hooks/useLongestFilm"
import {useShortestDays} from "../hooks/useShortestDays"

import {selectPWA} from "../redux/pwaReducer"
import {fetchFilms} from "../redux/fetchFilms"
import {setPwaKey} from "../redux/pwaReducer" 

export default function App() {
  const dispatch = usePwaDispatch()
  const pwa = usePwaSelect(selectPWA)
  const {directorNameStr, films} = pwa
  const bestRatedFilm = useBestRatedFilm(films)
  const averageRating = useAverageRating(films)
  const longestFilm = useLongestFilm(films)
  const shortestDays = useShortestDays(films)

  return (<>
          <form 
            id={"input-form"}
            onSubmit={(e) => {
              e.preventDefault()
              dispatch(fetchFilms())
            }}
          >
            <p>Films Analysis Service
              <input 
                id="input-box"
                placeholder="Enter director name"
                value={directorNameStr}
                className="director-name-input-box"
                onChange={(e) => {
                  e.preventDefault()
                  dispatch(setPwaKey({key: "directorNameStr", value: e.target.value}))
                }}
              />
              <button 
                id="submit-button" 
                className="submit-button">
                SUBMIT
              </button>              
          </p>
          
          </form>

                Best rated film
                <div id="best-rated-film" className="">
                  {bestRatedFilm.name || "N/A"}
                </div>

                <div style={{height:20}} />

                Longest Film
                <div id="longest-film">
                  {`${longestFilm.length} mins` || "N/A"}
                </div>
                
                <div style={{height:20}} />
                
                Average rating
                <div id="average-rating">
                  {averageRating || 0}
                </div>

                <div style={{height:20}} />
          
                Shortest days between releases
                <div id="shortest-days">
                  {shortestDays || "N/A"}
                </div>          
          
      </>)
}
