const gridSizeInput = document.querySelector(".grid-size");
const createButton = document.querySelector(".create");
const gridDiv = document.querySelector(".grid-container");

const images = [
  "https://www.cs.ubbcluj.ro/wp-content/uploads/Andreica-Anca-133x100.jpg",
  "https://www.cs.ubbcluj.ro/wp-content/uploads/Chira-Camelia.jpg",
  "https://www.cs.ubbcluj.ro/wp-content/uploads/Czibula-Gabriela.jpg",
  "https://www.cs.ubbcluj.ro/wp-content/uploads/Czibula-Istvan.jpg",
  "https://www.cs.ubbcluj.ro/wp-content/uploads/Diosan-Laura-300x400.jpg",
  "https://www.cs.ubbcluj.ro/wp-content/uploads/Motogna-Simona-133x100.jpg",
  "https://www.cs.ubbcluj.ro/wp-content/uploads/Pop-F.-Horia-big.jpg",
  "https://www.cs.ubbcluj.ro/wp-content/uploads/Sanda-Avram.jpg",
  "https://www.cs.ubbcluj.ro/wp-content/uploads/Iuliana-Bocicor.jpg",
  "https://www.cs.ubbcluj.ro/wp-content/uploads/Boian-Rares-133x100.jpg",
  "https://www.cs.ubbcluj.ro/wp-content/uploads/Grigoreta-Cojocar.jpg",
  "https://www.cs.ubbcluj.ro/wp-content/uploads/Craciun-Florin.jpg",
  "https://www.cs.ubbcluj.ro/wp-content/uploads/Darabant-Sergiu.jpg",
  "https://www.cs.ubbcluj.ro/wp-content/uploads/Guran-Adriana.jpg",
  "https://www.cs.ubbcluj.ro/wp-content/uploads/Niculescu-Virginia.jpg",
  "https://www.cs.ubbcluj.ro/wp-content/uploads/Christian-Sacarea-133x100.jpg",
  "https://www.cs.ubbcluj.ro/wp-content/uploads/Sterca-Adrian.jpg",
  "https://www.cs.ubbcluj.ro/wp-content/uploads/Suciu-Mihai.jpg",
  "https://www.cs.ubbcluj.ro/wp-content/uploads/Serban-Camelia.jpg",
  "https://www.cs.ubbcluj.ro/wp-content/uploads/Andreea-Vescan.jpg",
  "https://www.cs.ubbcluj.ro/wp-content/uploads/ioan-badarinza.jpg",
  "https://www.cs.ubbcluj.ro/wp-content/uploads/Iulian-Benta.jpg",
  "https://www.cs.ubbcluj.ro/wp-content/uploads/Borza-Diana.jpg",
  "https://www.cs.ubbcluj.ro/wp-content/uploads/Bufnea-Darius.jpg",
  "https://www.cs.ubbcluj.ro/wp-content/uploads/Ciuciu-Ioana.jpg",
  "https://www.cs.ubbcluj.ro/wp-content/uploads/Cobarzan-Claudiu.jpg",
  "https://www.cs.ubbcluj.ro/wp-content/uploads/Cojocar-Dan.jpg",
  "https://www.cs.ubbcluj.ro/wp-content/uploads/Coroiu-Adriana.jpg",
  "https://www.cs.ubbcluj.ro/wp-content/uploads/diana-cristea.jpg",
  "https://www.cs.ubbcluj.ro/wp-content/uploads/Radu-Dragos.jpg",
  "https://www.cs.ubbcluj.ro/wp-content/uploads/Gaceanu-Radu.jpg",
  "https://www.cs.ubbcluj.ro/wp-content/uploads/Grebla-Horea.jpg",
  "https://www.cs.ubbcluj.ro/wp-content/uploads/Ionescu-Vlad.jpg",
  "https://www.cs.ubbcluj.ro/wp-content/uploads/Dominik-Knoll.jpg",
  "https://www.cs.ubbcluj.ro/wp-content/uploads/Lazar-Ioan.jpg",
  "https://www.cs.ubbcluj.ro/wp-content/uploads/Lupsa-Dana.jpg",
  "https://www.cs.ubbcluj.ro/wp-content/uploads/Lupsa-Radu.jpg",
  "https://www.cs.ubbcluj.ro/wp-content/uploads/Mihoc-Tudor.jpg",
  "https://www.cs.ubbcluj.ro/wp-content/uploads/Diana-Miholca.jpg",
  "https://www.cs.ubbcluj.ro/wp-content/uploads/Mircea-Gabriel-small.jpg",
  "https://www.cs.ubbcluj.ro/wp-content/uploads/Arthur-Molnar.jpg",
  "https://www.cs.ubbcluj.ro/wp-content/uploads/Marian-Zsuzsanna.jpg",
  "https://www.cs.ubbcluj.ro/wp-content/uploads/Petrascu-Vladiela.jpg",
  "https://www.cs.ubbcluj.ro/wp-content/uploads/Mihis-Andreea.jpg",
  "https://www.cs.ubbcluj.ro/wp-content/uploads/Pop-Emilia.jpg",
  "https://www.cs.ubbcluj.ro/wp-content/uploads/Rusu-Catalin.jpg",
  "https://www.cs.ubbcluj.ro/wp-content/uploads/Suciu-Dan.jpg",
  "https://www.cs.ubbcluj.ro/wp-content/uploads/Sabina-Surdu.jpg",
  "https://www.cs.ubbcluj.ro/wp-content/uploads/Diana-Halita.jpg",
  "https://www.cs.ubbcluj.ro/wp-content/uploads/Vancea-Alexandru.jpg",
  "https://www.cs.ubbcluj.ro/wp-content/uploads/Andor-Camelia-Florina.jpg",
  "https://www.cs.ubbcluj.ro/wp-content/uploads/Florentin-Bota-1.jpg",
  "https://www.cs.ubbcluj.ro/wp-content/uploads/Alina-Calin.jpg",
  "https://www.cs.ubbcluj.ro/wp-content/uploads/Cristina-Mihaila.jpg",
  "https://www.cs.ubbcluj.ro/wp-content/uploads/Mursa-Bogdan.jpg",
  "https://www.cs.ubbcluj.ro/wp-content/uploads/Manuela-Petrescu-2.jpg",
  "https://www.cs.ubbcluj.ro/wp-content/uploads/Paul-Tirban.jpg",
  "https://www.cs.ubbcluj.ro/wp-content/uploads/Zsigmond-Imre.jpg",
  "https://www.cs.ubbcluj.ro/wp-content/uploads/Boian-Florian.jpg",
  "https://www.cs.ubbcluj.ro/wp-content/uploads/Frentiu-Militon.jpg",
  "https://www.cs.ubbcluj.ro/wp-content/uploads/Grigor-Moldovan.jpg",
  "https://www.cs.ubbcluj.ro/wp-content/uploads/Parv-Bazil.jpg",
  "https://www.cs.ubbcluj.ro/wp-content/uploads/Tambulea-Leon-133x100.jpg",
  "https://www.cs.ubbcluj.ro/wp-content/uploads/Christian-Bartelt.jpg",
  "https://www.cs.ubbcluj.ro/wp-content/uploads/Thomas-Horsch.jpg",
  "https://www.cs.ubbcluj.ro/wp-content/uploads/Oliver-Oswald.jpg",
  "https://www.cs.ubbcluj.ro/wp-content/uploads/Chiorean-Dan-133x100.jpg",
  "https://www.cs.ubbcluj.ro/wp-content/uploads/Albu-Alexandra.jpg",
  "https://www.cs.ubbcluj.ro/wp-content/uploads/Bajcsi-Adel.jpg",
  "https://www.cs.ubbcluj.ro/wp-content/uploads/Liviu-Berciu.jpg",
  "https://www.cs.ubbcluj.ro/wp-content/uploads/Boanca-Sara.jpg",
  "https://www.cs.ubbcluj.ro/wp-content/uploads/CHELARU-Ioana-Gabriela.jpg",
  "https://www.cs.ubbcluj.ro/wp-content/uploads/Daniela-Cristea.jpg",
  "https://www.cs.ubbcluj.ro/wp-content/uploads/Filep-Levente-133x100.jpg",
  "https://www.cs.ubbcluj.ro/wp-content/uploads/Ileni-Tudor.jpg",
  "https://www.cs.ubbcluj.ro/wp-content/uploads/Kepes-Tamas.jpg",
  "https://www.cs.ubbcluj.ro/wp-content/uploads/matyas.kuti_.jpg",
  "https://www.cs.ubbcluj.ro/wp-content/uploads/Limboi-Sergiu.jpg",
  "https://www.cs.ubbcluj.ro/wp-content/uploads/Alexandru-Marinescu.jpg",
  "https://www.cs.ubbcluj.ro/wp-content/uploads/Attila-Mester.jpg",
  "https://www.cs.ubbcluj.ro/wp-content/uploads/Cristiana-Moroz-Dubenco.jpg",
  "https://www.cs.ubbcluj.ro/wp-content/uploads/Muresan-Horea-Bogdan.jpg",
  "https://www.cs.ubbcluj.ro/wp-content/uploads/Maria-Nutu.jpg",
  "https://www.cs.ubbcluj.ro/wp-content/uploads/Szabolcs-Pavel.jpg",
  "https://www.cs.ubbcluj.ro/wp-content/uploads/Petrusel-Mara.jpg",
  "https://www.cs.ubbcluj.ro/wp-content/uploads/Maria-Popa.jpg",
  "https://www.cs.ubbcluj.ro/wp-content/uploads/Csanad-Sandor.jpg",
  "https://www.cs.ubbcluj.ro/wp-content/uploads/Sima-Ioan.jpg",
  "https://www.cs.ubbcluj.ro/wp-content/uploads/Szederjesi-Arnold-100x133.jpg",
  "https://www.cs.ubbcluj.ro/wp-content/uploads/Todericiu-Ioana-Alexandra.jpg",
  "https://www.cs.ubbcluj.ro/wp-content/uploads/Gelu-Vac.jpg",
  "https://www.cs.ubbcluj.ro/wp-content/uploads/Ioana-Chiorean.jpg",
  "https://www.cs.ubbcluj.ro/wp-content/uploads/Chiorean-Marius.jpg",
  "https://www.cs.ubbcluj.ro/wp-content/uploads/Colt-Alexandrina-Ramona.jpg",
];

