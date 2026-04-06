// ----------------------------------------------------------------------------------------------
// Asociativni pole, mapa.
// 
// Vytvori "mapu", ktera pro klic (string) vyda cislo. K klicum (stringum) se daji take cisla prirazovat.
// Klice nejsou nijak omezene, pokud bychom chteli jen urcite klice (a dalsi zakazat), neni Record to spravne.
// V <> jsou tak zvane typove parametry / parametry typu.
let poctyJmen : Record<string, number> = {};

poctyJmen['Karin'] = 5;

// Protoze mapa je Javascript objekt, muzeme mu "jednoduse" pridat novou slozku, klic:
poctyJmen.Adam = 1;


// Ale s klici, ktere nejsou identifikatory to nejde, musi se pouzit []
poctyJmen["Adam Smith"] = 3;

// NOVE: vyjmenujeme vsechny prvky pole. for ... of. Pozor, OF, ne IN.
for (let s of ['Jenda', 'Boris', 'Lucka', 'Iveta']) {
    // Pokud jmeno ma UZ nejaky pocet uvedeny, zvetsime jej:
    if (poctyJmen[s]) {
        poctyJmen[s]++;
    } else {
        // jinak jej vidime poprve:
        poctyJmen[s] = 1;
    }

    // UKOL: Proc je zde zavorka ?
    poctyJmen[s] = (poctyJmen[s] ?? 0) + 1;
}

// Mapa se chova jako obycejny objekt, jde s nim tak pracovat.
// Muzeme zjistit pocet polozek:
console.log("Pocet jmen je: " + Object.keys(poctyJmen).length);

// Muzeme vypsat jednotlive polozky - v poli budou dalsi pole, kazde bude obsahovat na pozici 0 klic, a na pozici 1 hodnotu:
console.log("Polozky: " + Object.entries(poctyJmen));
let entries = Object.entries(poctyJmen);

// Muzeme POSTUPNE prochazet vsechny polozky:
for (let [klic, hodnota] of entries) {
    console.log("Klic: " + klic + ", hodnota: " + hodnota);
}

// NOVE: vyjmenujeme vsechny klice mapy. for ... in. Pozor, IN ne OF.
for (let s in poctyJmen) {
    // vypise text, pospojovany z kousku pomoci +
    console.log(s + " => " + poctyJmen[s]);
    // OPAKOVANI: udela totez, pomoci sablony textu - "interpolace vyrazu"
    console.log(`${s} => ${poctyJmen[s]}`);
}

// POZOROVANI: co se stane, kdyz spletu for OF a for IN:
for (let s in ['Jenda', 'Boris', 'Lucka', 'Iveta']) {
    console.log(s);
}

// CHYBA: Record se neda "jen tak" prochazet, protoze kazdy "zaznam" ma 2 slozky - klic a hodnotu:
// for (let s of poctyJmen) {
//     console.log(s);
// }

// NOVE: odstraneni prvku z mapy. Jinak nez u pole, nemame splice(). Pouzijeme specialni prikaz delete.
delete poctyJmen['Karin'];
// POZOROVANI: Karin uz v mape neni:
for (let s in poctyJmen) {
    console.log(`${s} => ${poctyJmen[s]}`);
}
console.log();

// POZOR: pokud zname primo hodnotu klice, ta je konstanta a vypada jako identifikator, muzeme udelat primo 
delete poctyJmen.Boris;
for (let s in poctyJmen) {
    console.log(`${s} => ${poctyJmen[s]}`);
}

