class Piece {
    x;
    y;
    color;
    shape;
    ctx;
    index;
    rotateValue;
    piece;
    
    constructor(ctx) {
      this.ctx = ctx;
      this.spawn();
    }
    
    xMove(p) {
      this.piece.forEach((row, y) => {
        row.forEach((value, x) => {
          if (value > 0) {
            ctx.clearRect(this.x + x, this.y + y, 1, 1);
          }
        });
      });
    
      this.x += p;
      this.ctx.fillStyle = this.color[this.index];
      this.piece.forEach((row, y) => {
        row.forEach((value, x) => {
          if (value > 0) {
            this.ctx.fillRect(this.x + x, this.y + y, 1, 1);
          }
        });
      });
    }

    yMove(p) {
      this.piece.forEach((row, y) => {
        row.forEach((value, x) => {
          if (value > 0) {
            ctx.clearRect(this.x + x, this.y + y, 1, 1);
          }
        });
      });
    
      this.y += p;
      this.ctx.fillStyle = this.color[this.index];
      this.piece.forEach((row, y) => {
        row.forEach((value, x) => {
          if (value > 0) {
            this.ctx.fillRect(this.x + x, this.y + y, 1, 1);
          }
        });
      });
    }
    rotate() {
      if(this.piece === this.shape[2]) return;
       var arr = this.rotateArr(this.piece, 90)

       this.piece = arr;

       this.ctx.fillStyle = this.color[this.index];
       this.piece.forEach((row, y) => {
        row.forEach((value, x) => {
          if (value == 0) {
            ctx.clearRect(this.x + x, this.y + y, 1, 1);
          }else{
            this.ctx.fillRect(this.x + x, this.y + y, 1, 1);

          }
        });
      });
      
    }
    

  rotateArr(arr, degree) {
    this.rotateValue += 90;
    var rotate = this.getEmptyShape();
    var n = arr.length;
    var m = arr[0].length;

    switch (degree) {
        case 90:
        case 270:
            rotate = this.getEmptyShape();
            break;
        case 180:
            rotate = this.getEmptyShape();
            break;
        case 360:
            this.rotateValue = 0;
            return this.shape[this.index];
    }

    for (var i = 0; i < rotate.length; i++) {
        for (var j = 0; j < rotate[i].length; j++) {
            switch (degree) {
                case 90:
                    rotate[i][j] = arr[n-1-j][i];
                    break;
                case 180:
                    rotate[i][j] = arr[n-1-i][m-1-j];
                    break;
                case 270:
                    rotate[i][j] = arr[j][m-1-i];
                    break;
            }
        }
    }

    return rotate;
  }

  getEmptyShape(){
    return Array.from(
      {length: PIECE_ROWS}, () => Array(PIECE_COLS).fill(0)
    );
  }
    
  spawn() {
    this.color = 
    ['cyan',
    'blue',
    'orange',
    'yellow',
    'green',
    'purple',
    'red']
    this.shape = [
      [
        [2, 0, 0], 
        [2, 2, 2], 
        [0, 0, 0] 
      ],
      [
        [0, 0, 2], 
        [2, 2, 2], 
        [0, 0, 0] 
      ],
      [
        [0, 2, 2], 
        [0, 2, 2], 
        [0, 0, 0]
      ],
      [
        [0, 2, 0],
        [2, 2, 2],
        [0, 0, 0]
      ],
      [
        [0, 2, 0], 
        [0, 2, 0], 
        [0, 2, 0],
        [0, 2, 0]
      ],
      [
        [2, 2, 0], 
        [0, 2, 2], 
        [0, 0, 0]
      ],
      [
        [0, 2, 2], 
        [2, 2, 0], 
        [0, 0, 0]
      ],
    ];
    
    
    this.x = 3;
    this.y = 0;

    this.rotateValue = 0;
  }

  
  draw() {
      this.index = Math.floor(Math.random() * 7);
      this.ctx.fillStyle = this.color[this.index];

    this.piece = this.shape[this.index];

    this.piece.forEach((row, y) => {
        row.forEach((value, x) => {
          if (value > 0) {
            this.ctx.fillRect(this.x + x, this.y + y, 1, 1);
          }
        });
      });
    }
  
}