let grid;
let flipped = [];
let matches = [];
let timeoutId;

function create() {
  const n = Number(gridSizeInput.value);

  if (n > 13 || n % 2 !== 0) {
    alert("🤔");
    return;
  }

  const array = generateArray(n);
  const shuffledArray = shuffle(array);

  grid = [];

  for (let i = 0; i < n; i++) {
    const row = [];

    for (let j = 0; j < n; j++) {
      row.push({ value: shuffledArray[i * n + j].value, image: shuffledArray[i * n + j].image });
    }

    grid.push(row);
  }

  renderGrid(grid);
}

function renderGrid(grid) {
  const n = grid.length;
  let result = `<div style='display: grid; grid-template-columns: repeat(${n}, 1fr); gap: .5rem'>`;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      // result += `<div class="cell" data-row='${i}' data-col='${j}' data-value='${grid[i][j].value}'><span class="value">${grid[i][j].value}</span></div>`;
      result += `<div class="cell" data-row='${i}' data-col='${j}' data-value='${grid[i][j].value}'><img src="${grid[i][j].image}" alt="prof" /></div>`;
    }
  }

  result += "</div>";

  gridDiv.innerHTML = result;

  document.querySelectorAll(".cell").forEach(x => x.addEventListener("click", flip));
}

function generateArray(n) {
  const result = [];
  const shuffledImages = shuffle(images);

  for (let i = 0; i < (n * n) / 2; i++) {
    result.push({ value: i + 1, image: shuffledImages[i] });
    result.push({ value: i + 1, image: shuffledImages[i] });
  }

  return result;
}

function shuffle(array) {
  const result = [...array];

  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * i);
    const temp = result[j];
    result[j] = result[i];
    result[i] = temp;
  }

  return result;
}

function flip(e) {
  if (flipped.some(x => x === e.target)) return;
  if (matches.some(x => x === e.target)) return;

  if (flipped.length < 2) {
    flipped.push(e.target);
    e.target.classList.add("show");

    if (flipped.length === 2) {
      if (flipped[0].getAttribute("data-value") === flipped[1].getAttribute("data-value")) {
        flipped[0].classList.add("stay");
        flipped[1].classList.add("stay");
        matches.push(flipped[0]);
        matches.push(flipped[1]);
        flipped = [];
      } else {
        timeoutId = setTimeout(() => {
          document.querySelectorAll(".cell.show").forEach(x => x.classList.remove("show"));
          flipped = [];
          console.log("acuma am curatat");
        }, 1000);
      }
    }
  } else {
    clearTimeout(timeoutId);
    console.log(flipped);
    flipped = [];
    document.querySelectorAll(".cell.show").forEach(x => x.classList.remove("show"));
  }
}

createButton.addEventListener("click", create);
