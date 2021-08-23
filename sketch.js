var ship,ship_running, edges;
var groundImage;

function preload(){

ship_running = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
groundImage = loadImage("sea.png");

}

function setup(){
  createCanvas(400,400);

  ship = createSprite(130,140,20,50);
  ship.addAnimation("running",ship_running);


  ground = createSprite(130,140,20,50);
  ground.addImage("sea.png",groundImage);
  ground.x = ground.width/2;
  ship.scale= 0.3
}

function draw() {
  background("black");
  console.log("ship running");

  if (ground.x<0){
    ground.x = ground.width/2;
  }
 
ship.collide(ground);

  drawSprites();
}