function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  // Calcula el color basado en la posición del mouse
  let r = map(mouseX, 0, width, 0, 255);
  let g = map(mouseY, 0, height, 0, 255);
  let b = map(mouseX + mouseY, 0, width + height, 0, 255);

  // Establece el color de relleno
  fill(r, g, b);

  // Dibuja una elipse en la posición del mouse
  ellipse(mouseX, mouseY, 150, 150);
}

function mousePressed() {
  // Establece el fondo en blanco al hacer clic en la pantalla
  background(255);
}