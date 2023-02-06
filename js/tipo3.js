// Objeto
class Pokeobj {
    constructor(nombre, vida, natk1, natk2, atk1, atk2, tipo) {
        this.nombre = nombre;
        this.vida = vida;
        this.natk1 = natk1;
        this.natk2 = natk2;
        this.atk1 = atk1;
        this.atk2 = atk2;
        this.tipo = tipo;
    }
}
// Fin Objeto

// Elección Primer Pokemon

let p1 = document.querySelector("#Bulba");
let p2 = document.querySelector("#Char");
let p3 = document.querySelector("#Squi");

p1.addEventListener("click", poke1);
p1.addEventListener("click", poke2);

p2.addEventListener("click", poke1);
p2.addEventListener("click", poke2);

p3.addEventListener("click", poke1);
p3.addEventListener("click", poke2);

var pokemon1;

function poke1(e){
let pe = e.target.value;
pok1 = document.getElementById("pok1");
if (pe == "Bulbasaur"){
    pokemon1 = new Pokeobj('Bulbasaur', 175, 'Placaje', 'Látigo cepa', 40, 50, 'Hierba');
    pok1.innerHTML = `<p>Pokemon 1 ${pokemon1.nombre}</p><img src="./img/bulb.png"><p>Tipo: ${pokemon1.tipo}</p>Vida: ${pokemon1.vida}<p>Ataque 1: ${pokemon1.natk1}</p><p>Ataque 2: ${pokemon1.natk2}</p>`;
} else if (pe == "Charmander"){
    pokemon1 = new Pokeobj('Charmander', 160, 'Placaje', 'Ascuas', 50, 60, 'Fuego');
    pok1.innerHTML = `<p>Pokemon 1 ${pokemon1.nombre}</p><img src="./img/char.png"><p>Tipo: ${pokemon1.tipo}</p>Vida: ${pokemon1.vida}<p>Ataque 1: ${pokemon1.natk1}</p><p>Ataque 2: ${pokemon1.natk2}</p>`;
}else if (pe == "Squirtle"){
    pokemon1 = new Pokeobj('Squirtle', 180, 'Placaje', 'Pistola de agua', 45, 55, 'Agua');
    pok1.innerHTML = `<p>Pokemon 1 ${pokemon1.nombre}</p><img src="./img/squi.png"><p>Tipo: ${pokemon1.tipo}</p>Vida: ${pokemon1.vida}<p>Ataque 1: ${pokemon1.natk1}</p><p>Ataque 2: ${pokemon1.natk2}</p>`;
}
console.log(pokemon1);
}


// Fin Elección Primer Pokemon

// Random para Poke2


function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

function poke2(){
pok2 = document.getElementById("pok2");
let p2 = getRandomInt(1,4);
if (p2 == 1){
    pokemon2 = new Pokeobj('Bulbasaur', 175, 'Placaje', 'Látigo cepa', 40, 50, 'Hierba');
    pok2.innerHTML = `<p>Pokemon 2 ${pokemon2.nombre}</p><img src="./img/bulb.png"><p>Tipo: ${pokemon2.tipo}</p>Vida: ${pokemon2.vida}<p>Ataque 1: ${pokemon2.natk1}</p><p>Ataque 2: ${pokemon2.natk2}</p>`;
} else if (p2 == 2){
    pokemon2 = new Pokeobj('Charmander', 160, 'Placaje', 'Ascuas', 50, 60, 'Fuego');
    pok2.innerHTML = `<p>Pokemon 2 ${pokemon2.nombre}</p><img src="./img/char.png"><p>Tipo: ${pokemon2.tipo}</p>Vida: ${pokemon2.vida}<p>Ataque 1: ${pokemon2.natk1}</p><p>Ataque 2: ${pokemon2.natk2}</p>`;
}else if (p2 == 3){
    pokemon2 = new Pokeobj('Squirtle', 180, 'Placaje', 'Pistola de agua', 45, 55, 'Agua');
    pok2.innerHTML = `<p>Pokemon 2 ${pokemon2.nombre}</p><img src="./img/squi.png"><p>Tipo: ${pokemon2.tipo}</p>Vida: ${pokemon2.vida}<p>Ataque 1: ${pokemon2.natk1}</p><p>Ataque 2: ${pokemon2.natk2}</p>`;
}
console.log(pokemon2);
}
// Fin Random2


// Calcula ataque efectivo o no
function atkefe(atk2) {
    return atk2 * 1.5;
}

function atknoefe(atk2) {
    return atk2 / 1.5;
}
// Fin Cálculo

// Random para Poke2
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}
// Fin Random

// Placaje
function placaje(pla) {
    return pla*1;
}

// Efectivo o no

