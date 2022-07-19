class Player {
  constructor() {
    this.pos = createVector(width/2, height/2);
  }

  show(j) {
    push();
    translate(this.pos.x, this.pos.y);
    rotate(PI/4.0);
    imageMode(CENTER);
    // nyumput ubah j-height/4
    image(playerImg, 0, 0-j.height/2-playerImg.height/2.5);
    pop();
  }
}