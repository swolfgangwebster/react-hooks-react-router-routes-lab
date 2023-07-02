import React from "react";
import { actors } from "../data";

function Actors() {
  return <div>{/*{code here}*/}
  <h1>Actors Page</h1>
  {actors.map(d => {return <div key={d.name}>{d.name}
   <ul> {d.movies.map(m => {return <li key={m}>{m}</li>})} </ul>
  </div>})}
  </div>;
}

export default Actors;
