const canvas = document.getElementById('board');
const ctx = canvas.getContext('2d');


ctx.canvas.width = COLS * BLOCK_SIZE;
ctx.canvas.height = ROWS * BLOCK_SIZE;


ctx.scale(BLOCK_SIZE, BLOCK_SIZE);





function play() {
  
 
  let board = new Board();
  board = board.getEmptyBoard();
  let piece = new Piece(ctx);
  piece.draw();
  
  board.piece = piece;
  
  window.addEventListener('keydown', e => {
    if(e.key == "ArrowRight"){
      piece.xMove(1);
    }
    if(e.key == "ArrowLeft"){
      piece.xMove(-1);
    }
    if(e.key == "ArrowDown"){
      piece.yMove(1);
    }
    if(e.key == "ArrowUp"){
      piece.rotate();
    }
    if(e.keyCode == '32'){
      piece.yMove(15);
    }
  });
    
  setInterval(() => {
     piece.yMove(1);
  }, 1000);
}
