import React from "react";
import { directors } from "../data";

function Directors() {
  return <div>{/*{code here}*/}
  <h1>Directors Page</h1>
  {directors.map(d => {return <div key={d.name}>{d.name}
   <ul> {d.movies.map(m => {return <li key={m}>{m}</li>})} </ul>
  </div>})}
  </div>;
}

export default Directors;
