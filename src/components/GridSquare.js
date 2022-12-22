
import { useSelector, useDispatch } from 'react-redux'
import { checkCollapse, mouseMove } from '../actions'
import { mouseDown } from '../actions'
import { mouseUp } from '../actions'

export default function GridSquare(props) {

  const dispatch = useDispatch()
  
  const classes = `grid-square brick b-3x3 b-${props.color}`
// const timer =  setTimeout(() => {
//   dispatch(checkCollapse())
//   console.log(this)
// }, 1000);

  return <div className={classes} row={props.row} col={props.col}
    onDragStart={(e)=>{e.preventDefault()}}
    onTouchStart={(e)=>{dispatch(mouseDown());dispatch(mouseMove(props.row,props.col));}}
    onTouchEnd={(e)=>{  
       dispatch(mouseUp());
       setTimeout(() => {
        dispatch(mouseUp());
        dispatch(checkCollapse())
      }, 200);

      }}
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
    onMouseDown={(e)=>{
      
      dispatch(mouseDown());
      dispatch(mouseMove(props.row,props.col));
    }
    }
    onMouseUp={(e)=>{
      dispatch(mouseUp());
      setTimeout(() => {
        dispatch(mouseUp());
        dispatch(checkCollapse())
      }, 200);
      // dispatch(checkCollapse())
      
      
    
    }}
  />
}