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
