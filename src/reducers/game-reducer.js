import { checkInscribeShape, colapseGrid, defaultState, getColapsedGrid, getColapsedScore } from '../utils'
import { pushSelectedGridSquares } from '../utils'
import { checkPushSelectedGridSquares } from '../utils'
import { changeSelectedGrid } from '../utils'
import { checkSelectedShape } from '../utils'
import { fixSelectedGrid } from '../utils'
import { checkSelectedGrid } from '../utils'
import { shapes } from '../utils'
import { chekColapseGrid } from '../utils'
import { randomShape } from '../utils'

import {
    MOUSE_MOVE, RESTART, GAME_OVER, MOUSE_DOWN, MOUSE_UP, CHECK_END_GAME
} from '../actions'



const gameReducer = (state = defaultState(), action) => {

    switch (action.type) {
        case MOUSE_MOVE:

            if (state.mouseDown) {
                if (state.row === action.row && state.col === action.col) {
                    return state;
                }
                if (!checkSelectedGrid(state.grid, { row: action.row, col: action.col })) {
                    return state;
                }
                if(state.gameOver){
                    return state;
                }
                //mb motionGame()=> все вынести туда??
                // {
                //   установить новый селект
                //   проверить первую фигуру
                //   проверить вторую фигуру
                //   обновить если подошли
                //   проверить поле на готовые к очистки
                //   очистить
                //   засчитать фигуру
                //   засчитать очищенные
                //   проверить на конец игры
                //}
                if (!checkPushSelectedGridSquares(state.selectedGridSqueares, { row: action.row, col: action.col })) {
                    return state;
                }

                state.selectedGridSqueares = pushSelectedGridSquares(state.selectedGridSqueares, { row: action.row, col: action.col })
                state.grid = changeSelectedGrid(state.grid, state.selectedGridSqueares);


                if (checkSelectedShape(state.selectedGridSqueares, shapes[state.nextShape1])) {

                    state.score += state.selectedGridSqueares.length;
                    state.grid = fixSelectedGrid(state.grid);
                    state.selectedGridSqueares = [];
                    state.nextShape1 = randomShape();
                    state.moutionEnd = true;
                    let isGameOver = checkInscribeShape(state.grid,state.nextShape1) && checkInscribeShape(state.grid,state.nextShape2);
                    state.gameOver = !isGameOver
                }
                if (checkSelectedShape(state.selectedGridSqueares, shapes[state.nextShape2])) {
                    state.score += state.selectedGridSqueares.length;
                    state.grid = fixSelectedGrid(state.grid);
                    state.selectedGridSqueares = [];
                    state.nextShape2 = randomShape();
                    let isGameOver = checkInscribeShape(state.grid,state.nextShape1) && checkInscribeShape(state.grid,state.nextShape2);
                    state.gameOver = !isGameOver
                }
                const colapsed = getColapsedGrid(state.grid)
                if(colapsed.rows.length !== 0 || colapsed.cols.length !==0){
                    state.grid = colapseGrid(state.grid,colapsed)
                    state.score += getColapsedScore(colapsed) 

                   
                }

            
              
                return {
                    ...state,
                    row: action.row,
                    col: action.col
                }
            }
            return state;
        case MOUSE_DOWN:
            return { ...state, mouseDown: true }
        case CHECK_END_GAME:
            
            return { ...state, moutionEnd: false }
        case MOUSE_UP:

            return { ...state, mouseDown: false }
        case GAME_OVER:
           
            return state
        case RESTART:

            return { ...state, gameOver: false }
        default:
            return state
    }
}

export default gameReducer