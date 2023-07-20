let canvas = document.getElementById('game');

let context = canvas.getContext('2d');

let grid = 16;

let count = 0;

let count1 =0;

let result = document.getElementById("Result-chet-check");

let btn_start = document.getElementById("btn_start");

let snake = {
    x:160,
    y:160,
    dx:grid,
    dy:0,
    cells: [],
    maxCells: 4
};

let berry = {
    x: 320,
    y: 320
};

function getRandomInt(min,max){
    return Math.floor(Math.random() * (max-min)) + min;
}

function EasyStart () {
    count1 = -5;
}
function MediumStart () {
    count1 = 0;
}
function HardStart () {
    count1 = 2;
}

function Reload(){
    window.location.reload();
    count1 = 0;
}
function BtnStart(){
    document.getElementById('btn_start').style.display = 'none';
}

function Btn_start_click(){
    BtnStart();
    requestAnimationFrame(loop);
}

function loop(){
    requestAnimationFrame(loop);
    if (++count < 4){
        return;
    }

    count = count1;

    context.clearRect(0,0, canvas.width, canvas.height);

    snake.x += snake.dx;
    snake.y += snake.dy;

    if (snake.x<0){
        snake.x = canvas.width - grid;
    }
    else  if (snake.x >= canvas.width){
        snake.x = 0;
    }

    if (snake.y < 0){
        snake.y = canvas.height - grid;
    }
    else  if (snake.y >= canvas.height){
        snake.y = 0;
    }


    snake.cells.unshift({x:snake.x, y:snake.y});

    if (snake.cells.length > snake.maxCells){
        snake.cells.pop();
    }

    context.fillStyle = 'blue';

    context.fillRect(berry.x, berry.y, grid-1, grid-1);

    context.fillStyle = 'red';


    snake.cells.forEach(function (cell, index){
        context.fillRect(cell.x, cell.y, grid-1,grid-1);

        if (cell.x === berry.x && cell.y === berry.y){
            snake.maxCells++;
            berry.x = getRandomInt(0,25) * grid;
            berry.y = getRandomInt(0,25) * grid;
            result.innerHTML++;

        }

        for(let i = index + 1; i< snake.cells.length; i++){
            if (cell.x === snake.cells[i].x && cell.y === snake.cells[i].y){
                snake.x = 150;
                snake.y = 150;
                snake.cells = [];
                snake.maxCells = 4;
                snake.dx = grid;
                snake.dy = 0;
                result.innerHTML = 0;

                berry.x = getRandomInt(0,25) * grid;
                berry.y = getRandomInt(0,25) * grid;

            }
        }
    });
}
 document.addEventListener('keydown',function (e){
   if (e.which === 37 && snake.dx === 0 ){
       snake.dx = -grid;
       snake.dy = 0;
   }
   else if (e.
       which === 38 && snake.dy === 0){
       snake.dy = -grid;
       snake.dx = 0;
   }
   else if (e.which === 39 && snake.dx ===0){
       snake.dx = grid;
       snake.dy = 0;
   }
   else if (e.which === 40 && snake.dy === 0){
       snake.dy = grid;
       snake.dx = 0;
   }
 })




