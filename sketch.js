function setup() {
  createCanvas(windowWidth, windowHeight);
  noLoop();
  rectMode(CENTER);
}

function draw() {
  background(10, 10, 10);
  noStroke();
  let anchura = 20;
  let gap = random(0, 50);

  for (let x = 50; x < windowWidth; x += anchura + gap) {
    for (let y = 50; y < windowHeight; y += anchura + gap) {
      fill(47, 255, 255);
      square(x, y, anchura);
    }
  }
}
