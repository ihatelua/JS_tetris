const canvas = document.getElementById('board');
const ctx = canvas.getContext('2d');

// 상수를 사용해 캔버스의 크기를 계산한다.
ctx.canvas.width = COLS * BLOCK_SIZE;
ctx.canvas.height = ROWS * BLOCK_SIZE;

// 블록의 크기를 변경한다.
ctx.scale(BLOCK_SIZE, BLOCK_SIZE);


let board = new Board();

moves = {
  [KEY.LEFT]:  p => ({ ...p, x: p.x - 1 }),
  [KEY.RIGHT]: p => ({ ...p, x: p.x + 1 }),
  [KEY.DOWN]:  p => ({ ...p, y: p.y + 1}),
  [KEY.UP]:  p => board.rotate(p),
  [KEY.SPACE]:  p => ({ ...p, y: p.y + 1})
}; 



// play 버튼 클릭
function play() {
  board.reset();
  let piece = new Piece(ctx);
  piece.draw();
  board.piece = piece;
}

// 키 이벤트
document.addEventListener('keydown', event => {
  let key = event.keyCode;
  if(moves[key]){
    event.preventDefault(); // 이벤트 버블링 방지

    let p = moves[key](board.piece);

    if(key == KEY.UP){
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height); 
      board.piece.draw();
    }else{
      // 스페이바를 클릭했을때 바닥면으로 위치시킨다.
      if(key == KEY.SPACE){
        while(board.valid(p)){
          board.piece.move(p);
          p = moves[key](board.piece);
        }
        // 그리기 전에 이전 좌표를 지운다.
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height); 
        board.piece.draw();
      }

      // 나머지 화살표를 입력했을때
      if(board.valid(p)){
        debugger;
        board.piece.move(p);

        // 그리기 전에 이전 좌표를 지운다.
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height); 

        board.piece.draw();
      } 
    }
  }
});

