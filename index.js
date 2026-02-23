let turn = 1;
let board = [["","",""],["","",""],["","",""]]

const readline = require('node:readline');

const rl = readline.createInterface({input: process.stdin, output: process.stdout});

function display_in_console() {
    for (let i = 0; i <= 2; i++) {
        console.log(board[i])
    }
}

function check_for_win(x, y) {
    if (![x, y] in [[0,1], [1,0], [2,1], [1,2]]) {
        if ((board[0][0] === board[1][1] && board[1][1] === board[2][2] && board[2][2] !== "") || (board[2][0] === board[1][1] && board[1][1] === board[0][2] && board[0][2] !== "")) {
            console.log(board[0][0] + " wins!")
            rl.close();
        }
    }
    for (let i = 0; i < 2; i++) {
        if (board[i][0] === board[i][1] && board[i][1] === board[i][2] && board[i][2] !== "") {
            console.log(board[i][0] + " wins!")
            rl.close();
        }
    }
    for (let i = 0; i < 2; i++) {
        if (board[0][i] === board[1][i] && board[1][i] === board[2][i] && board[2][i] !== "") {
            console.log(board[i][0] + " wins!")
            rl.close();
        }
    }

}

function choose_tile(x,y) {
    if (turn % 2 === 0) {
        board[x][y] = "o"
    }
    else {
        board[x][y] = "x"
    }

    display_in_console()
    check_for_win(x, y)

    return 0;
}

function ask() {
    if (turn > 9) {
        console.log('Game over!');
        rl.close();
        return;
    }

    rl.question("========\n[1, 2, 3]\n[4, 5, 6]\n[7, 8, 9]\nChoose a cell: ", cell => {
        choose_tile(Math.floor((Number(cell) - 1) / 3), (Number(cell) - 1) % 3);
        turn++;
        ask();
    })
}

ask();
