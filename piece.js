class Piece {
  x;
  y;
  color;
  shape;
  ctx;
  
  constructor(ctx) {
    this.ctx = ctx;
    this.spawn();
  }
  
  spawn() {
    var colorRand = Math.floor(Math.random() * COLORS.length);
    var shapeRand = Math.floor(Math.random() * SHAPES.length);

    this.color = COLORS[colorRand];
    this.shape = SHAPES[shapeRand];
    
    // Starting position.
    this.x = 3;
    this.y = 0;
  }

  draw() {
    this.ctx.fillStyle = this.color;
    this.shape.forEach((row, y) => {
      row.forEach((value, x) => {
        // this.x, this.y는 shape의 상단 왼쪽 좌표이다
        // shape 안에 있는 블록 좌표에 x, y를 더한다.
        // 보드에서 블록의 좌표는 this.x + x가 된다.
        if(value > 0){
          this.ctx.fillRect(this.x + x, this.y + y, 1, 1);
        }
      })
    })
  }

  move(p) {
    this.x = p.x;
    this.y = p.y;
  }

  
}