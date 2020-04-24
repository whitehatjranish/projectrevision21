var bullet,bullet1,bullet2,bullet3;
var wall,wall1,wall2,wall3;

function setup() {
  createCanvas(1600,600);
 bullet= createSprite(100, 200, 40, 20);
bullet.velocityX=4;
bullet.shapeColor="white";
bullet1= createSprite(100, 100, 40, 20);
bullet1.velocityX=4;
bullet1.shapeColor="pink";
bullet2= createSprite(100, 300, 40, 20);
bullet2.velocityX=4;
bullet2.shapeColor="green";
bullet3= createSprite(100, 400, 40, 20);
bullet3.velocityX=4;
bullet3.shapeColor="red";

wall=createSprite(1200,200,10,40);
wall1=createSprite(1200,100,10,40);
wall2=createSprite(1200,300,10,40);
wall3=createSprite(1200,400,10,40);
}

function draw() {
  background("blue");  
  bullet.display();
  bullet1.display();
  bullet2.display();
  bullet3.display();
  wall.display();
  wall1.display();
  wall2.display();
  wall3.display();
  if(bullet.collide(wall)){

wall.destroy();

  }
  if(bullet1.collide(wall1)){

    bullet1.destroy();
    
      }
      if(bullet2.collide(wall2)){

        wall2.destroy();
        
          }
          if(bullet3.collide(wall3)){

            bullet.velocityX=0;
            
              }
  drawSprites();
}
function hasCollided(bullet,wall)
{
      bulletRightEdge=bullet.sprite.x+bullet.sprite.width;
      wallLeftEdge=wall.sprite.x;
      if(bulletRightEdge>=wallLeftEdge)
      {
         return true
      }
      return false;
    }

















