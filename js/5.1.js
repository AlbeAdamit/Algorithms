const readlineSync = require('readline-sync');

function askTvSerie(){
    let tvSerie = {
        name: readlineSync.question("Name of your favorite show: "),
        "year of production": readlineSync.question("Année de production de ta serie pref : "),
        "casting name": []
    };
    let userNumber = Number.parseInt(readlineSync.question("nombre d'acteurs de la serie : "));
    for (let n = 0; n < userNumber; n++) {
        tvSerie["casting name"].push(readlineSync.question("Nom d'un acteur : "))
    }
    console.log(tvSerie.name);
    console.log(tvSerie["year of production"]);
    console.log(tvSerie["casting name"]);
}
askTvSerie();