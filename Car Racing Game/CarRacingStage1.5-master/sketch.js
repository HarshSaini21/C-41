var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;
var carI1, carI2, carI3, carI4;
var ground;
var track;

var cars, car1, car2, car3, car4;

function preload(){

  carI1 = loadImage("../CarRacingStage1.5-master/images/car1.png")
  carI2 = loadImage("../CarRacingStage1.5-master/images/car2.png")
  carI3 = loadImage("../CarRacingStage1.5-master/images/car3.png")
  carI4 = loadImage("../CarRacingStage1.5-master/images/car4.png")

  ground = loadImage("../CarRacingStage1.5-master/images/ground.png")

  track = loadImage("../CarRacingStage1.5-master/images/track.jpg");
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }

  if(gameState === 2){
    game.end();
  }
}
