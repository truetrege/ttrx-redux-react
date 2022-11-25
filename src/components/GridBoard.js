import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import GridSquare from './GridSquare'
import { themes } from '../utils'
import { checkEndGame, mouseUp } from '../actions'

// Represents a 10 x 18 grid of grid squares
export default function GridBoard(props) {
  const dispatch = useDispatch()
    const game = useSelector((state) => state.game)
    const { grid,theme } = game

    const gameOver = useSelector((state) => state.game.gameOver)
  

  const gridSquares = grid.map((rowArray, row) => {
    // map columns
    return rowArray.map((square, col) => {
      
      const colors = themes[theme].colors;

      let color = colors[square]
      
      const k = row * grid[0].length + col;

      // Generate a grid square
      return <GridSquare 
              key={k}
              row={row}
              col={col}
              color={color} />
    })
  })

    return (
        <div className='grid-board'  onMouseLeave={(e)=>dispatch(mouseUp())}>
            {gridSquares}
        </div>
    )
}