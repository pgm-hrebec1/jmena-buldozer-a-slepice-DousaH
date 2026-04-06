// ----------------------------------------------------------------------------------------------
// Prirazeni nekolika promennych NAJEDNOU
// 
let data : string[] = ['naplneni', 'nekolika', 'promennych', 'daty', 'zbytek' ];
let mensiData : string[] = ['naplneni', 'nekolika', 'promennych' ];
{
    // POZOR, toto je zajimava finta: mohu z pole naplnit NEKOLIK promennych najednou; 
    // 1. pozice -> 1. promenna, 2. pozice -> 2. promenna atd.
    let [prvni, druha, treti, ctvrta] =  data;

    console.log(`${prvni} ${druha} ${treti} ${ctvrta}`);
}
{
    // OTAZKA: v mensiData neni tolik hodnot: co bude 'ctvrta' ?
    let [prvni, druha, treti, ctvrta] =  mensiData;

    console.log(`${prvni} ${druha} ${treti} ${ctvrta}`);
}
