import { useState } from 'react';
import './GameBoard.css';

const ROWS = 10, COLL = 10;

export default function GameBoard() {

    const [board, setBoard] = useState(generateInitialBoard())

    function generateInitialBoard()  {

        const board = [];

        for (let i = 0; i < ROWS; i++) {
            board.push([]);
            for (let j = 0; j < COLL; j++) {
                board[i].push(null);
            }
        }

        return board;
    }


    function generateRowJsx(row, rowIndex) {
        const cells = [];
        
        board.map((item, key) => {
            return(
                cells.push(
                    <td key={key} className='gomoku-cell'>
                        {row}
                    </td>
                )
            )
        })

        return (
            <tr key={rowIndex}>
                {cells}
            </tr>
        )
    }


    function generateBoardJsx() {
        const rows = [];
        board.map((item, key) => {
            return (
                rows.push(generateRowJsx(item, key))
            )
        })

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