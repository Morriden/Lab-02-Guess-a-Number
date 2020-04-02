import compareNumbers from './javafunction/comparenumbersfunction.js';

//an input of type of number for specifying the guess
const guess = document.getElementById('user-guess');
//a button to submit the guess
const bombButton = document.getElementById('button');
//display for the number of tries remaining
const attemptsLeft = document.getElementById('attempts-left');
//display of guess to high or too low
const highOrLowSpan = document.getElementById('high-or-low');
//display winorlose
const winOrLose = document.getElementById('win-or-lose');



let correctNumber = Math.ceil(Math.random() * 20);
console.log(correctNumber);

let remainCount = 4;

const defuseBomb = () => {
    let userGuess = Number(guess.value);
    const guessResult = compareNumbers(userGuess, correctNumber);
    console.log(userGuess);
    if (guessResult === -1) {
        remainCount--;
        attemptsLeft.textContent = remainCount;
        highOrLowSpan.textContent = 'Your Guess was to low!';
        if (remainCount === 0) {
            document.getElementById('button').disabled = true;
        }
        if (remainCount === 0) {
            winOrLose.textContent = 'The Bomb blew up, try again!';
        }
        //highOrLowSpan.textContent = 'Your guess is to low'
    } else if (guessResult === 0) {
        winOrLose.textContent = 'You defused the bomb!!!';
        //disable game play and winning message
    } else {
        remainCount--;
        attemptsLeft.textContent = remainCount;
        highOrLowSpan.textContent = 'Your guess was to high!';
        if (remainCount === 0) {
            document.getElementById('button').disabled = true;
        }
        if (remainCount === 0) {
            winOrLose.textContent = 'The bomb blew up, try again!';
        }
    }
};

bombButton.addEventListener('click', defuseBomb);