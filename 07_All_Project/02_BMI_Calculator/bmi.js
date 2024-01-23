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