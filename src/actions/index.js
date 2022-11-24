export const MOUSE_MOVE  = "MOUSE_MOVE"   // Move piece down
export const MOUSE_DOWN  = "MOUSE_DOWN"   // Move piece down
export const MOUSE_UP  = "MOUSE_UP"   // Move piece down
export const GAME_OVER  = "GAME_OVER"   // The game is over
export const CHECK_END_GAME  = "CHECK_END_GAME"   // The game is over
export const RESTART    = "RESTART"     // Restart Game

export const mouseMove = (row,col) => {
    return { type: MOUSE_MOVE, row:row, col:col }
  }
  export const mouseDown =()=>{
    return { type: MOUSE_DOWN }
  }  
  export const mouseUp =()=>{
    return { type: MOUSE_UP }
  }
export const checkEndGame =()=>{
    return { type: CHECK_END_GAME }
  }


export const restart = () => {
    return { type: RESTART }
  }