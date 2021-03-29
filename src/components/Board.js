import { useState } from 'react';
import { Square } from './Square';

const Board = () => {
  const [value, setValue] = useState(Array(9).fill(null));
  const [turn, setTurn] = useState(true);
  console.log(turn);

  const handelClick = (i) => {
    let newValue = value.slice();
    if (calculateWinner(newValue) || newValue[i]) {
      return;
    }
    newValue[i] = turn ? 'X' : 'O';
    console.log(`newValue = ${newValue}`);
    console.log(`i is ${i}`);
    setValue(newValue);
    setTurn(!turn);
  };
  const calculateWinner = (v) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      // console.log(`lines[i] = ${lines[i]}`);
      const [a, b, c] = lines[i];
      if (v[a] && v[a] === v[b] && v[a] === v[c]) {
        return v[a];
      }
    }
    return null;
  };

  const renderSquare = (i) => {
    return <Square value={value[i]} onClick={() => handelClick(i)} />;
  };
  const winner = calculateWinner(value);
  let status;
  if (winner) {
    status = `Winner is: ${winner}`;
  } else {
    status = `Next Player is: ${turn ? 'X' : 'O'}`;
  }
  // const status = `Next player: ${turn ? 'X' : 'O'}`;

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
