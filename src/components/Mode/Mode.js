import React from 'react';
import './Mode.css';

const Mode = ({ fields, field, onChange, onStartClick }) => {

  return (
    <div className="Mode">
      <select onChange={onChange} >
        <option value="0">Pick mode</option>
        {Object.keys(fields).map((f) => <option key={f} value={fields[f].field}>{f}</option>)}
      </select>
      <button onClick={onStartClick} >START</button>
    </div>
  )
};


export default Mode;
