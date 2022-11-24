export const CURSOR_CLICK  = "CURSOR_CLICK"   // Move piece down
export const GAME_OVER  = "GAME_OVER"   // The game is over
export const RESTART    = "RESTART"     // Restart Game

export const cursorClick = (row,col) => {
    return { type: CURSOR_CLICK,row:row,col:col }
  }

export const restart = () => {
    return { type: RESTART }
  }