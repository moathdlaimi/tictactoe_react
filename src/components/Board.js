import { useState } from 'react';
import Square from './Square';

const Board = () => {
  const [value, setValue] = useState(Array(9).fill(null));

  const handelClick = (i) => {
    console.log(i);
    let newValue = value.slice();
    newValue[i] = 'X';
    console.log(`newValue = ${newValue}`);
    setValue(newValue);
  };

  const renderSquare = (i) => {
    return <Square value={value[i]} onClick={() => handelClick(i)} />;
  };
  const status = 'Next player: X';

  return (
    <div className="board">
      <div className="status">{status}</div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
};

export default Board;
