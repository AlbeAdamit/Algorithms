const readlineSync = require('readline-sync');

let min, max, current;
min = readlineSync.question("Indicate your minimum number :");
max = readlineSync.question("Indicate your maximum number :");
current = readlineSync.question("Indicate your current number :");

if (min > max) {
    console.log("It appears that you don't know how tu use a computer, try again later.");
}
    else if ((max > current) && (current > min)) {
    console.log(current);
}