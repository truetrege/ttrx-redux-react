export const MOUSE_MOVE = "MOUSE_MOVE"   // Move piece down
export const MOUSE_DOWN = "MOUSE_DOWN"   // Move piece down
export const MOUSE_UP = "MOUSE_UP"   // Move piece down
export const SETTINGS = "SETTINGS"   // The game is over
export const RESTART = "RESTART"     // Restart Game
export const NEW_GAME = "NEW_GAME"     // Restart Game
export const BACK = "BACK"     // Restart Game
export const CHECK_COLLAPSE = "CHECK_COLLAPSE"     // Restart Game
export const CHANGE_THEME = "CHANGE_THEME"     // Restart Game

export const mouseMove = (row, col) => {
  return { type: MOUSE_MOVE, row: row, col: col }
}
export const checkCollapse = () => {
  return { type: CHECK_COLLAPSE}
}
export const changeTheme =(theme) => {
  return { type: CHANGE_THEME, theme: theme } 
}
export const mouseDown = () => {
  return { type: MOUSE_DOWN }
}
export const mouseUp = () => {
  return { type: MOUSE_UP }
}
export const settings = (cancel = true) => {
  return { type: SETTINGS, cancel: cancel }
}

export const back = () => {
  return { type: BACK }
}
export const newGame = (cancel = true) => {
  return { type: NEW_GAME, cancel: cancel }
}
export const restart = () => {
  return { type: RESTART }
}