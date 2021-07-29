import React from 'react';
import './Board.css';

const Board = ({ cells, setCells }) => {
  const length = Math.sqrt(cells.length);
  const onMouseOverCell = (e) => {
    const index = e.target.getAttribute('data-index');
    const newCells = [...cells];
    newCells[index] = !newCells[index];
    setCells(newCells);
  }
  return (
    <div className="board">
      {cells.map((c, i) => {
        return (
          <>
            {(i % length == 0) && <div />}
            <span onMouseOver={onMouseOverCell} data-index={i} className={`cell ${(c ? 'hovered' : '')}`}>{c}</span>
          </>
        )
      })
      }
    </div>
  )
};

export default Board;
