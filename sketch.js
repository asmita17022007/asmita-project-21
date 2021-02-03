var bullet,thickness;
var wall,speed,weight;

function setup() {
  createCanvas(1600,400);
  
  speed = random(60,240);
  weight = random(20,52);
  thickness = random(22,83);

  wall= createSprite(1200, 200,thickness,height/2);
  wall.shapeColor = color(80,80,80);

  bullet= createSprite(100,200,40,10);
  bullet.shapeColor = "white";
  bullet.velocityX = speed;

}

function draw() {
  background("skyblue"); 

 if(hasCollided(bullet,wall)){
  bullet.velocityX = 0;

  var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);

  if(damage < 10 ){
    wall.shapeColor = color(0,255,0);
  }else{
    wall.shapeColor = color(255,0,0);
  }
}

  drawSprites();
}

function hasCollided(lbullet,lwall){

  bulletRightedge = lbullet.x + lbullet.width/2;
  wallLeftedge    = lwall.x;

  if(bulletRightedge >= wallLeftedge){
    return true
  }
  return false
}