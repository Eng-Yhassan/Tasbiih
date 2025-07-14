const Counter = document.querySelector("#Counter");
const incriment = document.querySelector("#incriment");
const Decriment = document.querySelector("#Decriment");
const Reset = document.querySelector("#Reset");

let startValue = 0;



// incriment

incriment.addEventListener("click", () => {
    startValue++;
    Counter.innerHTML = startValue;
    // color change when is equal to 10
    if (startValue === 10) {
        Counter.style.color = 'red'
    }
    else {
        Counter.style.color = 'black'
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
    // color change when is equal to 10
    if (startValue === 10) {
        Counter.style.color = 'red'
    }
    else {
        Counter.style.color = 'black'
    }

});

// Reset
Reset.addEventListener("click", () => {
    startValue = 0;

    Counter.innerHTML = startValue
})