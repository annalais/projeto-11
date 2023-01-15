var sea, seaImg;
var ship, ship_animation;
function preload(){

 ship_animation = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");

 seaImg = loadImage("sea.png");

}

function setup(){
  createCanvas(1800,900);

 sea = createSprite(0,300,0,0);
 sea.addImage(seaImg);
 sea.velocityX = 0.4
 sea.scale = 2;

 ship = createSprite(850,550,40,50);
 ship.addAnimation("running",ship_animation)
 ship.scale = 0.4;
 
}

function draw() {
  background("blue");

  if(sea.x < 0){
    sea.x = sea.windth/2;
   }

    drawSprites();

    
}
