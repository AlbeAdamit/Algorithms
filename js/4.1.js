const readlineSync = require('readline-sync')

let width = readlineSync.question("What is the width of the rectangle ? ");
let lenght = readlineSync.question("What is the lenght of the rectangle ? ");

function calcSurface(width, lenght) {
    console.log(width * lenght);
}
calcSurface(width, lenght);