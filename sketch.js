var ball
var paddle
var Ai_paddle

function setup() {
  createCanvas(400,400);
ball = createSprite(200,200,13,13);
ball.shapeColor = "blue"
paddle = createSprite(390,200,10,100);
paddle.shapeColor = "red";
Ai_paddle = createSprite(5,200,10,100);
Ai_paddle.shapeColor = "darkgreen"

}

function draw() 
{
  background("white");

  drawSprites();
}




