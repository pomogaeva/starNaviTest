import './App.css';
import Board from './components/Board/Board';
import Mode from './components/Mode/Mode';
import Results from './components/Results/Results';
import { useEffect, useState } from 'react';

function App() {
  const [field, setField] = useState(0);
  const [fields, setFields] = useState({});
  const [cells, setCells] = useState([]);

  useEffect(() => {
    fetch('http://demo1030918.mockable.io/').then((res) => {
      return res.json();
    }).then((res) => {
      setFields(res);
    })
  }, [fields]);

  const generateCells = () => {
    const cellsArr = [];
    for (let i = 0; i < field * field; i++) {
      cellsArr.push(false);
    }
    setCells(cellsArr);
  }

  const onFieldChange = (e) => {
    const f = e.target.value;
    setField(f);
  }

  const onStartClick = () => {
    generateCells();
  }

  return (
    <div className="Game" >
      <div>
        <Mode onStartClick={onStartClick} fields={fields} field={field} onChange={onFieldChange} />
        <Board setCells={setCells} cells={cells} />
      </div>

      <Results cells={cells} field={field} />
    </div>
  );
}

export default App;
