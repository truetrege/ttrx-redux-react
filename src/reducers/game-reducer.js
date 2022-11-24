import { defaultState } from '../utils'
import { pushCurrnetFigure } from '../utils'
import { changeGridFigure } from '../utils'

import {
    CURSOR_CLICK, RESTART, GAME_OVER
} from '../actions'



const gameReducer = (state = defaultState(), action) => {

    switch (action.type) {
        case CURSOR_CLICK:
            const newCurrentFigure = pushCurrnetFigure(state.currentFigure,{row:action.row,col:action.col})

            const newGrid = changeGridFigure(state.grid,newCurrentFigure)
            console.log(state)
            return {...state,currentFigure:newCurrentFigure}
        case GAME_OVER:

            return state

        case RESTART:

            return state

        default:
            return state
    }
}

export default gameReducer