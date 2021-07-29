import React from 'react';
import './Results.css';

const Results = ({ cells, field }) => (
  <div className="results">
    <h2>Hover squares</h2>
    {cells.map((c, i) => c && <div key={i}>row {Math.floor(i / field) + 1} col {(i % field) + 1} </div>)}
  </div>
);

export default Results;
