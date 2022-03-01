
let glScorePlayer1 = document.getElementById('global-score1');
let tpScorePlayer1 = document.getElementById('temp-score1');
let glScorePlayer2 = document.getElementById('global-score2');
let tpScorePlayer2 = document.getElementById('temp-score2');
let newG = document.getElementById('new');
let roll = document.getElementById('roll');
let result = document.getElementById('result')
let end = document.getElementById('end');
let info = document.getElementById('game-info');
let victory = document.getElementById('victory');
let currentTurn = document.getElementById('current-turn');
let rules = document.getElementById('rules')
let rulesBtn = document.getElementById('rules-btn')
let rulesClosing = document.getElementById('close');

let turn;
let tempScore = 0;
let globalScore1 = 0;
let globalScore2 = 0;

function firstPlayer() {
    turn = Math.round(Math.random() * (2 - 1) + 1);
    info.style.background = "rgb(5, 149, 60)";
    info.textContent = `Le joueur ${turn} joue en premier !`;
}

function newGame() {
    tempScore = 0;
    globalScore1 = 0;
    globalScore2 = 0;
    tpScorePlayer1.textContent = tempScore;
    tpScorePlayer2.textContent = tempScore;
    glScorePlayer1.textContent = globalScore1;
    glScorePlayer2.textContent = globalScore2;
    firstPlayer ()
    victory.style.display = "none";
}

function rollDice() {
    return Math.round(Math.random() * (6 - 1) + 1);
} 

function tempScoring() {
    info.style.background = "rgb(5, 149, 60)";
    info.textContent = `Le joueur ${turn} est en train de jouer...`;
    let rollResult = rollDice();
    result.textContent = rollResult;
    if (rollResult !== 1) {
        result.style.color = "black";
        tempScore += rollResult;
        if (turn === 1) {
            tpScorePlayer1.textContent = tempScore;
        } else {
            tpScorePlayer2.textContent = tempScore;
        }   
    } else {
        tempScore = 0;
        tpScorePlayer1.textContent = tempScore;
        tpScorePlayer2.textContent = tempScore;
        result.style.color = "red";
        info.style.background = "rgb(220, 47, 21)";
        info.textContent = `Dé 1 : Pas de chance ! Le joueur ${turn} marque 0 point et passe son tour !`;
        if (turn === 1) {
            turn = 2;
            turnCheking();
        } else {
            turn = 1;
            turnCheking();
        }
    }
}

function turnEnd() {
    if (turn === 1) {
        globalScore1 += tempScore;
        glScorePlayer1.textContent = globalScore1;
        info.style.background = "rgb(68, 107, 186)";
        info.textContent = `Le joueur 1 a marqué ${tempScore}, la main passe au joueur 2 !`
        tempScore = 0;
        tpScorePlayer1.textContent = tempScore;
        victoryCheking();
        turn = 2;
        turnCheking();
    } else {
        globalScore2 += tempScore;
        glScorePlayer2.textContent = globalScore2;
        info.style.background = "rgb(68, 107, 186)";
        info.textContent = `Le joueur 2 a marqué ${tempScore}, la main passe au joueur 1 !`
        tempScore = 0;
        tpScorePlayer2.textContent = tempScore;
        victoryCheking();
        turn = 1;
        turnCheking();
    }   
}

// Condition de victoire
function victoryCheking() {
    if (globalScore1 >= 100 || globalScore2 >= 100) {
        victory.style.display = "flex";
        victory.textContent = `Le joueur ${turn} a atteint 100 points en premier et remporte la victoire !`;
    }
}

// current turn
function turnCheking() {
    if (turn === 1) {
        currentTurn.textContent = "←";
    } else {
        currentTurn.textContent = "→";
    }
} 

newG.addEventListener('click', newGame);
roll.addEventListener('click', tempScoring);
end.addEventListener('click', turnEnd);

rulesBtn.addEventListener('click', () => {
    if (rules.style.display === "inline") {
        rules.style.display = "none";
    } else {
        rules.style.display = "inline"
    }
});

rulesClosing.addEventListener('click', () => {
    rules.style.display = "none";
});


firstPlayer();
turnCheking();