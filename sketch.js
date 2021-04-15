var bgImg, catImage, mouseImage, catImag2, mouseImage2;

var tom,jerry;

function preload() {
    //load the images here
    bgImg = loadImage("images/garden.png");
    
    catImage = loadAnimation("images/cat1.png");
    catImage2 = loadAnimation("images/cat2.png","images/cat3.png");
    catImage3 = loadAnimation("images/cat3.png","images/cat4.png");


    mouseImage = loadAnimation("images/mouse1.png");
    mouseImage2 = loadAnimation("images/mouse2.png", "images/mouse3.png");
    mouseImage3 = loadAnimation("images/mouse3.png", "images/mouse4.png");

}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    tom = createSprite(900,600)
    tom.addAnimation("cat", catImage);
    tom.scale = 0.2
    
    jerry = createSprite(150,600)
    jerry.addAnimation("mouse", mouseImage);
    jerry.scale = 0.2;

}

function draw() {

    background(bgImg);
    //Write condition here to evalute if tom and jerry collide

    if (tom.x - jerry.x < (tom.width - jerry.width)/2){
        tom.velocityX=0;
        tom.addAnimation("Tom3",catImage3);
        tom.x = 300;
        tom.scale = 0.2
        tom.changeAnimation("Tom3");
        jerry.addAnimation("Jerry3",mouseImage3);
        jerry.changeAnimation("Jerry3");
        jerry.scale = 0.2;




    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
    if (keyCode === RIGHT_ARROW){
        tom.velocityX = -5;
        tom.addAnimation("Tom2", catImage2)
        tom.changeAnimation("Tom2")
        jerry.addAnimation("mouseTeasing", mouseImage2)
        jerry.changeAnimation("mouseTeasing");
        jerry.frameDelay = 25;
        
    }

}
