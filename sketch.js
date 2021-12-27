var box;
function setup() {
  createCanvas(1000,1000);
  box = createSprite(500,500, 100, 100);
  box.shapeColor = "red";
}

function draw() 
{
 background("green");
 if(keyDown("left")){
  box.x -=2;
 background("black");
}
if(keyDown("right")){
  box.x +=2;
 background("yellow");
}
if(keyDown("up")){
  box.y -=2;
 box.shapeColor = "blue";
}
if(keyDown("down")){
  box.y +=2;
 box.shapeColor = "pink";
}
  drawSprites();
}




