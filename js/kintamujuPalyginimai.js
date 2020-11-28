const a = 33;
const b = 22;

if (a > b) {
    console.log('Pomidoras');
}
else {
    console.log('Bandykite dar karta');
}

const c = 15;
const d = 20;

if (c < d) {
    console.log('Pomidoras');
}
else {
    console.log('Bandykite dar karta');
}

const e = 10;
const f = 10;

if (e == f) {
    console.log('Pomidoras');
}
else {
    console.log('Bandykite dar karta');
}

const g = 7;
const h = 9;

if (g !== h) {
    console.log('Pomidoras');
}
else {
    console.log('Bandykite dar karta');
}

const i = 13;
const j = 13;

if (i >= j) {
    console.log('Pomidoras');
}
else {
    console.log('Bandykite dar karta');
}

const k = 2;
const l = 3;

if (k <= l) {
    console.log('Pomidoras');
}
else {
    console.log('Bandykite dar karta');
}

/* teksto kintamieji */

const menuo = 'kov';

if (menuo === 'sau') {
    console.log('Sausis');
} else if (menuo === 'vas') {
   console.log('Vasaris');
} else if (menuo === 'kov') {
    console.log ('Kovas');
} else {
    console.log ('Turbut kitas menuo');
}


const sarasas = [353, 6789];

const pirmasSkaicius = sarasas[0];
const antrasSkaicius = sarasas[1];

if (pirmasSkaicius > antrasSkaicius) {
    const rezultatas = `${pirmasSkaicius} yra daugiau uz ${antrasSkaicius}`;
    console.log(rezultatas);
} else {
    const rezultatas = `${pirmasSkaicius} yra ne daugiau uz ${antrasSkaicius}`;
    console.log(rezultatas);
}