function ae(t1, t2, atk) {
    if (t1 == "Hierba") {
        if (t2 == "Hierba") {
            atk = atk;
        }
        if (t2 == "Fuego") {
            atk = Math.trunc(atk / 1.5);
        }
        if (t2 == "Agua") {
            atk = Math.trunc(atk * 1.5);
        }
    }

    if (t1 == "Fuego") {
        if (t2 == "Hierba") {
            atk = Math.trunc(atk * 1.5);
        }
        if (t2 == "Fuego") {
            atk = atk;
        }
        if (t2 == "Agua") {
            atk = Math.trunc(atk / 1.5);
        }

    }

    if (t1 == "Agua") {
        if (t2 == "Hierba") {
            atk = Math.trunc(atk / 1.5);
        }
        if (t2 == "Fuego") {
            atk = Math.trunc(atk * 1.5);
        }
        if (t2 == "Agua") {
            atk = atk;
        }
    }
    return atk;
}

// fin

duelo = document.getElementById("duelo");

duelo.addEventListener("click", Clog);
duelo.addEventListener("click", batalla);


function Clog(){
    const logP = document.getElementById('log');
    logP.innerHTML = "";
}

const logPoke1 = [];

function batalla(){  
alert("¡¡¡Comienza el duelo!!! " + pokemon1.nombre + " VS " + pokemon2.nombre);


while (pokemon1.vida > 0 && pokemon2.vida > 0) {

    const np = document.createElement('p');
    const logP = document.getElementById('log');
    const atq1 = document.getElementById('atq1');
    const atq2 = document.getElementById('atq2');

    atq1.addEventListener("click", turno1);
    atq2.addEventListener("click", turno2)

    
    // Primer Poke
    if (turno == 1) {
        pokemon2.vida = pokemon2.vida - placaje(pokemon1.atk1);
        const np = document.createElement('p'); 
        np.innerHTML = `Pokemon 1 ${pokemon1.nombre} uso ${pokemon1.natk1} Daño: ${placaje(pokemon1.atk1)}<p>Pokemon 2 vida restante ${pokemon2.vida}</p>`;
        logP.insertAdjacentElement('beforeend', np);
        // Guardo en array usando una variable
        logPoke1.push(placaje(pokemon1.atk1));
    } else if (turno == 2) {
        pokemon2.vida = pokemon2.vida - ae(pokemon1.tipo, pokemon2.tipo, pokemon1.atk2);
        const np = document.createElement('p'); 
        np.innerHTML = `Pokemon 1 ${pokemon1.nombre} uso ${pokemon1.natk2} Daño: ${ae(pokemon1.tipo, pokemon2.tipo, pokemon1.atk2)}<p>Pokemon 2 vida restante: ${pokemon2.vida}</p>`;
        logP.insertAdjacentElement('beforeend', np);
    } else {
        alert("Ataque incorrecto");
    }
    if (pokemon2.vida <= 0) {
        pokemon2.vida = 0;
        const np = document.createElement('p')
        np.innerHTML = `Pokemon 2 ${pokemon2.nombre} no puede seguir luchando`;
        logP.insertAdjacentElement('beforeend', np);
        break;
    }

    // Segundo Poke
    turno2 = getRandomInt(1, 3);
    if (turno2 == 1) {
        pokemon1.vida = pokemon1.vida - placaje(pokemon2.atk1);
        const np = document.createElement('p'); 
        np.innerHTML = `Pokemon 2 ${pokemon2.nombre} uso ${pokemon2.natk1} Daño: ${placaje(pokemon2.atk1)}<p>Pokemon 1 vida restante ${pokemon1.vida}</p>`;
        logP.insertAdjacentElement('beforeend', np);
    } else if (turno2 == 2) {
        pokemon1.vida = pokemon1.vida - ae(pokemon2.tipo, pokemon1.tipo, pokemon2.atk2);
        const np = document.createElement('p'); 
        np.innerHTML = `Pokemon 2 ${pokemon2.nombre} uso ${pokemon2.natk2} Daño: ${ae(pokemon2.tipo, pokemon2.tipo, pokemon2.atk2)}<p>Pokemon 1 vida restante: ${pokemon1.vida}</p>`;
        logP.insertAdjacentElement('beforeend', np);
    } else {
        alert("Ataque incorrecto");
    }
    if (pokemon1.vida <=0){
        pokemon1.vida = 0;
        const np = document.createElement('p')
        np.innerHTML = `Pokemon 1 ${pokemon1.nombre} no puede seguir luchando`;
        logP.insertAdjacentElement('beforeend', np);
    }
}

if (pokemon2.vida <= 0) {
    alert("Ganador, primer Pokemon: " + pokemon1.nombre);
} else {
    alert("Ganador segundo Pokemon: " + pokemon2.nombre);
}
}
//log de cantidad de turnos
console.log(logPoke1.length);

//log de daño causado por los ataques
for (let index = 0; index < logPoke1.length; index++) {
    const element = logPoke1[index];
    console.log(element);
    
}
//fin
