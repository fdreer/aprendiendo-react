import {useState} from 'react';
import './App.css';
import confetti from 'canvas-confetti';
import Square from './components/Square';
import {TURNS} from './constants';
import {checkEndGame, checkWinner} from './logic/board';
import WinnerModal from './components/WinnerModal';
import {saveGameToStorage, resetGameStorage} from './logic/storage/index';

export default function App() {
  const [board, setBoard] = useState(() => {
    // si el localStorage es por fuera de la funcion
    // cada vez que se renderice el componente,
    // se obtiene el localStorage de vuelta --> ES LENTO!!!!
    const boardFromStorage = localStorage.getItem('board');
    return boardFromStorage
      ? JSON.parse(boardFromStorage)
      : Array(9).fill(null);
  });

  const [turn, setTurn] = useState(() => {
    const turnsFromStorage = localStorage.getItem('turn');
    return turnsFromStorage ? JSON.parse(turnsFromStorage) : TURNS.x;
  });

  // null es que no hay ganador, false un empate
  const [winner, setWinner] = useState(null);

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setTurn(TURNS.x);
    setWinner(null);
    resetGameStorage();
  };

  const updateBoard = (index) => {
    // no actualizamos el estado
    // si ya tiene algo en esa posicion
    if (board[index] || winner) return;

    // actualizar el tablero
    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);

    // cambiar el turno
    const newTurn = turn === TURNS.x ? TURNS.o : TURNS.x;
    setTurn(newTurn);

    saveGameToStorage({newBoard, newTurn});

    // revisar si hay ganador
    const newWinner = checkWinner(newBoard);
    if (newWinner) {
      confetti();
      setWinner(newWinner);
    } else if (checkEndGame(newBoard)) {
      setWinner(false); //empate
    }
  };

  return (
    <main className="board">
      <h1>TA TE TI</h1>
      <button onClick={resetGame}>Reset Game</button>
      <section className="game">
        {board.map((square, index) => (
          <Square key={index} index={index} updateBoard={updateBoard}>
            {square}
          </Square>
        ))}
      </section>

      <section className="turn">
        <Square isSelected={turn === TURNS.x}>{TURNS.x}</Square>
        <Square isSelected={turn === TURNS.o}>{TURNS.o}</Square>
      </section>

      <WinnerModal winner={winner} resetGame={resetGame} />
    </main>
  );
}
