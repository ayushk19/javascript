const clock = document.querySelector('#clock');
// const clock = document.getElementById('clock'); // we can use this method also

setInterval( () => {
    let date = new Date();
    // console.log(date.toLocaleTimeString);
    clock.innerHTML = date.toLocaleTimeString();
}, 1000)