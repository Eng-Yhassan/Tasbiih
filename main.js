const Counter=document.querySelector("#Counter");
const incriment=document.querySelector("#incriment");
const Decriment=document.querySelector("#Decriment");
const Reset=document.querySelector("#Reset");

let startValue=0;

incriment.addEventListener("click",()=>{
    startValue ++;
    Counter.innerHTML=startValue;
});

Decriment.addEventListener("click",()=>{
    if(startValue>=1){
        startValue --
    }
    else{
        startValue =0;
    }
    Counter.innerHTML=startValue;
});

Reset.addEventListener("click",()=>{
    startValue=0;

    Counter.innerHTML=startValue
})