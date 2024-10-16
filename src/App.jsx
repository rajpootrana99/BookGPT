import React from "react"
import { NetflixCard } from "./components/NetflixCard"
import movies from "./api/movies.json"
import "./App.css"

export const App = () => {
  return (
    <section className="container">
      <h1 className="card-heading">List of Best Netflix Series</h1>
      <ul className="grid grid-three--cols">
        {movies.map((movie) => {
            return (
              <NetflixCard key={movie.id} movie={movie} />
            )
        })}
      </ul>
    </section>
  )
}

