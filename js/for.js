const pazymiai = [8, 7, 9, 10, 10, 7];

let suma = 0;
const kiekis = pazymiai.length;

console.log(pazymiai);

for (let i = 0; i < pazymiai.length; i++) {
    const pazimys = pazymiai[i];
    suma += pazimys;
}
const average = suma / kiekis;

console.log(`Pazymiu vidurkis yra ${average}`);



// console.log('--------------');



const zodis = 'Menulis';
let isKitosPuses = '';

for (let i = zodis.length - 1; i >= 0; i--) {
    const zodis1 = zodis[i];
    isKitosPuses += zodis1;
}
console.log(zodis, '<-->', isKitosPuses);


console.log('-------------');

/* suskaiciuoti ka gausime susumavus skaicius intervale (imtinai):
(0, 100);
(-70, 30);
*/

const nuo1 = -70;
const iki1 = 30;
let suma1 = 0;

for (let i = nuo1; i <= iki1; i++) {
    suma1 +=i;
    console.log (i, '=>', suma1);
}

console.log('Final:', suma1);


console.log('------------');

const nuo = -70;
const iki = 30;
let suma = 0;

for (let i = nuo; i <= iki; i++) {
    suma += i;
}

console.log('FINAL:', suma);