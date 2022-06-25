import { useState } from 'react';
import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'

export function TicTAcToe() {
  return <div>
    <h1>Fun game</h1>
    <Board />
  </div>;
}
function Board() {
  const INTIAL_BOARD=[  
     null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,];

  const [board, setBoard] = useState(INTIAL_BOARD);

  const [isXTurn, setIsXTurn] = useState(true);

  const decideWinner = (board) => {
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
      const [a, b, c] = lines[i];

      if (board[a] !== null && board[a] === board[b] && board[b] && board[c]) {
        console.log(lines[i], a, b, c);
        console.log(board);
        console.log("Winner", board[a]);
        return board[a];

      }
    }
    return null;
  };
  const winner = decideWinner(board);

  const handleClick = (index) => {
    console.log(index);

    if (!winner && !board[index]) {
      const boadCopy = [...board];
      boadCopy[index] = isXTurn ? "X" : "O";
      setBoard(boadCopy);
      setIsXTurn(!isXTurn);
    }
  };

  const restart = () => {
    setBoard(INTIAL_BOARD);
      setIsXTurn(true);
}

const { width, height } = useWindowSize();
  return (
    <div>
      {winner ? <Confetti width={width} 
      height={height} gravity={0.2} /> : null}
    <div className='board'>
      {board.map((val, index) => (
        <GameBox val={val} onPlayerCLick={() => handleClick(index)} />
      ))}
    </div>
      {winner ? <h2>Winner is : {winner}</h2> : null}
      <button onClick={restart}>Restart</button>

    </div>
     
  );
}
function GameBox({ val, onPlayerCLick }) {
  // const [val, setVal] = useState("")
  const styles = {
    color: val === "X" ? "green" : "red",
  };
  return (
    <div style={styles}
      onClick={onPlayerCLick}
      className='game-box'>
      {val}
    </div>
  );
}
