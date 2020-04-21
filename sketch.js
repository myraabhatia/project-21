
var sun,earth,mars;

function setup() {
  createCanvas(800,400);
  sun = createSprite(400, 200, 50, 50);
  earth = createSprite(700,200,50,50);
  mars = createSprite(100,200,50,50);
  earth.velocityX = -1;
  mars.velocityX = 1;
  sun.shapeColor = "yellow"
  earth.shapeColor = "blue"
  mars.shapeColor = "red"
}

function draw() {
  background(255,255,255);  
  if(earth.isTouching(sun)||earth.isTouching(sun)){
earth.destroy(); 
mars.destroy();
increase(sun);
  }

  


  drawSprites();
}