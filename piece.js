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
        // this.x, this.y�� shape�� ��� ���� ��ǥ�̴�
        // shape �ȿ� �ִ� ��� ��ǥ�� x, y�� ���Ѵ�.
        // ���忡�� ����� ��ǥ�� this.x + x�� �ȴ�.
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