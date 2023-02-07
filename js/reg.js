class Entrenador {
    constructor(apellido, nombre, genero) {
        this.apellido = apellido;
        this.nombre = nombre;
        this.genero = genero;
    }
}

nombreP = document.getElementById('nombreP');
apeP = document.getElementById('apeP');
genP = document.getElementsByName('genP');
btnReg = document.getElementById('btnReg');

btnReg.addEventListener("click", registrar);

function registrar() {

    var genval;
    for (var i = 0; i < genP.length; i++) {
        if (genP[i].checked) {
            genval = genP[i].value;
        }
    }
    ent = new Entrenador(apeP.value, nombreP.value, genval);
    console.log(ent);
    const entx = JSON.stringify(ent);
    console.log(entx);
    localStorage.setItem('Entrenador', entx);
}