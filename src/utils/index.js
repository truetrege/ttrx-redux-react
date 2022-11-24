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
    [[1, 1], [1, 1]], [[1, 1, 1, 1]], [[1], [1], [1], [1]],
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

export const checkPushSelectedGridSquares = (list,element)=>{
    return !list.some(current=>current.row === element.row && current.col === element.col);
}

export const pushSelectedGridSquares=(list,element)=>{
    
    if(list.length >=4){
        list.shift()
    }
    list.push(element)
    
    return list;
}
export const clearSelected = (grid)=>{
    return grid.map((row)=>{
        return row.map((col)=>{
            return col = col==1?0:col;
        })
    })
}

export const checkSelectedGrid =(grid,element)=>{
    if(grid[element.row][element.col] === 0){
        return true;
    }else{
        return false;
    }
}

export const changeSelectedGrid = (grid,selectedGridSqueares)=>{
    grid = clearSelected(grid)
    selectedGridSqueares.map((element)=>{
        grid[element.row][element.col] = 1;
    })
    return grid;
}
export const fixSelectedGrid = (grid)=>{
    return grid.map(rows=>rows.map(col=>col=col===1?2:col));
}


export const defaultState = () => {
    return {
        // Create an empty grid
        grid: gridDefault(),
        selectedGridSqueares:[],
        mouseDown:false,
        row: -1,
        col: -1,
        nextShape1: 1,
        nextShape2: randomShape(),
        isRunning: true,
        score: 0,
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
    
    let equality = true;
    for (let i = 0; i < selectedShapeMap.row.size; i++) {
        if(selectedShape[i].join('') !== shape[i].join('')){
            equality = false; 
            break;
        }
    }
    return equality; 

}
// getCountDeletedBox() {
//     /**
//      * TODO: ДУБЛИРУЕТСЯ В UPDATE ПОДУМАТЬ КАК ИСПРАВИТЬ!
//      * */
//     const deletedIndexes = {row: [], col: []};
//     deletedIndexes.row = this.getIndexDeletedRows(this.matrix);
//     deletedIndexes.col = this.getIndexDeletedRows(this.reverseMatrix());

//     if (deletedIndexes.row.length === 0 && deletedIndexes.col.length === 0) {
//       return 0;
//     } else {
//       return this.getScoreDeletedBox(deletedIndexes);
//     }
//   }

const transpose =(matrix)=> {
    return matrix[0].map((col, i) => matrix.map(row => row[i]));
}
const indexColapsedRows =(grid)=> {
    const rows = [];
    grid.forEach((row, index) => {
      if (row.every((col) => col === 2)) {
        rows.push(index);
      }
    });
    return rows;
}

export const chekColapseGrid = (grid)=>{
    const colapsedGrid = {
        rows:indexColapsedRows(grid),
        cols:indexColapsedRows(transpose(grid))
    }

    
    console.log(colapsedGrid)
    return colapsedGrid;
}