class Jupiter {
  constructor() {
    this.pos = createVector(width / 2, height / 2);
  }

  show() {
    push();
    translate(this.pos.x, this.pos.y);
    rotate(-frameCount / -360);
    imageMode(CENTER);
    image(jupiterImg, 0, 0);
    pop();
  }
}