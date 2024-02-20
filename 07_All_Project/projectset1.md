# Project related to DOM

# Solution Code
## Project One - Background Color Change

```Javascript file
console.log('Background Color Switcher')
const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')

buttons.forEach( (button) => {
    button.addEventListener('click', function(e){
        console.log(e.target);
        if (e.target.id === 'grey') {
            body.style.backgroundColor = e.target.id
        }else if (e.target.id === 'white') {
            body.style.backgroundColor = e.target.id
        }else if (e.target.id === 'blue') {
            body.style.backgroundColor = e.target.id
        }else if (e.target.id === 'yellow') {
            body.style.backgroundColor = e.target.id
        }
        
    });
});

```

## Project Two - BMI Calculator

``` Javascript
const form = document.querySelector('form')

form.addEventListener('submit', function(e){
    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results')

    if (height === '' || height < 0 || isNaN(height)) {
        results.innerHTML = `Please enter the valid height ${height}`;
    }else if (weight === '' || weight < 0 || isNaN(weight)) {
        results.innerHTML = `Please enter the valid weight ${weight}`;
    }else {
        const bmi = (weight / ((height * height) / 1000)).toFixed(2)
        results.innerHTML = `<span>${bmi}</span>`;
        if (bmi < 18.6) {
            results.innerHTML = `<span>${bmi}</span>:- You are under weight`;
        }else if (bmi >= 18.6 && bmi <= 24.9){
            results.innerHTML = `<span>${bmi}</span>:- Your weight is Normal`;
        }else if (bmi > 24.9){
            results.innerHTML = `<span>${bmi}</span>:- You are over weight`;
        }
    }
});
```

### Project Three - Digital Clock
``` Javascript
const clock = document.querySelector('#clock');
// const clock = document.getElementById('clock'); // we can use this method also

setInterval( () => {
    let date = new Date();
    // console.log(date.toLocaleTimeString);
    clock.innerHTML = date.toLocaleTimeString();
}, 1000)
```

### Project Four - Guess The Number

``` Javascript
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
        if (numGuess === 10){
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
    guessRemain.innerHTML = `${10 - numGuess}`
    numGuess++;
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
        guessRemain.innerHTML = `${10 - numGuess}`
        userGuess.removeAttribute('disabled')
        startOver.removeChild(p)
        playGame = true
    })
}
```
### Project Five - Unlimited Colors
``` Javascript
// generate random colours

const randomColor = function(){
    const hex = "0123456789ABCDEF"
    // #FFFFFF
    let color = "#"
    for (let i = 0; i <= 5; i++){
        color += hex[Math.floor(Math.random() * 16)]
    }
    return color;
};

// console.log(randomColor());

let intervalId;

const startColorChange = function () {
    if(!intervalId){
        intervalId = setInterval(changebgcolor, 1000)
    }

    function changebgcolor(){
        document.body.style.backgroundColor = randomColor()
    }
};

const stopColorChange = function () {
    clearInterval(intervalId)
    intervalId = null;
};

document.querySelector('#start').addEventListener('click', startColorChange);
document.querySelector('#stop').addEventListener('click', stopColorChange);
```

### Project Six - Keyboard Check
``` Javascript
const insert = document.getElementById('insert')

window.addEventListener('keydown', (e) => {
    insert.innerHTML = `
    <div class='color'>
    <table>
    <tr>
      <th>Key</th>
      <th>Keycode</th> 
      <th>Code</th>
    </tr>
    <tr>
      <td>${e.key === ' ' ? 'Space' : e.key}</td>
      <td>${e.keyCode}</td> 
      <td>${e.code}</td>
    </tr>
    
  </table>
    </div>
    `
});
```