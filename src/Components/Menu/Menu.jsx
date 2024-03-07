import { useState } from 'react';
import { gyumolcsok } from '../../sample';
import './Menu.css';

const ROWS = 5, COLS = 4;







export default function Menu() {

    const [text, setText] = useState(gyumolcsok);

 

    function generateRowsJsx(row, rowIndex) {
        const cells = [];
        text.map((item, index) => {
            return(
                cells.push(
                    <td key={index} className="gomoku-cell">{row[index]}</td>
                )
            )
        });

        return(
            <tr key={rowIndex}>{cells}</tr>
        )
    }

    function generateBoardJsx() {
        const rows = [];
        text.map((item, index) => {
            return(
                rows.push(generateRowsJsx(item, index))
            )
        });

        return (
            <table className='gomoku-board'>
                <tbody>
                    {rows}
                </tbody>
            </table>
        )
    }



    return(
        <>
        <h3>This is the Menu Component</h3>
        {generateBoardJsx()}
        </>
    )
}