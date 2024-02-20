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