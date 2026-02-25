let turn = 1;
let board = [["","",""],["","",""],["","",""]]

function display_in_console() {
    for (let i = 0; i <= 2; i++) {
        console.log(board[i])
    }
}

function check_for_win() {
    for (let i = 0; i < 3; i++) {
        if (board[i][0] !== "" && board[i][0] === board[i][1] && board[i][1] === board[i][2]) {
            document.getElementById("textbox").innerHTML = board[i][0].toUpperCase() + " Wins! Click Reset.";
            return true;
        }
    }

    for (let i = 0; i < 3; i++) {
        if (board[0][i] !== "" && board[0][i] === board[1][i] && board[1][i] === board[2][i]) {
            document.getElementById("textbox").innerHTML = board[0][i].toUpperCase() + " Wins! Click Reset.";
            return true;
        }
    }

    if (board[0][0] !== "" && board[0][0] === board[1][1] && board[1][1] === board[2][2]) {
        document.getElementById("textbox").innerHTML = board[0][0].toUpperCase() + " Wins! Click Reset.";
        return true;
    }

    if (board[0][2] !== "" && board[0][2] === board[1][1] && board[1][1] === board[2][0]) {
        document.getElementById("textbox").innerHTML = board[0][2].toUpperCase() + " Wins! Click Reset.";
        return true;
    }

    return false;
}

function reset() {
    board = [["","",""],["","",""],["","",""]]
    for (let i = 1; i < 10; i++) {
        let cell_value = "cell_" + i.toString();
        document.getElementById(cell_value).style.display = "none";
    }
    document.getElementById("textbox").innerHTML = "Board Reset!";
    turn = 1;
}

function choose_tile(x,y) {
    if (turn % 2 === 0) {
        board[x][y] = "o"
        let cell_value = "cell_" + (x*3 + y + 1).toString();
        document.getElementById(cell_value).setAttribute('src', 'assets/nought.png')
        document.getElementById(cell_value).style.display = "block";
    }
    else {
        board[x][y] = "x"
        let cell_value = "cell_" + (x*3 + y + 1).toString();
        document.getElementById(cell_value).setAttribute('src', 'assets/cross.png')
        document.getElementById(cell_value).style.display = "block";
    }

    turn++;

    display_in_console();
    check_for_win(x, y);

    return 0;
}
