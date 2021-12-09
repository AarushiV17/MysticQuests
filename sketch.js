var bg , bgImg;
var logo, logoImg;
var gbutton, gbuttonImg;
var START = 0;
var PLAY = 1;
var END = 2;
var gameState = START;


function preload(){
  bgImg = loadImage('bg.jpg')
  logoImg = loadImage('logo.png')
  gbuttonImg = loadImage('gbutton.png')
}

function setup(){
  createCanvas(1000, 600);

  logo = createSprite(500,200);
  logo.addImage(logoImg);
  logo.scale = 0.59

  gbutton = createSprite(500,450);
  gbutton.addImage(gbuttonImg);
  gbutton.scale = 0.3
}

function draw() {
  background(bgImg);

  if(gameState === START){
    logo.visible = true;
    gbutton.visible = true;
  }

  drawSprites();
}