import React from "react";
import { movies } from "../data";

function Movies() {
  return <div>{/*{code here}*/}
  <h1>Movies Page</h1>
  {movies.map(m => {return <div key={m.title}><h1>{m.title}</h1>
    <h2>{m.time}</h2>
    <ul>{m.genres.map(b=>{return <li key={b}>{b}</li>})}</ul></div>})}
  </div>;
}

export default Movies;
