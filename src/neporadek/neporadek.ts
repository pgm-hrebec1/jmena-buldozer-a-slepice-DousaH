
import * as fs from 'fs';
import * as path from 'path';
import * as process from 'process';

// Precteme obsah souboru, jehoz jmeno se v launch.json predava jako parametr:
// argv[0] je "node", interpret javascriptu
// argv[1] je nazev scriptu - tento program
// argv[2] je prvni SKUTECNY parametr programu, jak je zapsany v "args" v launch.json
let fname : string = process.argv[2];

let obsah : string = fs.readFileSync(fname).toString();  // precte se CELY soubor
let outname : string = path.join('vystup', 'neporadek', path.basename(fname).replace(".in", ".out"));

let lines : string[] = obsah.split('\n');

let vstupBuldozeru : string = lines[0];
let vstupKrabice : string = lines[1];

let poziceBuldozeru = null; // Nahradit skutecnou inicializaci pozice
let poziceKrabice = null;   // Nahradit skutecnou inicializaci pozice


// -----------------------------------
// NAPISTE VLASTNI PROGRAM SEM
// -----------------------------------



// Zapiseme jeste do vystupniho souboru
// UKOL: proc je tu pouzito path.dirname(), co to znamena ? Vysvetleni zapiste do komentare:
fs.mkdirSync(path.dirname(outname), { recursive : true});

// -----------------------------------
// VYPSAT Pozici buldozeru a pozici krabice 
// -----------------------------------
fs.writeFileSync(outname, ''); // NAHRADIT skutecnym textem obsahujicim pozici buldozeru
fs.appendFileSync(outname, ''); // NAHRADIT skutecnym textem obsahujicim pozici krabice.
