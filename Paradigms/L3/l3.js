// реализовать консольные крестики-нолики

class DrawFigure{
    constructor(board, a, b){
        this.board = board;
        // this.a = a;
        // this.b = b;
    }

    drawFigure(){
        let playerConter = 0;
        let playerNumber = 1;
        function getCoordinates(){
            let x = Number(prompt('Выберете строку следующего хода (1/2/3): '));
            let y = Number(prompt('Выберете столбец следующего хода (1/2/3): '));
            DrawFigure.a = x;
            DrawFigure.b = y;
        }
        
        for(let i = 0; i < 9; i++){
            getCoordinates();
            let a = DrawFigure.a;
            let b = DrawFigure.b;
            if(playerConter % 2 == 0){
                if(this.board[a][b] == '_'){
                    this.board[a][b] = 'x';
                    playerNumber = 1;
                } else {
                    alert('Это место на доске уже занято');
                    i--;
                    getCoordinates();
                };
            } else {
                if(this.board[a][b] == '_'){
                    this.board[a][b] = 'o';
                    playerNumber = 2;
                } else {
                    alert('Это место на доске уже занято');
                    i--;
                    getCoordinates();
                };
            }
            playerConter++;

            //draw the new board:
            console.log(`Ход ${playerNumber} игрока:`);
            for(let j = 1; j < 4; j++){ //raws
                console.log(board[j]);
            };

            //check results who wins:
            for(let j = 1; j < 2; j++){ //raws
                // console.log(board[j]);
                for(let z = 1; z < 2; z++){ //columns
                    if((board[j][z] == board[j][z+1] == board[j][z+2]) || 
                    (board[j][z] == board[j+1][z] == board[j+2][z]) || 
                    (board[j][z] == board[j+1][z+1] == board[j+2][z+2]) ||
                    (board[j+2][z] == board[j+1][z+1] == board[j][z+2])){
                        console.log(`Игрок ${playerNumber} победил`);
                        return;
                    } 
                }
            }
        }
    }
}

let board = [
    ['','1', '2', '3'],
    ['1','_','_','_'],
    ['2','_','_','_'],
    ['3','_','_','_'],
];
function go(){
    newFigure = new DrawFigure(board);
    newFigure.drawFigure();
    // console.log(board);
}