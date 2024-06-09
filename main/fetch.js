const $main = document.querySelector("main");
const $grid = document.getElementById("grid");

fetch("https://hp-api.onrender.com/api/characters").then((respuesta) => respuesta.json()).then((data) => {
    const personajes = data;
    console.log(personajes);

    personajes.forEach((personaje) => {
        $grid.innerHTML += `<div class="tarjetas"><div class="parteA"><h4>${personaje.name}</h4><img src="${personaje.image}" alt="imagen de ${personaje.name}"></div>
        <div class="parteB"><h4>Description</h4>
        <li>Gender: ${personaje.gender}</li>
        <li>HairColour: ${personaje.hairColour}</li>
        <li>Species: ${personaje.species}</li>
        <li>Date of Birth: ${personaje.dateOfBirth}</li>
        <li>Ancentry: ${personaje.ancentry}</li>
        <li>Patronous: ${personaje.patronous}</li>
        <li>House: ${personaje.house}</li><hr>
        <li>Actor: ${personaje.actor}</li></div>`;
    });


});


