import { useState } from 'react';
import './GameBoard.css';

const ROWS = 10, COLS = 10;

export default function GameBoard() {

    const [board, setBoard] = useState(generateInitialState());


    function generateInitialState() {
        const board = [];
        for(let i = 0; i < ROWS; i++) {
            board.push([]);
            for(let j = 0; j < COLS; j++) {
                board[i].push(null);
            }
        }
        return board;
    }

    const handleCellClick = (row, col) => {
        if(board[row][col] !== null) return;
        const newBoard = JSON.parse(JSON.stringify(board));
        newBoard[row][col] = 'x';
        setBoard(newBoard);
    }



    function generateRowsJsx(row, rowIndex) {
        const cells = [];
        board.map((item, key) => {
            let classList = "gomoku-cell";
            if(row[key] === null) {
                classList += " empty";
            }
            return (
                cells.push(<td 
                            key={key}
                            className={classList}
                            onClick={() => handleCellClick(rowIndex, key)}
                            >
                                {row[key]}
                            </td>)
            )
        });

        return (
            <tr key={rowIndex}>{cells}</tr>
        )
    }


    function generateBoardJsx() {
        const rows = [];
        board.map((item, key) => {
            return(
                rows.push(generateRowsJsx(item, key))
            )
        });

        return (
            <table className="gomoku-board">
                <tbody>
                    {rows}
                </tbody>
            </table>
        )
    }
  



    return(
        <>
            <h3>Thi is the Game Board Component</h3>
            {generateBoardJsx()}
        </>
    )
}