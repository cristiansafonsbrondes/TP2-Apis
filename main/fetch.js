const $main = document.querySelector("main");
const $grid = document.getElementById("grid");
const $grid2 = document.getElementById("grid2");

fetch("https://hp-api.onrender.com/api/characters").then((respuesta) => respuesta.json()).then((data) => {
    const personajes = data;
    console.log(personajes);


const persConFoto = personajes.filter((personaje) => {
    if (personaje.image !== "") {
        return personaje;
    }});

const persSinFoto = personajes.filter((personaje) => {
        if (personaje.image == "") {
            return personaje;
        }});

console.log(persConFoto);
console.log(persSinFoto);

    persConFoto.forEach((persConFoto) => {
        $grid.innerHTML += `<div class="tarjetas"><div class="parteA"><h4>${persConFoto.name}</h4><img src="${persConFoto.image}" alt="imagen de ${persConFoto.name}"></div>
        <div class="parteB"><h4>Description</h4>
        <li>Gender: <strong>${persConFoto.gender}</strong></li>
        <li>HairColour: <strong>${persConFoto.hairColour}</strong></li>
        <li>Species:  <strong>${persConFoto.species}</strong></li>
        <li>Date of Birth: <strong>${persConFoto.dateOfBirth}</strong></li>
        <li>Ancestry:  <strong>${persConFoto.ancestry}</strong></li>
        <li>Patronus: <strong>${persConFoto.patronus}</strong></li>
        <li>House:  <strong>${persConFoto.house}</strong></li><hr>
        <li id="actor">Actor:  <strong>${persConFoto.actor}</strong></li></div>`;
    });

    persSinFoto.forEach((persSinFoto) => {
        $grid2.innerHTML += `<div class="tarjetas2">
        <div class="parteC"><h4>${persSinFoto.name}</h4>
        <li><strong>Gender:</strong>  ${persSinFoto.gender}</li>
        <li><strong>HairColour:</strong>  ${persSinFoto.hairColour}</li>
        <li><strong>Species:</strong>  ${persSinFoto.species}</li>
        <li><strong>Date of Birth:</strong>  ${persSinFoto.dateOfBirth}</li>
        <li><strong>Ancestry:</strong>  ${persSinFoto.ancestry}</li>
        <li><strong>Patronus:</strong>  ${persSinFoto.patronus}</li>
        <li><strong>House:</strong>  ${persSinFoto.house}</li><hr>
        <li id="actor"><strong>Actor</strong>: ${persSinFoto.actor}</li></div>`;
    });
});

