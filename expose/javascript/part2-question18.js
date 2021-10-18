let d = new Date();
let time = d.toLocaleTimeString();
console.log(time);

let tickDelay = 1000;
let tickNumber = 30;

//important part
let crID = setInterval(() => {
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
}, tickDelay);

setTimeout(() => clearTimeout(crID), tickDelay * tickNumber);