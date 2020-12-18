var wall,thickness;
var bullet,speed,weight;



function setup() {
  createCanvas(1600,400);
  thickness = random(22,83);
  speed= random(223,321);
  weight= random(30,52);
  wall = createSprite(900, 200, thickness, height/2);
  bullet = createSprite(50,200,50,10);
  bullet.shapeColor = "white";
  bullet.velocityX = speed;
}

function draw() {
  background(0); 

  if(hasCollide(bullet,wall)){

    bullet.velocityX = 0;
    var damage = 0.5 *weight * speed * speed/(thickness* thickness*thickness);

    if(damage>10){
      wall.shapeColor = "green";
    }

    if(damage<10){

      wall.shapeColor = "red";

    }

  }
  
  drawSprites();
}

function hasCollide(lbullet,lwall){

  bulletRightEdge = lbullet.x +lbullet.width;
  wallLeftEdge = lwall.x;
  if(bulletRightEdge>=wallLeftEdge){

    return true;

  } else{

    return false;
  }
}