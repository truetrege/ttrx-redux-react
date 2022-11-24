import { defaultState } from '../utils'
import { pushSelectedGridSquares } from '../utils'
import { changeSelectedGrid } from '../utils'

import {
    CURSOR_CLICK, RESTART, GAME_OVER
} from '../actions'



const gameReducer = (state = defaultState(), action) => {

    switch (action.type) {
        case CURSOR_CLICK:
            const newSelectedGridSqueares = pushSelectedGridSquares(state.selectedGridSqueares,{row:action.row,col:action.col})
            const newGrid = changeSelectedGrid(state.grid,newSelectedGridSqueares)
            return {...state,grid:newGrid,selectedGridSqueares:newSelectedGridSqueares}
        case GAME_OVER:

            return state

        case RESTART:

            return state

        default:
            return state
    }
}

export default gameReducer