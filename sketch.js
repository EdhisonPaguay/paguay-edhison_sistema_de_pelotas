let miPelota;
let frutas = ["manzana", "pera", "piñas"];
function setup() {
  createCanvas(windowWidth, windowHeight);
  miPelota = new Pelota();
}

function draw() {
  background(0, 200, 150, 70);
  circle(mouseX, mouseY, 20);
  miPelota.update(300);
  miPelota.display();
}
