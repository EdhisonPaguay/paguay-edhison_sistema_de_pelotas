class Pelota {
  constructor() {
    this.posX = random(50, windowWidth - 50);
    this.posY = random(50, 70);
    this.velX = 0;
    this.velY = 0;
    this.acelY = 0.98;
    this.diam = int(random(5, 50));
    this.rad = this.diam / 2;
    this.colores = color(0, random(100, 255), random(100, 150));
  }
  update(_piso) {
    if (this.posY + this.rad <= _piso) {
      this.velY += this.acelY;
      this.posY += this.velY;
    } else {
      this.velY *= -1;
      this.posY += this.velY;
    }
  }
  display() {
    fill(this.colores);
    circle(this.posX, this.posY, this.diam);
  }
}
