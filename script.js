'use strict';

const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

const diceEl = document.querySelector('.dice');

score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

let currentScore = 0;
let currentPlayer = 0;
let scores = [0, 0];
let playing = true;


btnRoll.addEventListener('click', function() {
    if(playing) {

    const dice = Math.trunc(Math.random() * 6) + 1;
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    if(dice !== 1) {
        currentScore += dice;
        document.getElementById(`current--${currentPlayer}`).textContent = currentScore;
        console.log(currentScore);
    } else {
        document.getElementById(`current--${currentPlayer}`).textContent = 0;
        currentScore = 0;
        currentPlayer = currentPlayer === 0 ? 1 : 0;
        player0El.classList.toggle('player--active');
        player1El.classList.toggle('player--active');
    
    }
 } 
})

btnHold.addEventListener('click', function() {
    if(playing) {

    scores[currentPlayer] += currentScore;
    document.getElementById(`score--${currentPlayer}`).textContent = scores[currentPlayer];
    console.log(scores[currentPlayer]);

    if(scores[currentPlayer] >= 20) {
        playing = false;
        diceEl.classList.add('hidden');
        document.querySelector(`.player--${currentPlayer}`).classList.add('player--winner');
        document.querySelector(`.player--${currentPlayer}`).classList.remove('player--active');

    } else {
        document.getElementById(`current--${currentPlayer}`).textContent = 0;
        currentScore = 0;
        currentPlayer = currentPlayer === 0 ? 1 : 0;
        player0El.classList.toggle('player--active');
        player1El.classList.toggle('player--active');
    }
}
})

btnNew.addEventListener('click', function(){
    playing = true;
    score0El.textContent = 0;
    score1El.textContent = 0;
    currentScore = 0;
    scores = [0, 0];
    current0El.textContent = 0;
    current1El.textContent = 0;
    currentPlayer = 0;
    player0El.classList.add('player--active');
    player0El.classList.remove('player--winner');
    player1El.classList.remove('player--winner');
    diceEl.classList.add('hidden');

})

