
turn = Math.random() * (1 - 2) + 1;

function rollDice() {
    return Math.random() * (6 - 1) + 1;
} 

function turnEnd() {
    if (turn === 1) {
        turn = 2
    } else (
        turn = 1
    )
}

