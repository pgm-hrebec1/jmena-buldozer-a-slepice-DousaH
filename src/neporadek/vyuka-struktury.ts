//==========================================================
// TVORBA STRUKTUR
//==========================================================

// typ, ktery ma 2 slozky: x a y
interface Pozice {
    x : number;
    y : number;
}

// deklarace promenne daneho typu:
let p : Pozice;

// Prirazeni: Vsimnete si: k oddeleni se pouziva CARKA, ne ;
p = { x : 1, y : 2 };

// Pristup na slozky:
let slozkaX : number = p.x;
let slozkaY : number = p.y;
console.log(slozkaX);

// Muzeme samozrejme i zapisovat
p.x = 20;
// Vypise celou strukturu, vsechny slozky:
console.log(p);

//==========================================================
// Nepovinne polozky ve strukturach
//==========================================================
// tento typ ma 3 slozky
interface Osoba {
    jmeno : string;
    // vek je nepovinny ?: number znamena totez, co : number | undefined
    vek?: number;
    // bydliste je take nepovinne
    bydliste?: string;
    // otec osoby, muze byt neznamy (undefined). V tomhle pripade i nebyt uvedeny (null)
    otec?: Osoba | null;
}

// staci: jedina povinna polozka je jmeno.
let svata : Osoba = {
    jmeno: 'Svata'
}

// Muzeme vyplnit jen bydliste
let jirik : Osoba = {
    jmeno: 'Jirik', bydliste: 'Hrebec'
};

// Muzeme vyplnit JEN otce
let honzik : Osoba = {
    jmeno: 'Honzik',
    otec: {
        jmeno: 'Jan'
    }
};

console.log(svata);
console.log(jirik);
console.log(honzik);
console.log(honzik.otec);

// UKOL: zamyslet se nad vyznamem undefined (nedefinovano) a null (prazdno, smazano, neexistuje).

//==========================================================
// Prace s undefined
//==========================================================
let q : Pozice | undefined;
// CHYBA: q ted nema zadnou hodnotu, nepriradim:
// q.x = 1;
q = p;

function x () : Pozice | undefined {
    return undefined;
}
// Takova "finta", jak priradit undefined, aniz by prekladac vedel, ze je to undefined. 
// Zkuste tipnout proc to prekladac "zmate"
let r : Pozice | undefined = x();

// Nemuzu PRIMO na r.x, PROTOZE by r mohlo byt undefined. Nasledujicic radek je CHYBA:
// console.log(r.x);

// musim se nejdriv zeptat:
if (r) {
    // TADY uz prekladac, diky platnost podminky r (tzn. r NENI undefined) vi, ze v r neco je.
    console.log(r.x);
}

// ?. je "podmineny pristup". Vysledek je undefined, pokud je pred ?. undefined/null; jinak hodnota slozky.
// Pouziva se namisto if-u vysetrujicich undefined.
console.log(q?.x);
console.log(r?.x);

let o : Osoba | undefined;
if (true) {
    o = honzik;
}

let o2 : Osoba = {
    jmeno: 'Vitek',
    otec: null
};

// Muzeme i retezit za sebe.
console.log("Jmeno Jirikova otce: " + jirik?.otec?.jmeno);
console.log(`Honzikuv otec: ${o?.otec}`);
console.log("Jmeno Honzikova otce: " + o?.otec?.jmeno);
// ?. funguje i pro null
console.log("Vitkuv otec: " + o2?.otec);
console.log("Jmeno vitkova otce: " + o2?.otec?.jmeno);

// Muzeme samozrejme udelat i pole struktur:
let osoby : Osoba[] = [
    honzik, jirik, o2, o
];
console.log(osoby);