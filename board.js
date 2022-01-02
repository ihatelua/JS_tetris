class Board {
  grid;
  
  // �� ������ ���۵Ǹ� ���带 �ʱ�ȭ�Ѵ�.
  reset() {
    this.grid = this.getEmptyBoard();
  }
  
  // 0���� ä���� ����� ��´�.
  getEmptyBoard() {
    return Array.from(
      {length: ROWS}, () => Array(COLS).fill(0)
    );
  }

  // result[j][n-i-1]
  rotate(p){
    let maxRow = p.shape.length;
    let maxCol = p.shape[0].length;
    let result = Array.from(
      {length: maxRow}, () => Array(maxCol).fill(0)
    );

    for(var i = 0; i < maxRow; i++){
    	for(var j = 0; j < maxCol; j++){
        	result[j][maxRow-i-1] = p.shape[i][j];
        }
    }

    p.shape = result;
  }

  valid(p){
    return p.shape.every((row, dy) => {
      return row.every((value, dx) => {
        let x = p.x + dx;
        let y = p.y + dy;
        return this.isEmpty(value) || (this.wallValid(x) && this.floorValid(y));
      })
    });
  }

  isEmpty(value){
    return value === 0;
  }

  wallValid(x){
    return 0 <= x && x < COLS;
  }

  floorValid(y){
    return y < ROWS;
  }
}