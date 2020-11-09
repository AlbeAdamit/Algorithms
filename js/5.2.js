const readlineSync = require('readline-sync');

function askTvSerie(){
    let tvShow = {
        name: readlineSync.question("Name of your favorite show: "),
        "year of production": readlineSync.question("Année de production de ta serie pref : "),
        "casting name": []
    }
    let userNumber = Number.parseInt(readlineSync.question("nombre d'acteurs de la serie : "));
    for (let n = 0; n < userNumber; n++) {
        tvShow["casting name"].push(readlineSync.question("Nom d'un acteur : "))
    }
    console.log(tvShow.name);
    console.log(tvShow["year of production"]);
    console.log(tvShow["casting name"]);
}
askTvSerie();
