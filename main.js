const Counter = document.querySelector("#Counter");
const incriment = document.querySelector("#incriment");
const Decriment = document.querySelector("#Decriment");
const Reset = document.querySelector("#Reset");

let startValue = 0;



// incriment

incriment.addEventListener("click", () => {
    // color change when is equal to 10
    if (startValue === 9) {
        Counter.style.color = 'red'
    }
    else {
        Counter.style.color = 'black'
    }
    startValue++;
    Counter.innerHTML = startValue;
});


// Decriment
Decriment.addEventListener("click", () => {
    if (startValue >= 1) {
        startValue--
    }
    else {
        startValue = 0;
    }
    // color change when is equal to 10
    if (startValue === 10) {
        Counter.style.color = 'red'
    }
    else {
        Counter.style.color = 'black'
    }
    Counter.innerHTML = startValue;
});

// Reset
Reset.addEventListener("click", () => {
    startValue = 0;

    Counter.innerHTML = startValue
})