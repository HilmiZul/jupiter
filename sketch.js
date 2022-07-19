let bgStart, bgPlay;
let jupiterImg, jupiter;
function preload() {
  bgStart = loadImage('assets/img/bg.png')
  bgPlay = loadImage('assets/img/bg-play.png')
  jupiterImg = loadImage('assets/img/jupiter.png')
}

function setup() {
  createCanvas(960, 600);

  jupiter = new Jupiter();
}

function draw() {
  image(bgPlay, 0, 0);

  jupiter.show();
}