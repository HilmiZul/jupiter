class Ball {
  constructor() {
    this.pos = createVector(width / 2, height / 2);
  }

  show() {
    push();
    translate(this.pos.x, this.pos.y);
    // reverse ball (-)
    rotate(-frameCount / 30);
    imageMode(CENTER);
    image(ballImg, 220, 0);
    pop();
  }
}