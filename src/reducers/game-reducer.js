import { defaultState } from '../utils'
import { pushSelectedGridSquares } from '../utils'
import { changeSelectedGrid } from '../utils'

import {
    MOUSE_MOVE, RESTART, GAME_OVER, MOUSE_DOWN,MOUSE_UP
} from '../actions'



const gameReducer = (state = defaultState(), action) => {

    switch (action.type) {
        case MOUSE_MOVE:
            if(state.mouseDown){

                const newSelectedGridSqueares = pushSelectedGridSquares(state.selectedGridSqueares,{row:action.row,col:action.col})
                const newGrid = changeSelectedGrid(state.grid,newSelectedGridSqueares)
                return {...state,grid:newGrid,selectedGridSqueares:newSelectedGridSqueares}
            }
            return state;
        case MOUSE_DOWN:

                return {...state,mouseDown:true}
        case MOUSE_UP:

                return {...state,mouseDown:false}
        case GAME_OVER:

            return state

        case RESTART:

            return state

        default:
            return state
    }
}

export default gameReducer