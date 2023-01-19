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
let control1 = false;

do {
    let primerpoke = parseInt(prompt("Elija su Pokemon 1: Bulbasaur 2: Charmander 3: Squirtle "));

    if (primerpoke == 1) {
        poke1 = new Pokeobj('Bulbasaur', 175, 'Placaje', 'Látigo cepa', 40, 50, 'Hierba');
        control1 = false;
    } else if (primerpoke == 2) {
        poke1 = new Pokeobj('Charmander', 160, 'Placaje', 'Ascuas', 50, 60, 'Fuego');
        control1 = false;
    } else if (primerpoke == 3) {
        poke1 = new Pokeobj('Squirtle', 180, 'Placaje', 'Pistola de agua', 45, 55, 'Agua');
        control1 = false;
    } else {
        alert("Elección incorrecta");
        control1 = true;
    }
} while (control1 == true);
// Fin Elección Primer Pokemon

alert("Pokemon 1 \n Nombre: " + poke1.nombre + "\n Tipo: " + poke1.tipo + "\n Vida: " + poke1.vida + "\n Ataque 1: " + poke1.natk1 + "\n Ataque 2: " + poke1.natk2);

// Elección Segundo Pokemon
let control2 = false;

do {
    let segundopoke = parseInt(prompt("Elija el Pokemon rival 1: Bulbasaur 2: Charmander 3: Squirtle "));

    if (segundopoke == 1) {
        poke2 = new Pokeobj('Bulbasaur', 175, 'Placaje', 'Látigo cepa', 40, 50, 'Hierba');
        control2 = false;
    } else if (segundopoke == 2) {
        poke2 = new Pokeobj('Charmander', 160, 'Placaje', 'Ascuas', 50, 60, 'Fuego');
        control2 = false;
    } else if (segundopoke == 3) {
        poke2 = new Pokeobj('Squirtle', 180, 'Placaje', 'Pistola de agua', 45, 55, 'Agua');
        control2 = false;
    } else {
        alert("Elección incorrecta");
        control2 = true;
    }
} while (control2 == true);
// Fin Elección Segundo Pokemon

alert("Pokemon 2 \n Nombre: " + poke2.nombre + "\n Tipo: " + poke2.tipo + "\n Vida: " + poke2.vida + "\n Ataque 1: " + poke2.natk1 + "\n Ataque 2: " + poke2.natk2);

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
            atk = atk / 1.5;
            alert("El ataque no es muy efectivo...");
        }
        if (t2 == "Agua") {
            atk = atk * 1.5;
            alert("¡El ataque es muy efectivo!");
        }
    }

    if (t1 == "Fuego") {
        if (t2 == "Hierba") {
            atk = atk * 1.5;
            alert("¡El ataque es muy efectivo!");
        }
        if (t2 == "Fuego") {
            atk = atk;
        }
        if (t2 == "Agua") {
            atk = atk / 1.5;
            alert("El ataque no es muy efectivo...");
        }

    }

    if (t1 == "Agua") {
        if (t2 == "Hierba") {
            atk = atk / 1.5;
            alert("El ataque no es muy efectivo...");
        }
        if (t2 == "Fuego") {
            atk = atk * 1.5;
            alert("¡El ataque es muy efectivo!");
        }
        if (t2 == "Agua") {
            atk = atk;
        }
    }
    return atk;
}

// fin

alert("¡¡¡Comienza el duelo!!! " + poke1.nombre + " VS " + poke2.nombre);
const logPoke1 = [];

while (poke1.vida > 0 && poke2.vida > 0) {

    // Primer Poke
    let turno = parseInt(prompt("Primer Pokemon elija su ataque 1- " + poke1.natk1 + " 2- " + poke1.natk2));
    if (turno == 1) {
        poke2.vida = poke2.vida - placaje(poke1.atk1);
        // Guardo en array usando una variable
        logPoke1.push(placaje(poke1.atk1));
    } else if (turno == 2) {
        poke2.vida = poke2.vida - ae(poke1.tipo, poke2.tipo, poke1.atk2);
        // Guardo en array usando una variable
        logPoke1.push(ae(poke1.tipo, poke2.tipo, poke1.atk2));
    } else {
        alert("Ataque incorrecto");
    }
    if (poke2.vida <= 0) {
        alert("Segundo Pokemon: " + poke2.nombre + " Vida restante: " + Math.trunc(poke2.vida));
        break;
    }

    alert("Segundo Pokemon: " + poke2.nombre + " Vida restante: " + Math.trunc(poke2.vida));

    // Segundo Poke
    turno2 = getRandomInt(1, 3);
    if (turno2 == 1) {
        poke1.vida = poke1.vida - poke2.atk1;
        alert("Pokemon 2 " + poke2.nombre + " uso " + poke2.natk1);
    } else if (turno2 == 2) {
        alert("Pokemon 2 " + poke2.nombre + " uso " + poke2.natk2);
        poke1.vida = poke1.vida - ae(poke2.tipo, poke1.tipo, poke2.atk2);
    } else {
        alert("Ataque incorrecto");
    }
    alert("Primer Pokemon: " + poke1.nombre + " Vida restante: " + Math.trunc(poke1.vida));
}

if (poke2.vida <= 0) {
    alert("Ganador, primer Pokemon: " + poke1.nombre);
} else {
    alert("Ganador segundo Pokemon: " + poke2.nombre);
}

//log de cantidad de turnos
console.log(logPoke1.length);

//log de daño causado por los ataques
for (let index = 0; index < logPoke1.length; index++) {
    const element = logPoke1[index];
    console.log(element);
    
}
