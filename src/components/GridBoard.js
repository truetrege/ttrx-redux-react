import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import GridSquare from './GridSquare'
import { brickcolors, themes } from '../utils'
import { checkEndGame, mouseUp } from '../actions'

// Represents a 10 x 18 grid of grid squares
export default function GridBoard(props) {
  const dispatch = useDispatch()
  const game = useSelector((state) => state.game)
  const { grid, theme } = game

  const gameOver = useSelector((state) => state.game.gameOver)
  const colors = themes[theme].colors;
  const backgroundColor = 'grid-board brick b-7-11 b-'+ colors[0]; 



  const gridSquares = grid.map((rowArray, row) => {

    let full = rowArray.every((current) => current === 2);
    // map columns
    return rowArray.map((square, col) => {

     

      let color = colors[square];
      if(square > 2){
        if(themes[theme].colored){

          color = brickcolors[square];
        }
      }

      if (full) {
        if (themes[theme].colors[3]) {
          color += ' ' + themes[theme].colors[3];
        } else {
          color += ' full';
        }

      }

      const k = row * grid[0].length + col;

      // Generate a grid square
      return <GridSquare
        key={k}
        row={row}
        col={col}
        color={color} 
        
        />
    })
  })

  return (
    <div className={backgroundColor}
      // onTouchMove={(e)=>{console.log('-',e);}}
      // onTouchMoveCapture={(e)=>{console.log('+',e);}}
      onMouseLeave={(e) => dispatch(mouseUp())}>
      {gridSquares}
    </div>
  )
}