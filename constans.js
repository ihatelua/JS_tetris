const COLS = 10;
const ROWS = 20;
const BLOCK_SIZE = 30;


const COLORS = [  
    'cyan',
    'blue',
    'orange',
    'yellow',
    'green',
    'purple',
    'red'
];

const SHAPES = [  
[
    [0, 0, 0, 0], 
    [2, 2, 2, 2],
    [0, 0, 0, 0], 
    [0, 0, 0, 0]
], 
[
    [0, 0, 2],
    [0, 0, 2],
    [0, 2, 2]
],
[
    [2, 0, 0],
    [2, 0, 0],
    [2, 2, 0]
],
[
    [0, 0, 0],
    [0, 2, 2],
    [0, 2, 2]
],
[
    [0, 0, 0],
    [0, 2, 2],
    [2, 2, 0]
],
[
    [0, 0, 0],
    [2, 2, 2],
    [0, 2, 0]
],
[
    [0, 0, 0],
    [2, 2, 0],
    [0, 2, 2]
]
];

const KEY = {
    LEFT: 37,
    RIGHT: 39,
    UP: 38,
    DOWN: 40,
    SPACE: 32
}
Object.freeze(KEY);
