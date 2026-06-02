
import * as fs from 'fs';
import * as path from 'path';
import * as process from 'process';

// Precteme obsah souboru, jehoz jmeno se v launch.json predava jako parametr:
// argv[0] je "node", interpret javascriptu
// argv[1] je nazev scriptu - tento program
// argv[2] je prvni SKUTECNY parametr programu, jak je zapsany v "args" v launch.json
let fname : string = process.argv[2];

// UKOL: projdete si dokumentaci path.join() a path.basename(). Zformulujte co provadi vypocet promenne "outname".
// Zjisteni napiste do komentare, vlastnimi slovy vysvetlete, co vypocet se jmenem "provede", a jake nove jmeno "vymysli".


let outname : string = path.join('vystup', 'jmena', path.basename(fname).replace(".in", ".out"));
let obsah : string = fs.readFileSync(fname).toString();  // precte se CELY soubor

// Rozdeli soubor na jednotlive radky
let lines : string[] = obsah.split('\n');

// Tyto promenne je treba spocitat, na konci se vypisi, a zapisi do vystupniho souboru.
let nejvickratJmeno : string = '';
let nejvickrat : number = 0;

// -----------------------------------
// NAPISTE VLASTNI PROGRAM SEM
// -----------------------------------

lines.shift()
lines.sort()
let nejvetsijcislo : number = 0
let nejvetsij : string = ""
let pocetS : number = 0
let poslednij : string = ""
//nejvetsijcislo = cislo kolikrát tam bylo to jmeno
//nejvetsij = jmeno ktere tam bylo nejvicekrat
//pocetS = pocet jmen ktere ted nachazime (poseldni)
//poslednij = jmeno ktere jsme nasli jako posledni
//j = jmeno ktere jsem ted nasli (jestli se shoduje s posledni j tak pocetS++)
for(let index : number = 0; index < lines.length ; index++) {

let j : string = lines[index]


if(j === poslednij) {
pocetS ++

}else{
    if (nejvetsijcislo < pocetS) {
        nejvetsij = poslednij
        nejvetsijcislo = pocetS
    }
    poslednij = j
    pocetS = 1
}
}
if (nejvetsijcislo < pocetS) {
    nejvetsij = poslednij
    nejvetsijcislo = pocetS
}


// Zapiseme na vystup pozadovany vysledek: ktere jmeno, a kolikrat se vyskytuje
console.log(`${nejvickratJmeno} ${nejvickrat}`);
fs.mkdirSync(path.dirname(outname), { recursive : true});
fs.writeFileSync(outname, `${nejvickratJmeno} ${nejvickrat}\n`);
