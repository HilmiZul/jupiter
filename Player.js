class Player {
  constructor() {
    this.pos = createVector(0, 0);
    this.tombolBawah = false;
    this.nakol = false;
    this.heart = 3;
    this.name = "AZFA";
  }

  show(j) {
    push();
    translate(this.pos.x+width/2, this.pos.y+height/2);
    rotate(PI / 4.0);
    imageMode(CENTER);
    // nyumput ubah j-height/4
    if (this.tombolBawah) {
      image(playerImg, this.pos.x, this.pos.y - j.height / 4 - playerImg.height / 2.5);
    } else {
      if(!this.nakol) {
        image(playerImg, this.pos.x, this.pos.y - j.height / 2 - playerImg.height / 2.5);
      }
    }
    if(this.nakol) {
      image(playerHit, this.pos.x, this.pos.y - j.height / 2 - playerHit.height / 2.5);
    }
    pop();
  }

  info() {
    push();
    fill(255);
    rect(width-240, 30, 200, 100, 20);
    fill(250, 210, 100);
    noStroke();
    rect(width-240, 30, 200, 50, 20);

    fill(255);
    textSize(20);
    text(this.name, width-170, 60);

    for (let i = 0; i < this.heart; i++) {
      image(heartImg, width-200 + i*40, 80);
    }
    pop();
  }
}