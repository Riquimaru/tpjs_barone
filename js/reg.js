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

//API Pokemon
listpok = document.getElementById('listpok');
fetch('https://pokeapi.co/api/v2/pokemon?limit=9&offset=0')
    .then((resp) => resp.json())
    .then((dato) => {
        for (let ele of dato["results"]){
            let pokeinf = document.createElement('div');
            pokeinf.className = 'col-12 col-md-4 p-2'
            let pokecard = document.createElement('div')
            pokecard.className = 'card text-white bg-dark'
            pokecard.innerHTML = `
            <img src="./img/lista/${ele.name}.png">
            <hr><p>Nombre: ${ele.name}</p>
            `
            listpok.appendChild(pokeinf);
            pokeinf.appendChild(pokecard);
        }
    })

//Fin API Pokemon
