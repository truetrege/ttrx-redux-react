
import {
    pushSelectedGridSquares, saveHistory, checkPushSelectedGridSquares,
    changeSelectedGrid, checkSelectedShape, fixSelectedGrid, checkSelectedGrid, shapes,
    randomShape, checkInscribeShape, clearSelected, colapseGrid, defaultState,
    getColapsedGrid, getColapsedScore, initState,saveTop
} from '../utils'

import {
    MOUSE_MOVE, RESTART, BACK, MOUSE_DOWN, MOUSE_UP, SETTINGS, NEW_GAME
} from '../actions'



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

                state = moutionGame(state, action);

                return {
                    ...state,
                    row: action.row,
                    col: action.col
                }
            }
            return state;
        case MOUSE_DOWN:
            return { ...state, mouseDown: true }
        case SETTINGS:

            return { ...state, menuModal: action.cancel }
        case NEW_GAME:

            return { ...state, newGameModal: action.cancel }
        case MOUSE_UP:

            return { ...state, mouseDown: false }
        case BACK:
            const previousState = state.previousState;
            previousState.grid = clearSelected(previousState.grid);
            previousState.previousState = { ...state }
            return { ...previousState, selectedGridSqueares: [], mouseDown: false }
        case RESTART:

            const top = saveTop(state.top,state.score)
            const newState = defaultState();
            saveHistory(newState)
            newState.top = top;
            console.log(top,newState,state)


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
        state.grid = fixSelectedGrid(state.grid);
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