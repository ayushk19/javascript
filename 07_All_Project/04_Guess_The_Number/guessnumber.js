let randomNumber = parseInt(Math.random() * 10 + 1);

const submit = document.querySelector('#subt');
const userGuess = document.querySelector('#guessField');
const lowHI = document.querySelector('.lowOrHi');
const guessRemain = document.querySelector('.lastResult');
const guessSlot = document.querySelector('.guesses');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let preGuess = []
let numGuess = 1;
let playGame = true;

if (playGame){
    submit.addEventListener('click', function(e){
        e.preventDefault()
        const guess = parseInt(userGuess.value);
        validateGuess(guess)
    });
}

function validateGuess(guess){
    if (isNaN(guess)){
        alert('Please enter a valid number');
    }else if (guess <= 0){
        alert('Please enter number more than 0')
    }else if (guess > 100){
        alert('Please enter number less than 100')
    }else {
        preGuess.push(guess)
        if (numGuess === 11){
            displayGuess(guess);
            displayMessage(`Game Over!, Random number was ${randomNumber}`)
            endGame();
        }else {
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess){
    if (guess === randomNumber){
        displayMessage('You guessed it right')
        endGame();
    }else if (guess < randomNumber){
        displayMessage('Number is too low')
    }else if (guess > randomNumber){
        displayMessage('Number is too high')
    }
}

function displayGuess(guess){
    userGuess.value = '';
    guessSlot.innerHTML += `${guess}, `;
    numGuess++;
    guessRemain.innerHTML = `${11 - numGuess}`
}

function displayMessage(message){
    lowHI.innerHTML = `<h2>${message}</h2>`
}

function endGame(){
    userGuess.value = ''
    userGuess.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML = `<h2 id='newGame'>Start New Game</h2>`
    startOver.appendChild(p)
    playGame = false
    newGame();
}

function newGame(){
    const newGameButton = document.querySelector('#newGame')
    newGameButton.addEventListener('click', function(e){
        randomNumber = parseInt(Math.random() * 10 + 1);
        preGuess = []
        numGuess = 1
        guessSlot.innerHTML = ''
        guessRemain.innerHTML = `${11 - numGuess}`
        userGuess.removeAttribute('disabled')
        startOver.removeChild(p)
        playGame = true
    })
}