import react from 'react';
import Square from './Square';

const Board = () => {
  // const renderSquare(i) {
  //   return <Square />;
  // }

  const status = 'Next player: X';

  return (
    <div className="board">
      <div className="status">{status}</div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
        {/* {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)} */}
      </div>
    </div>
  );
};

export default Board;
