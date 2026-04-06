
import * as fs from 'fs';
import * as path from 'path';
import * as process from 'process';

// Precteme obsah souboru, jehoz jmeno se v launch.json predava jako parametr:
// argv[0] je "node", interpret javascriptu
// argv[1] je nazev scriptu - tento program
// argv[2] je prvni SKUTECNY parametr programu, jak je zapsany v "args" v launch.json
let fname : string = process.argv[2];

let outname : string = path.join('vystup', 'slepice', path.basename(fname).replace(".in", ".out"));
let obsah : string = fs.readFileSync(fname).toString();  // precte se CELY soubor

let lines : string[] = obsah.split('\n');

let lihnuti : number;
let snaseni: number;
let konec : number;
let celkemSlepic : number = 0;

// -----------------------------------
// NAPISTE VLASTNI PROGRAM SEM
// -----------------------------------

console.log(celkemSlepic);

fs.mkdirSync(path.dirname(outname), { recursive : true});
fs.writeFileSync(outname, `${celkemSlepic}\n`);

