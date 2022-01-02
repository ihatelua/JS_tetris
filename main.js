const canvas = document.getElementById('board');
const ctx = canvas.getContext('2d');

// ����� ����� ĵ������ ũ�⸦ ����Ѵ�.
ctx.canvas.width = COLS * BLOCK_SIZE;
ctx.canvas.height = ROWS * BLOCK_SIZE;

// ����� ũ�⸦ �����Ѵ�.
ctx.scale(BLOCK_SIZE, BLOCK_SIZE);


let board = new Board();

moves = {
  [KEY.LEFT]:  p => ({ ...p, x: p.x - 1 }),
  [KEY.RIGHT]: p => ({ ...p, x: p.x + 1 }),
  [KEY.DOWN]:  p => ({ ...p, y: p.y + 1}),
  [KEY.UP]:  p => board.rotate(p),
  [KEY.SPACE]:  p => ({ ...p, y: p.y + 1})
}; 



// play ��ư Ŭ��
function play() {
  board.reset();
  let piece = new Piece(ctx);
  piece.draw();
  board.piece = piece;
}

// Ű �̺�Ʈ
document.addEventListener('keydown', event => {
  let key = event.keyCode;
  if(moves[key]){
    event.preventDefault(); // �̺�Ʈ ���� ����

    let p = moves[key](board.piece);

    if(key == KEY.UP){
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height); 
      board.piece.draw();
    }else{
      // �����̹ٸ� Ŭ�������� �ٴڸ����� ��ġ��Ų��.
      if(key == KEY.SPACE){
        while(board.valid(p)){
          board.piece.move(p);
          p = moves[key](board.piece);
        }
        // �׸��� ���� ���� ��ǥ�� �����.
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height); 
        board.piece.draw();
      }

      // ������ ȭ��ǥ�� �Է�������
      if(board.valid(p)){
        debugger;
        board.piece.move(p);

        // �׸��� ���� ���� ��ǥ�� �����.
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height); 

        board.piece.draw();
      } 
    }
  }
});

