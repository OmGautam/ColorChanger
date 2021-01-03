var canvas;
var music;
var box1,box2,box3,box4;
var ball;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    box1 = createSprite(100,550,200,50);
    box1.shapeColor = "blue";
    box2 = createSprite(300,550,200,50);
    box2.shapeColor = "orange";
    box3 = createSprite(500,550,200,50);
    box3.shapeColor = "red";
    box4 = createSprite(700,550,200,50);
    box4.shapeColor = "green";

    //create box sprite and give velocity
    ball = createSprite(random(20,750));
    ball.shapeColor = "white";
    ball.velocityY = 4;



}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    createEdgeSprites();

    //add condition to check if box touching surface and make it box
    if(isTouching(ball,box1)){
        ball.shapeColor = "blue";
        ball.velocityY = 0
    }

    if(isTouching(ball,box2)){
        ball.shapeColor = "orange";
        ball.velocityY = 0
    }

    if(isTouching(ball,box3)){
        ball.shapeColor = "red";
        ball.velocityY = 0
    }

    if(isTouching(ball,box4)){
        ball.shapeColor = "green";
        ball.velocityY = 0
    }

    drawSprites();
    
}

function isTouching(object1,object2){
    if(object1.x - object2.x < object1.width/2 + object2.width/2 &&
      object2.x - object1.x < object1.width/2 + object2.width/2 &&
      object1.y - object2.y < object1.height/2 + object2.height/2 &&
      object2.y - object1.y < object1.height/2 + object2.height/2){
        return true}
    }