let bgStart, bgPlay;
let jupiterImg, jupiter;
let ballImg, ball;
let playerImg, playerHit, playerKatakol, player;
let heartImg;
let soundHit0, soundHit1, soundBg;
function preload() {
  bgStart = loadImage('assets/img/bg.png');
  bgPlay = loadImage('assets/img/bg-play.png');
  jupiterImg = loadImage('assets/img/jupiter.png');
  ballImg = loadImage('assets/img/ball.png');

  playerImg = loadImage('assets/img/player.png');
  playerHit = loadImage('assets/img/player-hit.png');
  playerKatakol = loadImage('assets/img/player-caught.png');

  heartImg = loadImage('assets/img/heart.png');

  soundHit0 = loadSound('assets/audio/hit-0.wav');
  soundBg = loadSound('assets/audio/bg.mp3');
}

function setup() {
  createCanvas(960, 600);

  soundBg.play();

  jupiter = new Jupiter();
  ball = new Ball();
  player = new Player();
}

function draw() {
  image(bgPlay, 0, 0);

  player.show(jupiterImg);
  player.info();
  
  jupiter.show();
  
  ball.show();
  // if(ball.diTakol(player)) {
  //   console.log('ditakol!!!');
  //   ball.reverse = 30;
  // }
}

function keyPressed() {
  if(keyCode === DOWN_ARROW) {
    // player sembunyi
    player.tombolBawah = true;
  }
  if(keyCode === ESCAPE) {
    noLoop();
  }
  if(keyCode === RETURN) loop();
  if(key === ' ') {
    player.nakol = true;
    player.heart -= 1;
    ball.reverse *= -1;
    soundHit0.play();
  }
}

function keyReleased() {
  player.tombolBawah = false;
  player.nakol = false;
}