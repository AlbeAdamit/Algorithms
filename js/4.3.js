/* let min = 0;
let max = 10000000;

function rand10(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function multiRand(n) {
    while (n-- != 0) {
        console.log(rand10(min, max));
    }
}
n.push(multiRand(n));
console.log(n) */

let myarray = [];
function rand10() {
    return Math.floor(Math.random() * 10);
}

function multiRand(n) {
    let number
    while (n-- != 0) {
        number =  myarray.push(rand10());
    }
    return number;
}

let n = 10;
myarray.push(multiRand(n));
console.log(myarray);