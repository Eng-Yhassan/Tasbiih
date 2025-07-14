const Counter2 = document.querySelector("#Counter2");
const Counter = document.querySelector("#Counter");
const incriment = document.querySelector("#incriment");
const Decriment = document.querySelector("#Decriment");
const Reset = document.querySelector("#Reset");

let startValue = 0;


// incriment

incriment.addEventListener("click", () => {
    startValue++;
    Counter.innerHTML = startValue;
    // // color change when is equal to 10
    // if (startValue === 10) {
    //     Counter.style.color = 'red';
    // }
    // else {
    //     Counter.style.color = 'black'
    // }


    //    Creating emoji and color
    if (startValue == 10) {
        Counter2.innerHTML = '✅'
        Counter.style.color = 'red';
    }
    else if (startValue == 20) {
        Counter2.innerHTML = '✌️'
        Counter.style.color = 'red';
    }
    else if (startValue == 30) {
        Counter2.innerHTML = '😍'
        Counter.style.color = 'red';
    }
    else if (startValue == 40) {
        Counter2.innerHTML = '🤣'
        Counter.style.color = 'red';
    }
    else if (startValue == 50) {
        Counter2.innerHTML = '❤️'
        Counter.style.color = 'red';
    }
    else if (startValue == 100) {
        Counter2.innerHTML = '💕'
        Counter.style.color = 'red';
    }
    else {
        Counter2.innerHTML = ''
        Counter.style.color = 'black';
    }


});


// Decriment
Decriment.addEventListener("click", () => {
    if (startValue >= 1) {
        startValue--
    }
    else {
        startValue = 0;
    }
    Counter.innerHTML = startValue;
    // // color change when is equal to 10
    // if (startValue === 10) {
    //     Counter.style.color = 'red'
    // }
    // else {
    //     Counter.style.color = 'black'
    // }


    //    Creating emoji and color
    if (startValue == 10) {
        Counter2.innerHTML = '✅'
        Counter.style.color = 'red';
    }
    else if (startValue == 20) {
        Counter2.innerHTML = '✌️'
        Counter.style.color = 'red';
    }
    else if (startValue == 30) {
        Counter2.innerHTML = '😍'
        Counter.style.color = 'red';
    }
    else if (startValue == 40) {
        Counter2.innerHTML = '🤣'
        Counter.style.color = 'red';
    }
    else if (startValue == 50) {
        Counter2.innerHTML = '❤️'
        Counter.style.color = 'red';
    }
    else if (startValue == 100) {
        Counter2.innerHTML = '💕'
        Counter.style.color = 'red';
    }
    else {
        Counter2.innerHTML = ''
        Counter.style.color = 'black';
    }


});

// Reset
Reset.addEventListener("click", () => {
    startValue = 0;

    Counter.innerHTML = startValue
})