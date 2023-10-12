pelotas = [];
const NP = 100;

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < NP; i++) {
    let pelota = new Pelota();
    pelotas.push(pelota);
  }
  print(pelotas);
  // createCanvas(windowWidth, windowHeight);
  // noLoop();
  // rectMode(CENTER);
}

function draw() {
  background(163, 99, 252);
  for (let i = 0; i < NP; i++) {
    pelotas[i].update(windowHeight);
    pelotas[i].display();
  }

  // background(10, 10, 10);
  // noStroke();
  // let anchura = 20;
  // let gap = random(0, 50);

  // for (let x = 50; x < windowWidth; x += anchura + gap) {
  //   for (let y = 50; y < windowHeight; y += anchura + gap) {
  //     fill(47, 255, 255);
  //     square(x, y, anchura);
  //   }
  // }
}
