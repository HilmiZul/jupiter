class Jupiter {
  constructor() {
    this.pos = createVector(width / 2, height / 2);
  }

  show() {
    push();
    imageMode(CENTER);
    image(jupiterImg, this.pos.x, this.pos.y);
    pop();
  }
}