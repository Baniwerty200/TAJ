var cat,catAni,catAni2,catAni3,mouse,mouseAni,mouseAni2,mouseAni3,garden;
function preload() {
    //load the images here
    catAni=loadAnimation("images/cat1.png");
    catAni2=loadAnimation("images/cat2.png","images/cat3.png");
    catAni3=loadAnimation("images/cat4.png");
    mouseAni=loadAnimation("images/mouse1.png");
    mouseAni2=loadAnimation("images/mouse2.png","images/mouse3.png");
    mouseAni3=loadAnimation("images/mouse4.png");
    garden=loadImage("images/garden.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat=createSprite(870,600,50,50);
    cat.addAnimation("CAT",catAni); 
    cat.scale=0.2;
    
    mouse=createSprite(200,600,50,50);
    mouse.addAnimation("MOUSE",mouseAni);
    mouse.scale=0.15;
   
    cat.setCollider("rectangle",0,0,20,20);
}

function draw() {

    background(garden);
    //Write condition here to evalute if tom and jerry collide
    if (cat.isTouching(mouse)){
       cat.velocityX=0;
       
       cat.addAnimation("CATANI3",catAni3);
       cat.changeAnimation("CATANI3",catAni3);
       mouse.addAnimation("MOUSEANI3",mouseAni3);
       mouse.changeAnimation("MOUSEANI3",mouseAni3);
    }
    drawSprites();  
    
}


function keyPressed(){

  //For moving and changing animation write code here
  if (keyCode===LEFT_ARROW){
    cat.velocityX=-5;
     cat.addAnimation("CATANI2",catAni2)
    cat.changeAnimation("CATANI2",catAni2);
    
    mouse.addAnimation("MOUSEANI2",mouseAni2);  
    mouse.changeAnimation("MOUSEANI2",mouseAni2);  
}

}
