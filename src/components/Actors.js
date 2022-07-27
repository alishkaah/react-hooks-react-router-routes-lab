import React from "react";
import { actors } from "../data";

function Actors() {
  // return <div>{/*{code here}*/}</div>;
  const ActorsList = actors.map((actor) => {
    return (
      <div key={actor.name}>
        {actor.name}
        <ul>
        {actor.movies.map((movie) => {
          return (
            <li key={movie}>{movie}</li>
          )
        })}
        </ul>
      </div>
    )
  })
  return (
    <div>
      <h1>Actors Page</h1>
      {ActorsList}
    </div>
  )
}

export default Actors;
