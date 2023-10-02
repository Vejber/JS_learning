// реализовать консольные крестики-нолики

class DrawFigure{
    constructor(board){
        this.board = board;
        this.i = 0;
        this.a = 1;
        this. b = 1;
    }

    getCoordinates(){
        let x = Number(prompt('Выберете строку следующего хода (1/2/3). Чтобы завершить игру, выберите 0: '));
        let y = Number(prompt('Выберете столбец следующего хода (1/2/3). Чтобы завершить игру, выберите 0: '));
        DrawFigure.a = x;
        DrawFigure.b = y;
    };

    //draw the new board:
    drawBoard(playerNumber, board){
        console.log(`Ход ${playerNumber} игрока:`);
        for(let j = 1; j < 4; j++){ //raws
            console.log(board[j]);
        };
    };

    checkResult(playerNumber, board){
        //check results who wins:
        for(let j = 1; j < 2; j++){ //raws
            for(let z = 1; z < 2; z++){ //columns
                if((board[j][z] != '_' && board[j][z] == board[j][z+1] && board[j][z+1] == board[j][z+2]) || 
                (board[j][z] != '_' && board[j][z] == board[j+1][z] && board[j+1][z] == board[j+2][z]) || 
                (board[j][z] != '_' && board[j][z] == board[j+1][z+1] && board[j+1][z+1] == board[j+2][z+2]) ||
                (board[j+2][z] != '_' && board[j+2][z] == board[j+1][z+1] && board[j+1][z+1] == board[j][z+2])){
                    alert(`Игрок ${playerNumber} победил`);
                    this.board = [
                        ['','1', '2', '3'],
                        ['1','_','_','_'],
                        ['2','_','_','_'],
                        ['3','_','_','_'],
                    ];
                    this.i = 0;
                    return;
                }
            }
        }
    }
    drawFigure(){
        let playerConter = 0;
        let playerNumber = 1;

        for(this.i; this.i < 9; this.i++){
            this.getCoordinates();
            let a = DrawFigure.a;
            let b = DrawFigure.b;
            if(a == 0){
                this.i = 0;
                alert('Игра завершена');
                return;
            }
            if(playerConter % 2 == 0){
                if(this.board[a][b] == '_'){
                    this.board[a][b] = 'x';
                    playerNumber = 1;
                } else {
                    alert('Это место на доске уже занято');
                    this.i--;
                    this.getCoordinates();
                };
            } else {
                if(this.board[a][b] == '_'){
                    this.board[a][b] = 'o';
                    playerNumber = 2;
                } else {
                    alert('Это место на доске уже занято');
                    this.i--;
                    this.getCoordinates();
                };
            }
            playerConter++;
            this.drawBoard(playerNumber, this.board);
            if(this.i == 8){
                alert('Ничья');
                this.board = [
                    ['','1', '2', '3'],
                    ['1','_','_','_'],
                    ['2','_','_','_'],
                    ['3','_','_','_'],
                ];
                return;
            }
            DrawFigure.board = this.checkResult(playerNumber, this.board);
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
}