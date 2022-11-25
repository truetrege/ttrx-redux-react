
import { useSelector } from 'react-redux'
import { shapes } from '../utils'

import GridSquare from './GridSquare'

// Draws the "next" block view showing the next block to drop
export default function NextBlock(props) {

    const nextShape = useSelector((state) => state.game[props.shape])
   
    const box = shapes[nextShape];
    const size = Array.isArray(box[0])?box[0].length:box.length;
    // console.log(box)
    const classBox = "next-block-container next-block-"+size;

    // Map the block to the grid
    const grid = box.map((rowArray, row) => {
        if(Array.isArray(rowArray)){
            return rowArray.map((square, col) => {
                return <GridSquare key={`${row}${col}`} color={square} />
            })
        }else{
            return <GridSquare key={`${row}${row}`} color={rowArray} />
        }

        
    })

    return (
        
        <div className={classBox}>
            {grid}
        </div>
    )
}