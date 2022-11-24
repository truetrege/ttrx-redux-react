
import { useSelector, useDispatch } from 'react-redux'
import { cursorClick } from '../actions'

export default function GridSquare(props) {

  const dispatch = useDispatch()
  const classes = `grid-square color-${props.color}`
 
  return <div className={classes} onClick={(e)=>dispatch(cursorClick(props.row,props.col))} />
}