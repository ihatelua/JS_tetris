class Piece {
    x;
    y;
    color;
    shape;
    ctx;
    index;
    
    constructor(ctx) {
      this.ctx = ctx;
      this.spawn();
    }
    
    xMove(p) {
      this.shape[this.index].forEach((row, y) => {
        row.forEach((value, x) => {
          if (value > 0) {
            ctx.clearRect(this.x + x, this.y + y, 1, 1);
          }
        });
      });
    
      this.x += p;
      this.ctx.fillStyle = this.color[this.index];
      this.shape[this.index].forEach((row, y) => {
        row.forEach((value, x) => {
          if (value > 0) {
            this.ctx.fillRect(this.x + x, this.y + y, 1, 1);
          }
        });
      });
    }

    yMove(p) {
      this.shape[this.index].forEach((row, y) => {
        row.forEach((value, x) => {
          if (value > 0) {
            ctx.clearRect(this.x + x, this.y + y, 1, 1);
          }
        });
      });
    
      this.y += p;
      this.ctx.fillStyle = this.color[this.index];
      this.shape[this.index].forEach((row, y) => {
        row.forEach((value, x) => {
          if (value > 0) {
            this.ctx.fillRect(this.x + x, this.y + y, 1, 1);
          }
        });
      });
    }
    rotate() {
      this.shape[this.index].forEach((row, y) => {
        row.forEach((value, x) => {
          if (value > 0) {
            ctx.clearRect(this.x + x, this.y + y, 1, 1);
          }
        });
      });
      this.ctx.fillStyle = this.color[this.index];
      this.shape[this.index].reverse().forEach((row, y) => {
        row.forEach((value, x) => {
          if (value > 0) {
            this.ctx.fillRect(this.x + x, this.y + y, 1, 1);
          }
        });
      });
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
    }
    draw() {
       this.index = 3;
        this.ctx.fillStyle = this.color[this.index];
        this.shape[this.index].forEach((row, y) => {
          row.forEach((value, x) => {
            if (value > 0) {
              this.ctx.fillRect(this.x + x, this.y + y, 1, 1);
            }
          });
        });
      }
   
}



