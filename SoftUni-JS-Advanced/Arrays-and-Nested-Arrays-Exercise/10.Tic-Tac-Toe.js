function ticTcToe(arr = []) {
    let area =
        [['false', 'false', 'false'],
        ['false', 'false', 'false'],
        ['false', 'false', 'false']
        ];
    let winnerSymbol;
    let isWin = false;
    let isFull = false;
    let firstPlayer = 'X';
    for (let i = 0; i < arr.length; i++) {
        let curr = arr[i].split(' ');
        let row = curr[0];
        let col = curr[1];

        if (checkPlace(row, col)) {

            if (firstPlayer == 'X' && checkInput(row, col)) {
                area[row][col] = 'X';
                firstPlayer = 'O';
            } else if (checkInput(row, col)) {
                area[row][col] = 'O';
                firstPlayer = 'X';
            }

            for (let i = 0; i < 3; i++) {
                if (checkForWinnerInRowAndCol(area, i) || checkForWinnerInDiagonals(area)) {
                    isWin = true;
                    break;
                }
            }

            if (!area.some(x => x.some(a => a == 'false'))) {
                isFull = true;
            }
            if (isWin) {
                console.log(`Player ${winnerSymbol} wins!`);
                printArea(area);
                break;
            }
            if (isFull) {
                console.log("The game ended! Nobody wins :(");
                printArea(area);
                break;
            }

        }
        else {
            console.log("This place is already taken. Please choose another!");
            continue;
        }


    };
    function checkInput(row, col) {
        if (row > 3 || row < 0 || col < 0 || col > 3) {
            return false;
        } else {
            return true;
        }
    }

    function checkPlace(row, col) {
        if (area[row][col] != 'false') {
            return false;
        } else {
            return true;
        }
    }
    function printArea(matrix) {
        for (let row of matrix) {
            console.log(row.join('\t'));
        }
    }
    function checkForWinnerInRowAndCol(matrix, index) {
        if (matrix[0][index] == 'X' && matrix[1][index] == 'X' && matrix[2][index] == 'X') {
            winnerSymbol = 'X';
            return true;
        }
        if (matrix[0][index] == 'O' && matrix[1][index] == 'O' && matrix[2][index] == 'O') {
            winnerSymbol = 'O';
            return true;
        }
        if (matrix[index][0] == 'X' && matrix[index][1] == 'X' && matrix[index][2] == 'X') {
            winnerSymbol = 'X';
            return true;
        }
        if (matrix[index][0] == 'O' && matrix[index][1] == 'O' && matrix[index][2] == 'O') {
            winnerSymbol = 'O';
            return true;
        }
    }
    function checkForWinnerInDiagonals(matrix) {
        if (matrix[0][0] == 'X' && matrix[1][1] == 'X' && matrix[2][2] == 'X') {
            winnerSymbol = 'X';
            return true;
        }
        if (matrix[0][0] == 'O' && matrix[1][1] == 'O' && matrix[2][2] == 'O') {
            winnerSymbol = 'O';
            return true;
        }
        if (matrix[2][0] == 'X' && matrix[1][1] == 'X' && matrix[0][2] == 'X') {
            winnerSymbol = 'X';
            return true;
        }
        if (matrix[2][0] == 'O' && matrix[1][1] == 'O' && matrix[0][2] == 'O') {
            winnerSymbol = 'O';
            return true;

        }

    };
}

ticTcToe(["0 0",
    "0 0",
    "1 1",
    "0 1",
    "1 2",
    "0 2",
    "2 2",
    "1 2",
    "2 2",
    "2 1"]);
