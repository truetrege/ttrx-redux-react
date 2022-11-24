
import { useSelector, useDispatch } from 'react-redux'
import { mouseMove } from '../actions'
import { mouseDown } from '../actions'
import { mouseUp } from '../actions'

export default function GridSquare(props) {

  const dispatch = useDispatch()
  const classes = `grid-square color-${props.color}`
 
  return <div className={classes} 
    onDragStart={(e)=>{e.preventDefault()}}
    onTouchStart={(e)=>{dispatch(mouseDown());dispatch(mouseMove(props.row,props.col));}}
    onTouchEnd={(e)=>dispatch(mouseUp())}
    onTouchMove={(e)=>dispatch(mouseMove(props.row,props.col))} 
    onMouseMove={(e)=>dispatch(mouseMove(props.row,props.col))} 
    onMouseDown={(e)=>{dispatch(mouseDown());dispatch(mouseMove(props.row,props.col));}}
    onMouseUp={(e)=>dispatch(mouseUp())}
  />
}