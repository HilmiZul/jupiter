class Ball {
  constructor() {
    this.pos = createVector(220, 0);
    this.reverse = -30;
  }

  show() {
    push();
    translate(this.pos.x+260, this.pos.y + height /2);
    // reverse ball (-)
    rotate(-frameCount / this.reverse);
    imageMode(CENTER);
    image(ballImg, this.pos.x, this.pos.y);
    pop();
  }

  diTakol(p) {
    let hit = collideRectCircle(
      p.pos.x, p.pos.y, p.width, p.height,
      this.pos.x, this.pos.y, ballImg.width, ballImg.height
    );
    return hit;
  }
}