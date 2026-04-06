
// ----------------------------------------------------------------------------------------------
// PRACE s null nebo undefined
let a : number | undefined;
let b : number | undefined = 1;
let c : number;

// tohle je CHYBA: c neumoznuje undefined, a nema nic prirazeno -> nemohu cist
// if (c > 0) {

// }

// SPRAVNE: a muze byt undefined - a take je, protoze nema nic prirazeno
if (!a) {
    console.log("a nema hodnotu");
}
if (b) {
    console.log("b ma hodnotu");
}

// NOVE: ?? je specialni operator: a ?? b znamena: "kdyz je a null nebo undefined, pouzij b; jinak a"
// Vypise 20, protoze a je undefined
console.log(a ?? 20);

// Vypise 1, protoze b uz hodnotu ma
console.log(b ?? 20);

// Muzeme pouzit take starsi a || b, to je "logicke nebo"
// - pokud je a "pravda", to znamena: cislo jine nez 0, neprazdny text, true, nebo pole (i prazdne), je vysledkem tato hodnota
//   NIKOLIV true, ale prave ta hodnota
// - pokud je a "nepravda", to znamena: cokoliv jineho nez pravda, je vysledkem prave tato hodnota
// Vsimnete si, ze nevypisuje true / false, ale ciselne hodnoty.
console.log(a || 20);
console.log(b || 20);

// Operace NEGACE: z "falsy" (null, undefined, 0, "") udela true, z jinych hodnot false. Vysledek je VZDY boolean.
let cc = '';
console.log(!cc);
cc = 'a';
console.log(!cc);

// Pravdivostni hodnotu mohu vynutit, dvojitou(!) negaci. Vysledkem negace je VZDY true / false
let pravdaA = !!a;
let pravdaB = !!b;
console.log(pravdaA);
console.log(pravdaB);

// UKOL: co se stane, kdyz provedu
let d : number | undefined = 0;
console.log(d || "nedefinovano");
// a jak bych to mel spravit tak, aby se "nedefinovano" vypsalo opravdu JEN kdyz bude "d" undefined ? Ted 
// tvrdi, ze d je nedefinovane, i kdyz je v nem hodnota 0.
