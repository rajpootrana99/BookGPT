import React from "react"
import { NetflixCard } from "./components/NetflixCard"
import movies from "./api/movies.json"
// import "./App.css"

import styles from "./components/NetflixCard.module.css"
import { EventHandling } from "./components/EventHandling"

export const App = () => {
  return (
    <section className="container">
      <h1 className={styles['card-heading']}>List of Best Netflix Series</h1>
      <ul className="grid grid-three--cols">
        {movies.map((movie) => {
            return (
              <NetflixCard key={movie.id} movie={movie} />
            )
        })}
      </ul>
      <EventHandling />
    </section>
  )
}

