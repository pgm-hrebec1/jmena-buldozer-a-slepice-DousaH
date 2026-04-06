
import * as fs from 'fs';
import * as path from 'path';
import * as process from 'process';

// Precteme obsah souboru, jehoz jmeno se v launch.json predava jako parametr:
// argv[0] je "node", interpret javascriptu
// argv[1] je nazev scriptu - tento program
// argv[2] je prvni SKUTECNY parametr programu, jak je zapsany v "args" v launch.json
let fname : string = process.argv[2];

// UKOL: projdete si dokumentaci path.join() a path.basename(). Zformulujte co provadi vypocet promenne "outname"
let outname : string = path.join('vystup', 'jmena', path.basename(fname).replace(".in", ".out"));
let obsah : string = fs.readFileSync(fname).toString();  // precte se CELY soubor

// Rozdeli soubor na jednotlive radky
let lines : string[] = obsah.split('\n');

// NOVE: Record<klic, hodnota> je "mapa": vyda hodnotu podle klice. Podobne jako pole "vyda" hodnotu podle pozice,
// ale tady lze jako "klic" pouzit jakykoliv udaj. Zapisuje a cte se uplne stejne jako do pole pomoci [],
// ale funkce pro posun a pridani (push, pop,...) se pouzit nedaji.
let poctyJmen : Record<string, number> = {};

let pocet : number = Number(lines.shift());

// -----------------------------------
// NAPISTE VLASTNI PROGRAM SEM
// -----------------------------------

fs.mkdirSync(path.dirname(outname), { recursive : true});
fs.writeFileSync(outname, '');

// -----------------------------------
// NAPISTE VYPSANI JMEN A JEJICH CETNOSTI DO SOUBORU SEM
// -----------------------------------
