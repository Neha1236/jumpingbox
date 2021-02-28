var canvas,box,surface1,surface2,surface3,surface4;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
surface1= createSprite (100,600,120,50);
surface1.shapeColor = "blue";

surface2= createSprite (300,600,120,50);
surface2.shapeColor = "orange";

surface3= createSprite(500,600,120,50);
surface3.shapeColor= "pink";

surface4= createSprite(700,600,120,50);
surface4.shapeColor= "green";


    //create box sprite and give velocity
box= createSprite (random(20,750));
box.shapeColor= "white"
box.velociyX = 9;
box.velociyY = 3;
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
   
  box.x = World.mouseX;
  box.y = World.mouseY;
  
  




drawSprites();

    //add condition to check if box touching surface and make it box
    if (surface1.isTouching(box) && box.bounceOff(surface1)){
box.shapeColor = "blue";
surface1.shapeColor = "blue";
    }
    if (surface2.isTouching(box) && box.bounceOff(surface2)){
        box.shapeColor = "orange";
        surface2.shapeColor = "orange";
            }

if (surface3.isTouching(box) && box.bounceOff(surface3)){
        box.shapeColor = "pink";
        surface3.shapeColor = "pink";
            }
            if (surface4.isTouching(box) && box.bounceOff(surface4)){
                box.shapeColor = "green";
                surface4.shapeColor = "green";
                    }
}
