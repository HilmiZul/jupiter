let bgStart, bgPlay;
let jupiterImg, jupiter;
let ballImg, ball;
let playerImg, playerHit, playerKatakol, player;
let heartImg;
let soundHit0, soundHit1, soundBg, soundDestroy;

let gamePlay = true;
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
  soundDestroy = loadSound('assets/audio/destroy.wav');
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

  if (gamePlay) {
    player.show(jupiterImg);
    player.info();
    if (player.dead()) {
      gamePlay = false;
    }

    jupiter.show();

    ball.show();


    // INFO CONTROLLER: PAUSE, EXIT DAN UNMUTE MUSIK
    push();
    textSize(12);
    fill(250, 210, 100);
    stroke(255);
    strokeWeight(2);
    rect(width - 200, height / 2 - 80, 90, 50, 10);
    rect(width - 200, height / 2, 90, 50, 10);
    rect(width / 2 - 90 / 2, height - 60, 90, 50, 10);
    noStroke();
    fill(255);
    text('PAUSE: Esc', width - 190, height / 2 - 50);
    text('LANJUT: Enter', width - 195, height / 2 + 30);
    text('Mute/Unmute:', width / 2 - 75 / 2, height - 40);
    text('M', width / 2 - 10 / 2, height - 20);
    pop();
  } else {
    push();
    fill(250, 210, 100);
    noStroke();
    rectMode(CENTER);
    rect(width / 2, height / 2, 500, 500);
    textSize(50);
    fill(255);
    text('YOU LOSE!', width / 2 - 120, 200);
    pop();
  }
  // if(ball.diTakol(player)) {
  //   console.log('ditakol!!!');
  //   ball.reverse = 30;
  // }
}

function keyPressed() {
  if (keyCode === DOWN_ARROW) {
    // player sembunyi
    player.tombolBawah = true;
  }
  if (keyCode === ESCAPE) {
    noLoop();
    soundBg.pause();
  }
  if (keyCode === RETURN) {
    player.reset();
    ball.reset();
    loop();
    soundBg.play();
    gamePlay = true;
  }
  if (key === ' ') {
    player.nakol = true;
    player.heart -= 1;
    ball.reverse *= -1;
    soundHit0.play();
  }
  if(key === 'm') {
    soundBg.pause()
  }
}

function keyReleased() {
  player.tombolBawah = false;
  player.nakol = false;
}