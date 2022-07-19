let bgStart, bgPlay;
let jupiterImg, jupiter;
let ballImg, ball;
let playerImg, playerHit, playerKatakol, player;
function preload() {
  bgStart = loadImage('assets/img/bg.png');
  bgPlay = loadImage('assets/img/bg-play.png');
  jupiterImg = loadImage('assets/img/jupiter.png');
  ballImg = loadImage('assets/img/ball.png');

  playerImg = loadImage('assets/img/player.png');
  playerHit = loadImage('assets/img/player-hit.png');
  playerKatakol = loadImage('assets/img/player-caught.png');
}

function setup() {
  createCanvas(960, 600);

  jupiter = new Jupiter();
  ball = new Ball();
  player = new Player();
}

function draw() {
  image(bgPlay, 0, 0);

  player.show(jupiterImg);
  
  jupiter.show();
  
  ball.show();
}

function keyPressed() {
  if(keyCode === DOWN_ARROW) {
    // player sembunyi
    player.tombolBawah = true;
  }
}

function keyReleased() {
  player.tombolBawah = false;
}