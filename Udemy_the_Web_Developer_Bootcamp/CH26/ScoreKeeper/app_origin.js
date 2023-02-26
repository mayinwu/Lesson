const scoreEle1 = document.querySelector('#score1');
const scoreEle2 = document.querySelector('#score2');
const maxScoreEle = document.querySelector('.maxScore');
const btnEleP1 = document.querySelector('#player1');
const btnEleP2 = document.querySelector('#player2');
const btnEleReset = document.querySelector('#reset');

let score1 = 0;
let score2 = 0;
let maxScore = Number(maxScoreEle.options[maxScoreEle.selectedIndex].value);

maxScoreEle.addEventListener('change', () => {
    maxScore = maxScoreEle.options[maxScoreEle.selectedIndex].value;
    reset();
});

btnEleReset.addEventListener('click', () => reset());

btnEleP1.addEventListener('click', () => {
    score1++;
    scoreEle1.innerText = score1;

    checkWinner();
});

btnEleP2.addEventListener('click', () => {
    score2++;
    scoreEle2.innerText = score2;

    checkWinner();
});

function reset(){
    score1 = 0;
    score2 = 0;
    scoreEle1.innerText = 0;
    scoreEle1.classList.remove('winner', 'loser');
    scoreEle2.innerText = 0;
    scoreEle2.classList.remove('winner', 'loser');
    btnEleP1.disabled = false;
    btnEleP2.disabled = false;
}

function checkWinner(){
    if(score1 == maxScore){
        scoreEle1.classList.add('winner');
        scoreEle2.classList.add('loser');
        btnEleP1.disabled = true;
        btnEleP2.disabled = true;
    }
    else if(score2 == maxScore){
        scoreEle1.classList.add('loser');
        scoreEle2.classList.add('winner');
        btnEleP1.disabled = true;
        btnEleP2.disabled = true;
    }
}