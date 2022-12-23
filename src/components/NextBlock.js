
import { useSelector } from 'react-redux'
import { brickcolors, shapes } from '../utils'
import { themes } from '../utils'


import GridSquare from './GridSquare'

// Draws the "next" block view showing the next block to drop
export default function NextBlock(props) {
  const game = useSelector((state) => state.game)
    const { theme } = game
    const nextShape = useSelector((state) => state.game[props.shape])
    const nextColor = game.nextColors?game.nextColors[props.shape]:null;
//    console.log(props.shape,game.nextColors[props.shape])
    const box = shapes[nextShape];
    const size = Array.isArray(box[0])?box[0].length:box.length;
    // console.log(box)
    const classBox = "next-block-container next-block-"+size;
    const colors = themes[theme].colors;
    // Map the block to the grid
    const grid = box.map((rowArray, row) => {
        if(Array.isArray(rowArray)){
            return rowArray.map((square, col) => {
                  let color = colors[square];
                  if(themes[theme].colored){
                    color = brickcolors[nextColor];
                }
                  if(square===0) color="none"
                return <GridSquare key={`${row}${col}`} color={color} />
            })
        }else{
            let color = colors[rowArray]
            if(rowArray===0) color="none"

            return <GridSquare key={`${row}${row}`} color={rowArray} />
        }

        
    })

    return (
        
        <div className={classBox}>
            {grid}
        </div>
    )
}