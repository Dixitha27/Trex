
var fixedRect, movingRect;
var ob1, ob2,ob3,ob4;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  ob1 = createSprite(200,300,50,50);
  ob1.shapeColor ="pink";
  ob2 = createSprite(300,300,50,50);
  ob2.shapeColor ="blue";
  ob3 = createSprite(400,300,50,50);
  ob3.shapeColor ="yellow";
  ob4 = createSprite(500,300,50,50);
  ob4.shapeColor ="red";
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

 if(isTouching(movingRect,ob1)){
   movingRect.shapeColor = "white";
   ob1.shapeColor = "white";
 }
 else {
   movingRect.shapeColor = "green";
   ob1.shapeColor = "pink";
 }
 
  drawSprites();
}

function isTouching(ob1,ob2){

  if (ob1.x - ob2.x < ob2.width/2 + ob1.width/2
    && ob1.x - ob2.x < ob2.width/2 + ob1.width/2
    && ob1.y - ob2.y < ob2.height/2 + ob1.height/2
    && ob2.y - ob1.y < ob2.height/2 + ob1.height/2) {
  return true;
}
else {
  return false;
}
}
