var ball;
var pallet1;
var pallet2;
var pallet3;
var pallet4;

function preload(){




}

function setup(){
    createCanvas(600,400)
    background(400,100,200);
ball =createSprite(300,200,25,25);
pallet1 =createSprite(75,380,140,20);
pallet1.shapeColor=("green");
pallet2 =createSprite(225,380,140,20);
pallet2.shapeColor=("pink");
pallet3 =createSprite(375,380,140,20);
pallet3.shapeColor=("blue");
pallet4 =createSprite(525,380,140,20);
pallet4.shapeColor=("brown");


ball.velocityX=3;
ball.velocityY=3;

createEdgeSprites();



}

function draw(){
   ball.bounceOff(pallet4);
  ball.bounceOff(pallet3);
  ball.bounceOff(pallet2);
  ball.bounceOff(pallet1);
 if (pallet4.isTouching(ball)&& ball.bounceOff(pallet4)) {
     ball.shapeColor=("brown");
 }

 if(ball.isTouching(pallet3)&& ball.bounceOff(pallet3)) {
  ball.shapeColor=("blue");
  
 }
if (ball.isTouching(pallet2)&& ball.bounceOff(pallet2)) {
    ball.shapeColor=("pink");
}
if (ball.isTouching(pallet1)&& ball.bounceOff(pallet1)) {
    ball.shapeColor=("green");
}
drawSprites();
}

