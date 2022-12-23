
import {
    pushSelectedGridSquares, saveHistory, checkPushSelectedGridSquares,
    changeSelectedGrid, checkSelectedShape, fixSelectedGrid, checkSelectedGrid, shapes,
    randomShape, checkInscribeShape, clearSelected, colapseGrid, defaultState,
    getColapsedGrid, getColapsedScore, initState, saveTop, generateTheme, randomColor
} from '../utils'

import {
    MOUSE_MOVE, RESTART, BACK, MOUSE_DOWN, MOUSE_UP, SETTINGS, NEW_GAME, CHANGE_THEME, CHECK_COLLAPSE
} from '../actions'

import { themes } from '../utils'


const gameReducer = (state = initState(), action) => {

    switch (action.type) {
        case MOUSE_MOVE:
            if (state.mouseDown) {
                if (state.row === action.row && state.col === action.col) {
                    return state;
                }
                if (!checkSelectedGrid(state.grid, { row: action.row, col: action.col })) {
                    return state;
                }
                if (state.gameOver) {
                    return state;
                }

                if (!checkPushSelectedGridSquares(state.selectedGridSqueares, { row: action.row, col: action.col })) {
                    return state;
                }

                state.selectedGridSqueares = pushSelectedGridSquares(state.selectedGridSqueares, { row: action.row, col: action.col })
                state.grid = changeSelectedGrid(state.grid, state.selectedGridSqueares);


                const fitFirstShape = checkSelectedShape(state.selectedGridSqueares, shapes[state.nextShape1]);
                const fitSecondShape = checkSelectedShape(state.selectedGridSqueares, shapes[state.nextShape2]);

                if (fitFirstShape || fitSecondShape) {

                    return {
                        ...state,
                        fixSquares: true,
                        row: action.row,
                        col: action.col
                    }
                }


                return {
                    ...state,

                    row: action.row,
                    col: action.col
                }
            }
            return state;
        case MOUSE_DOWN:



            return { ...state, mouseDown: true, fixSquares: false, }
        case SETTINGS:

            return { ...state, menuModal: action.cancel }
        case NEW_GAME:

            return { ...state, newGameModal: action.cancel }
        case CHANGE_THEME:
            if(themes[action.theme].random){
                themes[action.theme].colors =generateTheme(); 
            }
            return { ...state, theme: action.theme }
        case MOUSE_UP:
            if (state.fixSquares === true) {
                // state.selectedGridSqueares = pushSelectedGridSquares(state.selectedGridSqueares, { row: action.row, col: action.col })
                state.grid = changeSelectedGrid(state.grid, state.selectedGridSqueares);


                const fitFirstShape = checkSelectedShape(state.selectedGridSqueares, shapes[state.nextShape1]);
                const fitSecondShape = checkSelectedShape(state.selectedGridSqueares, shapes[state.nextShape2]);



                if (fitFirstShape || fitSecondShape) {
                    const previousState = { ...state };
                    previousState.previousState = null;

                    state.fixSquares = true;
                    state.score += state.selectedGridSqueares.length;
                    state.selectedGridSqueares = [];
                    if (fitFirstShape && fitSecondShape) {

                        if(themes[state.theme].colored){
                            state.grid = fixSelectedGrid(state.grid,state.nextColors.nextShape1);
                        }else{
                            state.grid = fixSelectedGrid(state.grid);
                        }
                        state.nextShape1 = randomShape();
                        state.nextColors.nextShape1 = randomColor()
                    } else if (fitFirstShape) {
                        if(themes[state.theme].colored){
                            state.grid = fixSelectedGrid(state.grid,state.nextColors.nextShape1);
                        }else{
                            state.grid = fixSelectedGrid(state.grid);
                        }
                        state.nextShape1 = randomShape();
                        state.nextColors.nextShape1 = randomColor()
                    } else if (fitSecondShape) {
                        if(themes[state.theme].colored){
                            state.grid = fixSelectedGrid(state.grid,state.nextColors.nextShape2);
                        }else{
                            state.grid = fixSelectedGrid(state.grid);
                        }
                        state.nextShape2 = randomShape();
                        state.nextColors.nextShape2 = randomColor()
                    }
                    return { ...state, previousState: previousState, mouseDown: false }
                }
            }
            return { ...state, mouseDown: false }
        case BACK:
            // console.log(state)
            const previousState = state.previousState;
            previousState.grid = clearSelected(previousState.grid);
            previousState.previousState = { ...state }
            return { ...previousState, selectedGridSqueares: [], mouseDown: false }
        case CHECK_COLLAPSE:


            const colapsed = getColapsedGrid(state.grid)
            if (colapsed.rows.length !== 0 || colapsed.cols.length !== 0) {

                state.grid = colapseGrid(state.grid, colapsed)
                state.score += getColapsedScore(colapsed)

                // const previousState = {...state};

                state.moutionEnd = true;
                state.mouseDown = false;
                state.settings = false;
                // state.previousState = {...previousState};
                
            }

            const isGameOver = checkInscribeShape(state.grid, state.nextShape1)
                    || checkInscribeShape(state.grid, state.nextShape2);
            state.gameOver = !isGameOver
            if(state.fixSquares){

                saveHistory(state)
                state.fixSquares = false;
            }   

            // if (isGameOver) {
            //     saveHistory(state)
            // } else {

            // }


            return state;
        case RESTART:

            const top = saveTop(state.top, state.score)
            const newState = defaultState();
            saveHistory(newState)
            newState.top = top;
            // console.log(top,newState,state)


            return { ...newState, gameOver: false }
        default:
            return state
    }
}

const moutionGame = (state, action) => {
    state.selectedGridSqueares = pushSelectedGridSquares(state.selectedGridSqueares, { row: action.row, col: action.col })
    state.grid = changeSelectedGrid(state.grid, state.selectedGridSqueares);


    const fitFirstShape = checkSelectedShape(state.selectedGridSqueares, shapes[state.nextShape1]);
    const fitSecondShape = checkSelectedShape(state.selectedGridSqueares, shapes[state.nextShape2]);



    if (fitFirstShape || fitSecondShape) {
        const previousState = { ...state };


        state.score += state.selectedGridSqueares.length;
        // state.grid = fixSelectedGrid(state.grid);
        state.selectedGridSqueares = [];
        if (fitFirstShape && fitSecondShape) {

            state.nextShape1 = randomShape();
        } else if (fitFirstShape) {

            state.nextShape1 = randomShape();
        } else if (fitSecondShape) {
            state.nextShape2 = randomShape();
        }
        const colapsed = getColapsedGrid(state.grid)
        if (colapsed.rows.length !== 0 || colapsed.cols.length !== 0) {

            state.grid = colapseGrid(state.grid, colapsed)
            state.score += getColapsedScore(colapsed)


        }
        state.moutionEnd = true;
        state.mouseDown = false
        state.previousState = previousState;

        const isGameOver = checkInscribeShape(state.grid, state.nextShape1)
            || checkInscribeShape(state.grid, state.nextShape2);
        state.gameOver = !isGameOver
        if (isGameOver) {
            saveHistory(state)
        } else {

        }
    }
    return state;
}

export default gameReducer