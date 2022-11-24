import { defaultState } from '../utils'
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
    MOUSE_MOVE, RESTART, GAME_OVER, MOUSE_DOWN,MOUSE_UP
} from '../actions'



const gameReducer = (state = defaultState(), action) => {

    switch (action.type) {
        case MOUSE_MOVE:

            if(state.mouseDown){
                if(state.row === action.row && state.col === action.col ){
                    return state;
                }
                if(!checkSelectedGrid(state.grid,{row:action.row,col:action.col})){
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
                if(!checkPushSelectedGridSquares(state.selectedGridSqueares,{row:action.row,col:action.col})){
                    return state;
                }

                state.selectedGridSqueares = pushSelectedGridSquares(state.selectedGridSqueares,{row:action.row,col:action.col})                
                state.grid = changeSelectedGrid(state.grid,state.selectedGridSqueares);
                

                if(checkSelectedShape(state.selectedGridSqueares,shapes[state.nextShape1])){
                    
                    state.score +=state.selectedGridSqueares.length;
                    state.grid = fixSelectedGrid(state.grid);
                    state.selectedGridSqueares = [];
                    state.nextShape1 = randomShape();                     
                }
                if(checkSelectedShape(state.selectedGridSqueares,shapes[state.nextShape2])){
                    state.score +=state.selectedGridSqueares.length;
                    state.grid = fixSelectedGrid(state.grid);
                    state.selectedGridSqueares = [];
                    state.nextShape2 = randomShape();                     
                }
                chekColapseGrid(state.grid)
                

                return {...state,
                    
                    row:action.row,
                    col:action.col
                }
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