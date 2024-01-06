// Se o seu ambiente suporta módulos ES6, você pode usar a importação dinâmica
// Caso contrário, você pode carregar o script diretamente no seu HTML antes deste script

document.querySelectorAll('.container-menu a').forEach((button) => {
    button.addEventListener('click', (event) => {
      event.stopPropagation();
    });
  });
  

const content = document.querySelector(".content");
const inputSearch = document.querySelector("input[type='search']");

let items = [];

inputSearch.addEventListener('input', () => {
  const searchTerm = inputSearch.value.toLowerCase();

  content.innerHTML = "";

  items
    .filter((item) => item.toLowerCase().includes(searchTerm))
    .forEach((item) => addHTML(item));
});

function addHTML(item) {
  const div = document.createElement("div");
  div.innerHTML = item;
  content.append(div);
}

// Importa dados.js diretamente
import('./dados.js')
  .then((module) => {
    // Assumindo que o módulo exporta um array de objetos e cada objeto possui uma propriedade "name"
    module.default.forEach((item) => {
      addHTML(item.name);
      items.push(item.name);
    });
  })
  .catch((error) => {
    console.error("Import error:", error);
  });
