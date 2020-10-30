const readlineSync = require('readline-sync');

let number = readlineSync.question("What is you favorite number ? ");

while (number != 42) {
    console.log("Are you sure ?");
    number = readlineSync.question("What is you favorite number ? ");
}   console.log("You favorite number is "+number+ " ! ")