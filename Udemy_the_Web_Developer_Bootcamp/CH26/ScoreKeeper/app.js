const player1 = 
{
    scoreEle: document.querySelector('#score1'),
    btn: document.querySelector('#player1'),
    score: 0
}

const player2 = 
{
    scoreEle: document.querySelector('#score2'),
    btn: document.querySelector('#player2'),
    score: 0
}

const maxScoreEle = document.querySelector('.maxScore');
const btnEleReset = document.querySelector('#reset');

let maxScore = Number(maxScoreEle.options[maxScoreEle.selectedIndex].value);
let isGameOver = false;

maxScoreEle.addEventListener('change', () => {
    maxScore = maxScoreEle.options[maxScoreEle.selectedIndex].value;
    reset();
});

btnEleReset.addEventListener('click', () => reset());

player1.btn.addEventListener('click', () => {
    updateScore(player1, player2);
});

player2.btn.addEventListener('click', () => {
    updateScore(player2, player1);
});

function reset(){
    [player1, player2].forEach(player => {
        player.scoreEle.innerText = 0;
        player.scoreEle.classList.remove('winner', 'loser');
        player.btn.disabled = false;
        player.score = 0;
    });

    isGameOver = false;
}

function updateScore(player, opponent){
    if(!isGameOver){
        player.score++;

        if(player.score == maxScore){
            player.scoreEle.classList.add('winner');
            opponent.scoreEle.classList.add('loser');
            player.btn.disabled = true;
            opponent.btn.disabled = true;
            isGameOver = true;
        }

        player.scoreEle.innerText = player.score;
    }
}