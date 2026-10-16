function preload() {
  // put preload code here
}

function setup() {
  /*createCanvas(windowWidth, windowHeight);
  console.log('p5.js version:', p5.VERSION);
  // put setup code here
  const message =
    "This is a template repository\nfor the course Laboratorio di Computergrafica\nCommunication Design, Politecnico di Milano";
  textAlign(CENTER, CENTER);
  textSize(16);
  text(message, width / 2, height / 2);*/
  createCanvas(windowWidth, windowHeight);
  background(245, 235, 215);
  angleMode(DEGREES);

   // Disegno glifi
  let numeroGlifi = 110;
  let numeroColonne = ceil(sqrt(numeroGlifi));
  let numeroRighe = ceil(numeroGlifi / numeroColonne);

  let dimColonna = windowWidth / numeroColonne;
  let dimRiga = windowHeight / numeroRighe;

  for (let g = 0; g < numeroGlifi; g++) {
    // Calcolo della colonna e della riga
    let colonna = g % numeroColonne;
    let riga = floor(g / numeroColonne);

    // Centro della cella
    let xCorrente = colonna * dimColonna + dimColonna / 2;
    let yCorrente = riga * dimRiga + dimRiga / 2;

    // Dimensione del glifo
    let dimensione = min(dimColonna, dimRiga) * 0.45;


  // Disegna il glifo al centro della viewport
  mioGlifo(xCorrente, yCorrente, dimensione);
}
}


function mioGlifo(x, y, lato) {

  // 1. Definizione dei quattro colori
  let color1;
  let color2;
  let color3;
  let color4;

  color1 = color("#FF0000");
  color2 = color("#00FF00");
  color3 = color("#0000FF");
  color4 = color("#FFFF00");


  // 2. Posiziona il centro del cubo
  push();
  translate(x, y);

  // 3. Costruisce le tre facce ruotandole di 120 gradi
  for (let i = 0; i < 3; i++) {

    push();

    rotate(i * 120 );

    costruzioneLato(lato);

    pop();
  }

  pop();


  // 4. Funzione che costruisce una faccia con quattro rombi
  function costruzioneLato(lato) {

    // Coordinate del lato isometrico di riferimento
    let ax = -sqrt(3) / 2 * lato;
    let ay = -lato / 2;

    stroke(30);
    strokeWeight(2);

    // Crea una griglia di 2 righe e 2 colonne
    for (let r = 0; r < 2; r++) {
      for (let c = 0; c < 2; c++) {

        // Sceglie un numero intero da 1 a 4
        let colore = floor(random(1, 5));

        // Assegna il colore in base al numero estratto
        if (colore == 1) {
          fill(color1);
        } else if (colore == 2) {
          fill(color2);
        } else if (colore == 3) {
          fill(color3);
        } else if (colore == 4) {
          fill(color4);
        }

        // Coordinate del primo rombo
        let u0 = c / 2;
        let u1 = (c + 1) / 2;

        let v0 = r / 2;
        let v1 = (r + 1) / 2;

        // Disegna il quadratino proiettato in isometria
        beginShape();

        vertex(
          u0 * ax,
          u0 * ay + v0 * lato
        );

        vertex(
          u1 * ax,
          u1 * ay + v0 * lato
        );

        vertex(
          u1 * ax,
          u1 * ay + v1 * lato
        );

        vertex(
          u0 * ax,
          u0 * ay + v1 * lato
        );

        endShape(CLOSE);
      }
    }
  }
}