var littlemario
var mario1,mario2,mario3;
var mariodying;
var bigcoin;
var coin;
var brick;
var emptybrick;
var luckyblock;
var tube;
var mushroom;
var goomba;
var turtle1;
var turtle2;
var turtle3;
var ground;
var obstacleGroup


function preload(){
    
    //mariodying=loadImage('PNG/Mariodying.png');

    bigcoin=loadImage("PNG/bigcoin.png");
    coinImage=loadImage("PNG/Coin.png");

    //brick=loadImage("PNG/brick.jpg");
    //emptybrick=loadImage("PNG/Emptybrick.png");
    //luckyblock=loadImage("PNG/Luckyblock.jpg");

    //tube=loadImage("PNG/Tube.png");
    //mushroom=loadImage("PNG/Mushroom.png");
    goomba=loadImage("PNG/Goomba.png");
    turtle1=loadImage("PNG/Turtle1.png");
    turtle2=loadImage("PNG/Turtle2.png");
    turtle3=loadImage("PNG/Turtle3.png");
    //ground=loadImage("PNG/ground.png");

    littlemariorunning=loadAnimation("PNG/mario1.png","PNG/mario2.png","PNG/mario3.png");
}

function setup() {
 createCanvas(1200,800);

 littlemario=createSprite(100,750);
 littlemario.addAnimation("running",littlemariorunning);
 littlemario.scale=0.5

 obstacleGroup=new Group()
}

function draw() {
 background("black");
 spawnObstacles();
 spawnCoins();
 drawSprites(); 
}

function spawnObstacles(){
    if(frameCount % 120 == 0){
        var obstacle=createSprite(1250,750)

        obstacle.velocityX =-6;

        var rand = Math.round(random(1,4));
        switch(rand) {
            case 1: obstacle.addImage(goomba);
                    break;
            case 2: obstacle.addImage(turtle1);
                    break;
            case 3: obstacle.addImage(turtle2);
                    break;
            case 4: obstacle.addImage(turtle3);
            default: break;
        }
        
        obstacle.scale=0.4;
        obstacle.lifetime=300;
        obstacleGroup.add(obstacle)
    }
}
function spawnCoins(){
    if(frameCount % 120==0){
        var coin=createSprite(1250,random(750,780))
        coin.addImage(coinImage)
        coin.scale=0.1
        coin.velocityX=-4
    }
}
