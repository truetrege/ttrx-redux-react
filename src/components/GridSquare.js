
import { useSelector, useDispatch } from 'react-redux'
import { mouseMove } from '../actions'
import { mouseDown } from '../actions'
import { mouseUp } from '../actions'

export default function GridSquare(props) {

  const dispatch = useDispatch()
  
  const classes = `grid-square brick b-3x3 b-${props.color}`
 
// console.log(this)}

  return <div className={classes} row={props.row} col={props.col}
    onDragStart={(e)=>{e.preventDefault()}}
    onTouchStart={(e)=>{dispatch(mouseDown());dispatch(mouseMove(props.row,props.col));}}
    onTouchEnd={(e)=>dispatch(mouseUp())}
    onTouchMove={(e)=>{
      // console.log(e);
      // console.log(document);

      const clientX = e.changedTouches[0].clientX
      const clientY = e.changedTouches[0].clientY
      const el = document.elementFromPoint(clientX, clientY)
      // console.log({el});
      if(el === null || el.attributes.row === undefined){
        dispatch(mouseUp())
        return;
      }

      dispatch(mouseMove(parseInt(el.attributes.row.nodeValue),parseInt(el.attributes.col.nodeValue)))}
    } 
    onMouseMove={(e)=>dispatch(mouseMove(props.row,props.col))} 
    onMouseDown={(e)=>{dispatch(mouseDown());dispatch(mouseMove(props.row,props.col));}}
    onMouseUp={(e)=>dispatch(mouseUp())}
  />
}