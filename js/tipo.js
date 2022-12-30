let primerpoke = parseInt(prompt("Elija su Pokemon 1: Bulbasaur 2: Charmander 3: Squirtle "));
let segundopoke = parseInt(prompt("Elija el Pokemon rival 1: Bulbasaur 2: Charmander 3: Squirtle "));

let atk1 = 40;
let atk2 = 50;
let vida1 = 150;
let vida2 = 150;

if (primerpoke == 1){
    poke1 = "Bulbasaur";
    p1atk2n = "Látigo Cepa";
} else if (primerpoke == 2){
    poke1 = "Charmander";
    p1atk2n = "Ascuas";
} else if (primerpoke == 3){
    poke1 = "Squirtle";
    p1atk2n = "Pistola de agua";
} else {
    alert ("Elección incorrecta");
}

if (segundopoke == 1){
    poke2 = "Bulbasaur";
    p2atk2n = "Látigo Cepa";
} else if (segundopoke == 2){
    poke2 = "Charmander";
    p2atk2n = "Ascuas";
} else if (segundopoke == 3){
    poke2 = "Squirtle";
    p2atk2n = "Pistola de agua";
} else {
    alert ("Elección incorrecta");
}

if (primerpoke == 1 && segundopoke == 3){
    p1efectivo = 1;
} else if (primerpoke == 1 && segundopoke == 2)
    p1efectivo = 2;
    else if (primerpoke == 1 && segundopoke == 1) {
    p1efectivo = 3;
}

if (primerpoke == 2 && segundopoke == 1){
        p1efectivo = 1;
} else if (primerpoke == 2 && segundopoke == 3)
        p1efectivo = 2;
        else if (primerpoke == 2 && segundopoke == 2){
        p1efectivo = 3;
}

if (primerpoke == 3 && segundopoke == 2){
        p1efectivo = 1;
} else if (primerpoke == 3 && segundopoke == 1)
        p1efectivo = 2;
        else if (primerpoke == 3 && segundopoke == 3) {
        p1efectivo = 3;
}

if (segundopoke == 1 && primerpoke == 3){
    p2efectivo = 1;
} else if (segundopoke == 1 && primerpoke == 2)
    p2efectivo = 2;
    else if (segundopoke == 1 && primerpoke == 1) {
    p2efectivo = 3;
}

if (segundopoke == 2 && primerpoke == 1){
        p2efectivo = 1;
} else if (segundopoke == 2 && primerpoke == 3)
        p2efectivo = 2;
        else if (segundopoke == 2 && primerpoke == 2){
        p2efectivo = 3;
}

if (segundopoke == 3 && primerpoke == 2){
        p2efectivo = 1;
} else if (segundopoke == 3 && primerpoke == 1)
        p2efectivo = 2;
        else if (segundopoke == 3 && primerpoke == 3) {
        p2efectivo = 3;
}

function atkefe(atk2){
    return atk2*2;
}

function atknoefe(atk2){
    return atk2/2;
}

alert ("¡¡¡Comienza el duelo!!! "+poke1+ " VS "+poke2);

while (vida1 > 0 && vida2 > 0){
    let turno = parseInt(prompt("Primer Pokemon elija su ataque 1-Placaje 2-"+p1atk2n));
    if (turno == 1){
        vida2 = vida2 - atk1;
    } else if (turno == 2 && p1efectivo == 1 ){
        vida2 = vida2 - atkefe(atk2);
    } else if (turno == 2 && p1efectivo == 2){
       vida2 = vida2 - atknoefe(atk2);
    } else if (turno == 2 && p1efectivo == 3) {
        vida2 = vida2 - atk2;
    } else {
        alert("Ataque incorrecto");
    }

    alert("Segundo Pokemon: "+poke2+" Vida restante: "+vida2);

    let turno2 = parseInt(prompt("Segundo Pokemon elija su ataque 1-Placaje 2-"+p2atk2n));
    if (turno2 == 1){
        vida1 = vida1 - atk1;
    } else if (turno2 == 2 && p2efectivo == 1 ){
        vida1 = vida1 - atkefe(atk2);
    } else if (turno2 == 2 && p2efectivo == 2){
       vida1 = vida1 - atknoefe(atk2);
    } else if (turno2 == 2 && p2efectivo == 3) {
        vida1 = vida1 - atk2;
    } else {
        alert("Ataque incorrecto");
    }
    alert("Primer Pokemon: "+poke1+" Vida restante: "+vida1);
}

if (vida2 <= 0){
    alert("Ganador, primer Pokemon: "+poke1);
} else{
    alert("Ganador segundo Pokemon: "+poke2);
}