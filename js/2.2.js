const readlineSync = require('readline-sync')

let current = readlineSync.question("Entrez un chiffre: ")
let min = readlineSync.question("Entrez un chiffre plus petit: ")
let max = readlineSync.question("Entrez un chiffre plus grand: ")

if (min > max){
    console.log("I'm sorry but it appears that you don't know how to use a computer. Check on Google")
}

else if (min < current < max){
    console.log(current)
}
