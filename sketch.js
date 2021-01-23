var rect

function setup(){
  rect= createSprite (100, 100, 30, 50);
  rect.shapeColor= "white";

}

function draw(){
  background (0);
  rect.y= World.mouseY;
  drawSprites();
}