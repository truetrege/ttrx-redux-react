import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import GridSquare from './GridSquare'
import { shapes } from '../utils'
import { mouseUp } from '../actions'

// Represents a 10 x 18 grid of grid squares
export default function GridBoard(props) {
  const dispatch = useDispatch()
    const game = useSelector((state) => state.game)
    const { grid, shape, rotation, x, y, isRunning, speed } = game


  const gridSquares = grid.map((rowArray, row) => {
    // map columns
    return rowArray.map((square, col) => {
      
      let color = square
      
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
        <div className='grid-board' onMouseLeave={(e)=>dispatch(mouseUp())}>
            {gridSquares}
        </div>
    )
}