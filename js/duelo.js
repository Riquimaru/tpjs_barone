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

//Entrenador

let tf = 0; //Se usa para ataques efectivos o no efectivos

//Toma los datos de registro
const entren = localStorage.getItem('Entrenador');
const entjson = JSON.parse(entren);

entrhtml = document.getElementById("entr");
entrhtml.innerHTML = `<h2>DATOS </h2><p>Nombre: ${entjson.nombre}</p><p>Apellido: ${entjson.apellido}</p><p>Genero: ${entjson.genero}</p>`;

enpic = document.getElementById("entpic");

if (entjson.genero === "Hombre") {
    enpic.innerHTML = `<img src="./img/entH.png">`
} else if (entjson.genero === "Mujer") {
    enpic.innerHTML = `<img src="./img/entM.png">`
}

// Fin perfil entrenador

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

function poke1(e) {
    let pe = e.target.value;
    pok1 = document.getElementById("pok1");
    if (pe == "Bulbasaur") {
        pokemon1 = new Pokeobj('Bulbasaur', 180, 'Placaje', 'Látigo cepa', 40, 50, 'Hierba');
        pok1.innerHTML = `<p>Pokemon 1 ${pokemon1.nombre}</p><img src="./img/bulb.png"><p>Tipo: ${pokemon1.tipo}</p>Vida: ${pokemon1.vida}<p>Ataque 1: ${pokemon1.natk1}</p><p>Ataque 2: ${pokemon1.natk2}</p>`;
    } else if (pe == "Charmander") {
        pokemon1 = new Pokeobj('Charmander', 170, 'Placaje', 'Ascuas', 40, 60, 'Fuego');
        pok1.innerHTML = `<p>Pokemon 1 ${pokemon1.nombre}</p><img src="./img/char.png"><p>Tipo: ${pokemon1.tipo}</p>Vida: ${pokemon1.vida}<p>Ataque 1: ${pokemon1.natk1}</p><p>Ataque 2: ${pokemon1.natk2}</p>`;
    } else if (pe == "Squirtle") {
        pokemon1 = new Pokeobj('Squirtle', 190, 'Placaje', 'Pistola de agua', 45, 55, 'Agua');
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


function poke2() {
    pok2 = document.getElementById("pok2");
    let p2 = getRandomInt(1, 4);
    if (p2 == 1) {
        pokemon2 = new Pokeobj('Bulbasaur', 175, 'Placaje', 'Látigo cepa', 40, 50, 'Hierba');
        pok2.innerHTML = `<p>Pokemon 2 ${pokemon2.nombre}</p><img src="./img/bulb.png"><p>Tipo: ${pokemon2.tipo}</p>Vida: ${pokemon2.vida}<p>Ataque 1: ${pokemon2.natk1}</p><p>Ataque 2: ${pokemon2.natk2}</p>`;
    } else if (p2 == 2) {
        pokemon2 = new Pokeobj('Charmander', 160, 'Placaje', 'Ascuas', 50, 60, 'Fuego');
        pok2.innerHTML = `<p>Pokemon 2 ${pokemon2.nombre}</p><img src="./img/char.png"><p>Tipo: ${pokemon2.tipo}</p>Vida: ${pokemon2.vida}<p>Ataque 1: ${pokemon2.natk1}</p><p>Ataque 2: ${pokemon2.natk2}</p>`;
    } else if (p2 == 3) {
        pokemon2 = new Pokeobj('Squirtle', 180, 'Placaje', 'Pistola de agua', 45, 55, 'Agua');
        pok2.innerHTML = `<p>Pokemon 2 ${pokemon2.nombre}</p><img src="./img/squi.png"><p>Tipo: ${pokemon2.tipo}</p>Vida: ${pokemon2.vida}<p>Ataque 1: ${pokemon2.natk1}</p><p>Ataque 2: ${pokemon2.natk2}</p>`;
    }
    console.log(pokemon2);
}
// Fin Random2

// Random para eleccion ataque Poke2
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}
// Fin Random2

// Placaje/ataque 1
function placaje(pla) {
    var tf = 0;
    return pla * 1;
}

// Efectivo o no mensaje

function msjefe(tf) {
    if (tf == 2) {
        setTimeout(() => {
            const logP = document.getElementById('log');
            const np = document.createElement('p');
            np.innerHTML = `<hr><b>EL ATAQUE ES MUY EFECTIVO</b><hr>`;
            logP.insertAdjacentElement('beforeend', np);
        }, 500);
    }
}


function msjnoefe(tf) {
    if (tf == 1) {
        setTimeout(() => {
            const logP = document.getElementById('log');
            const np = document.createElement('p');
            np.innerHTML = `<hr><b>EL ATAQUE NO ES MUY EFECTIVO</b><hr>`;
            logP.insertAdjacentElement('beforeend', np);
        }, 500);
    }
}

//Fin efectivo o no mensaje


//Calculo daño ataque 2
function ae(t1, t2, atk) {
    if (t1 == "Hierba") {
        if (t2 == "Hierba") {
            atk = atk;
            tf = 0;
        }
        if (t2 == "Fuego") {
            atk = Math.trunc(atk / 1.5);
            tf = 1;
        }
        if (t2 == "Agua") {
            atk = Math.trunc(atk * 1.5);
            tf = 2;
        }
    }

    if (t1 == "Fuego") {
        if (t2 == "Hierba") {
            atk = Math.trunc(atk * 1.5);
            tf = 2;
        }
        if (t2 == "Fuego") {
            atk = atk;
            tf = 0;
        }
        if (t2 == "Agua") {
            atk = Math.trunc(atk / 1.5);
            tf = 1;
        }

    }

    if (t1 == "Agua") {
        if (t2 == "Hierba") {
            atk = Math.trunc(atk / 1.5);
            tf = 1;
        }
        if (t2 == "Fuego") {
            atk = Math.trunc(atk * 1.5);
            tf = 2;
        }
        if (t2 == "Agua") {
            atk = atk;
            tf = 0;
        }
    }
    return atk;
}

// fin ataque2

//Funciones de ataque 1 y 2 de poke2

function atkp2(t) {
    const logP = document.getElementById('log');
    if (t == 1 && pokemon2.vida > 0) {
        pokemon1.vida = pokemon1.vida - placaje(pokemon2.atk1);
        setTimeout(() => {
            const np = document.createElement('p');
            np.innerHTML = `Pokemon 2 <b>${pokemon2.nombre}</b> uso <b>${pokemon2.natk1}</b> Daño: ${placaje(pokemon2.atk1)}<p>Pokemon 1 vida restante ${pokemon1.vida}</p><hr>`;
            logP.insertAdjacentElement('beforeend', np);
        }, 500);
    }
    if (t == 2 && pokemon2.vida > 0) {
        pokemon1.vida = pokemon1.vida - ae(pokemon2.tipo, pokemon1.tipo, pokemon2.atk2);
        setTimeout(() => {
            const np = document.createElement('p');
            np.innerHTML = `Pokemon 2 <b>${pokemon2.nombre}</b> uso <b>${pokemon2.natk2}</b> Daño: ${ae(pokemon2.tipo, pokemon2.tipo, pokemon2.atk2)}<p>Pokemon 1 vida restante: ${pokemon1.vida}</p><hr>`;
            logP.insertAdjacentElement('beforeend', np);
        }, 500);
        msjefe(tf);
        msjnoefe(tf);

    }
}

//fin ataques poke2

//dom y funcion de batalla

duelo = document.getElementById("duelo");

duelo.addEventListener("click", Clog);
duelo.addEventListener("click", batalla);


//libreria usada para victoria o derrota
function victoria() {
    setTimeout(() => {
        Swal.fire({
            background: '#0a5706',
            color: 'white',
            title: 'Victoria!',
            text: 'Tu Pokemon ha ganado el duelo',
            imageUrl: './img/ash_v.jpg',
            imageWidth: 300,
            imageHeight: 250,
            imageAlt: 'Victoria',
        })
    }, 2500)
}

function derrota() {
    setTimeout(() => {
        Swal.fire({
            background: '#570606',
            color: 'white',
            title: 'Derrota',
            text: 'Tu Pokemon ha sido derrotado',
            imageUrl: './img/ash_d.jpg',
            imageWidth: 300,
            imageHeight: 250,
            imageAlt: 'Derrota',
        })
    }, 2500)
}

// Fin libreria


// Borrar el log
function Clog() {
    const logP = document.getElementById('log');
    logP.innerHTML = "";
}

function batalla() {
    const logP = document.getElementById('log');
    const atq1 = document.getElementById("atq1");
    const atq2 = document.getElementById("atq2");
    atq1.addEventListener("click", turnoA);
    atq2.addEventListener("click", turnoB);

    atq1.value = `${pokemon1.natk1}`;
    atq2.value = `${pokemon1.natk2}`;

    const np = document.createElement('p');
    np.innerHTML = `Pokemon 1 ${pokemon1.nombre} VS Pokemon 2 ${pokemon2.nombre}</p><hr><p>COMIENZA EL DUELO</p><hr>`;
    logP.insertAdjacentElement('beforeend', np);

    function turnoA() {
        if (pokemon1.vida > 0 && pokemon2.vida > 0) {
            pokemon2.vida = pokemon2.vida - placaje(pokemon1.atk1);
            const np = document.createElement('p');
            np.innerHTML = `Pokemon 1 <b>${pokemon1.nombre}</b> uso <b>${pokemon1.natk1}</b> Daño: ${placaje(pokemon1.atk1)}<p>Pokemon 2 vida restante ${pokemon2.vida}</p><hr>`;
            logP.insertAdjacentElement('beforeend', np);
            if (pokemon2.vida > 0) {
                turno2 = getRandomInt(1, 3);
                atkp2(turno2);
            }
            if (pokemon2.vida <= 0) {
                setTimeout(() => {
                    const np = document.createElement('p')
                    np.innerHTML = `Ganador Pokemon 1 <b>${pokemon1.nombre}</b>`;
                    np.innerHTML = `Pokemon 2 <b>${pokemon2.nombre}</b> no puede seguir luchando`;
                    logP.insertAdjacentElement('beforeend', np);
                }, 700)
                victoria();
            } else if (pokemon1.vida <= 0) {
                setTimeout(() => {
                    const np = document.createElement('p')
                    np.innerHTML = `Ganador Pokemon 2 <b>${pokemon2.nombre}</b>`;
                    np.innerHTML = `Pokemon 1 <b>${pokemon1.nombre}</b> no puede seguir luchando`;
                    logP.insertAdjacentElement('beforeend', np);
                }, 700)
                derrota();
            }
        } else {
            const np = document.createElement('p')
            np.innerHTML = `<b>DUELO FINALIZADO</b>`;
            logP.insertAdjacentElement('beforeend', np);
        }
    }


    function turnoB() {
        if (pokemon1.vida > 0 && pokemon2.vida > 0) {
            const logP = document.getElementById('log');
            pokemon2.vida = pokemon2.vida - ae(pokemon1.tipo, pokemon2.tipo, pokemon1.atk2);
            msjefe(tf);
            msjnoefe(tf);
            const np = document.createElement('p');
            np.innerHTML = `Pokemon 1 <b>${pokemon1.nombre}</b> uso <b>${pokemon1.natk2}</b> Daño: ${ae(pokemon1.tipo, pokemon2.tipo, pokemon1.atk2)}<p>Pokemon 2 vida restante: ${pokemon2.vida}</p><hr>`;
            logP.insertAdjacentElement('beforeend', np);
            tf = 0;
            if (pokemon2.vida > 0) {
                turno2 = getRandomInt(1, 3);
                atkp2(turno2);
            }
            if (pokemon2.vida <= 0) {
                setTimeout(() => {
                    const np = document.createElement('p')
                    np.innerHTML = `Ganador Pokemon 1 <b>${pokemon1.nombre}</b>`;
                    np.innerHTML = `Pokemon 2 <b>${pokemon2.nombre}</b> no puede seguir luchando`;
                    logP.insertAdjacentElement('beforeend', np);
                }, 700)
                victoria();
            } else if (pokemon1.vida <= 0) {
                setTimeout(() => {
                    const np = document.createElement('p')
                    np.innerHTML = `Ganador Pokemon 2 <b>${pokemon2.nombre}</b>`;
                    np.innerHTML = `Pokemon 1 <b>${pokemon1.nombre}</b> no puede seguir luchando`;
                    logP.insertAdjacentElement('beforeend', np);
                }, 700)
                derrota();
            }
        } else {
            const np = document.createElement('p')
            np.innerHTML = `<b>DUELO FINALIZADO</b>`;
            logP.insertAdjacentElement('beforeend', np);
        }
    }
}


//fin
