const p1 = { //cream un obiect pentru tine ceea ce ne trebuie la player1
    score: 0,
    button: document.querySelector('#p1Button'),
    display: document.querySelector('#p1Display')
}
const p2 = { //cream un obiect pentru tine ceea ce ne trebuie la player2
    score: 0,
    button: document.querySelector('#p2Button'),
    display: document.querySelector('#p2Display')
}

const resetButton = document.querySelector('#reset');
const winningScoreSelect = document.querySelector('#playto');
let winningScore = 3;
let isGameOver = false;

function updateScores(player, opponent) { //player obiect, opponent obiect
    if (!isGameOver) {
        player.score += 1; //player(oricare player)
        if (player.score === winningScore) {
            isGameOver = true;
            player.display.classList.add('has-text-success');
            opponent.display.classList.add('has-text-danger');
            player.button.disabled = true;
            opponent.button.disabled = true;
        }
        player.display.textContent = player.score;
    }
}


p1.button.addEventListener('click', function () { //cand apasam pe butonul p1 updatam scorul
    updateScores(p1, p2) 
})
p2.button.addEventListener('click', function () { //cand apasam p2, p1 devine oponent
    updateScores(p2, p1)
})


winningScoreSelect.addEventListener('change', function () {
    winningScore = parseInt(this.value);
    reset();
})

resetButton.addEventListener('click', reset)

function reset() {
    isGameOver = false;
    for (let p of [p1, p2]) { //iteram pentru a aplica logica programului celor 2 playeri
        p.score = 0;
        p.display.textContent = 0;
        p.display.classList.remove('has-text-success', 'has-text-danger');
        p.button.disabled = false;
    }
}
