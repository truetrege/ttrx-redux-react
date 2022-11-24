export const random = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

export const gridDefault = () => {
    const rows = 11
    const cols = 7
    const array = []

    for (let row = 0; row < rows; row++) {
        array.push([])
        for (let col = 0; col < cols; col++) {
            array[row].push(0)
        }
    }
    return array
}
// Random Shape
export const randomShape = () => {
    return random(1, shapes.length - 1)
}

export const shapes = [
    /*1x*/
    [[1, 1], [1, 1]], [1, 1, 1, 1], [[1], [1], [1], [1]],
    /*2x3*/
    [[0, 1, 0], [1, 1, 1]], [[1, 1, 0], [0, 1, 1]], [[0, 1, 1], [1, 1, 0]],
    [[1,1,1], [0,1,0]], [[1, 0, 0], [1, 1, 1]], [[0, 0, 1], [1, 1, 1]],
    [[1,1,1], [1,0,0]], [[1,1,1],[0,0,1]],
    /*3x2*/
    [[1,0], [1,1], [0,1]], [[0,1],[1,1],[1,0]], [[1,0], [1,0],[1,1]],
    [[1,1], [0,1], [0,1]], [[1,1], [1,0], [1,0]], [[0,1], [0,1], [1,1]],
    [[1,0], [1,1], [1,0]], [[0,1], [1,1], [0,1]],

    /*NEW ShapeS*/
    //['101','111'],

];
export const maxLengthElements = 4;
export const sizeElements = [{ w: 1, h: 4 }, { w: 4, h: 1 }, { w: 2, h: 2 }, { w: 2, h: 3 }, { w: 3, h: 2 }];

export const pushSelectedGridSquares=(list,element)=>{
    if(!list.some(current=>current.row === element.row && current.col === element.col)){
        if(list.length >=4){
            list.shift()
        }
        list.push(element)
    }
    return list;
}
export const clearSelected = (grid)=>{
    return grid.map((row)=>{
        return row.map((col)=>{
            return col = col==1?0:col;
        })
    })
}


export const changeSelectedGrid = (grid,selectedGridSqueares)=>{
    grid = clearSelected(grid)
    selectedGridSqueares.map((element)=>{
        grid[element.row][element.col] = 1;
    })
    return grid;
}


export const defaultState = () => {
    return {
        // Create an empty grid
        grid: gridDefault(),
        selectedGridSqueares:[],
        mouseDown:false,
        // Get a new random shape
        shape: randomShape(),
        // set rotation of the shape to 0
        rotation: 0,
        // set the 'x' position of the shape to 5 and y to -4, which puts the shape in the center of the grid, above the top
        x: 5,
        y: -4,
        // set the index of the next shape to a new random shape
        nextShape: randomShape(),
        // Tell the game that it's currently running
        isRunning: true,
        // Set the score to 0
        score: 0,
        // Set the default speed
        speed: 1000,
        // Game isn't over yet
        gameOver: false
    }
}
export const checkSelectedShape=(selected,shape)=>{

    const selectedShapeMap={
        row:{max:-1,min:99,size:0},
        col:{max:-1,min:99,size:0}
    }
    selected.forEach(element => {
        selectedShapeMap.row.max = element.row > selectedShapeMap.row.max?element.row:selectedShapeMap.row.max;
        selectedShapeMap.col.max = element.col > selectedShapeMap.col.max?element.col:selectedShapeMap.col.max;
        selectedShapeMap.row.min = element.row < selectedShapeMap.row.min?element.row:selectedShapeMap.row.min;
        selectedShapeMap.col.min = element.col < selectedShapeMap.col.min?element.col:selectedShapeMap.col.min;
    });
    selectedShapeMap.row.size = selectedShapeMap.row.max - selectedShapeMap.row.min + 1;
    selectedShapeMap.col.size = selectedShapeMap.col.max - selectedShapeMap.col.min + 1;

    if(selectedShapeMap.row.size !== shape.length){
        return false;
    }
    if(shape.length !== 1 && selectedShapeMap.col.size !== shape[0].length){
        return false;
    }
    
    const selectedShape = []; 
    
    for (let i = 0; i < selectedShapeMap.row.size; i++) {
        selectedShape[i] = [];
        for (let j = 0; j < selectedShapeMap.col.size; j++) {
            selectedShape[i][j] = 0;
        }
      }
    selected.forEach((shape) => {
        selectedShape[shape.row - selectedShapeMap.row.min][shape.col - selectedShapeMap.col.min] = 1;
    });
    

    console.log(selectedShape,shape.length)

}