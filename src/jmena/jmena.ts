
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


// Zapiseme na vystup pozadovany vysledek: ktere jmeno, a kolikrat se vyskytuje
console.log(`${nejvickratJmeno} ${nejvickrat}`);
fs.mkdirSync(path.dirname(outname), { recursive : true});
fs.writeFileSync(outname, `${nejvickratJmeno} ${nejvickrat}\n`);
