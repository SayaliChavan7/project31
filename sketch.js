const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var thunder, thunder1, thunder2, thunder3, thuder4;
var umbrella;
var maxDrops = 100;
var drops = [];
var rand;
var thunderCreatedFrame = 0;

function preload(){
    thunder1 = loadImage("1.png");
    thunder2 = loadImage("2.png");
    thunder3 = loadImage("3.png");
    thunder4 = loadImage("4.png");
}

function setup(){
    var canvas = createCanvas(650,650);
    
    //creating engine
    engine = Engine.create();
    world = engine.world;
    
    //creating umbrella
    umbrella = new Umbrella(200,450);

    //adding the drops to the array
    if(frameCount % 100 === 0){

        for(var i=0; i<maxDrops; i++){
            drops.push(new Drops(random(0,400), random(0,400)));
        }
    }
}

function draw(){
    background(0);

    Engine.update(engine);

    //thunder effect
      rand = Math.round(random(1,4));
      if(frameCount%50===0){
          thunderCreatedFrame=frameCount;
          thunder = createSprite(random(10,370), random(10,30), 10, 10);
          switch(rand){
              case 1: thunder.addImage(thunder1);
              break;
              case 2: thunder.addImage(thunder2);
              break; 
              case 3: thunder.addImage(thunder3);
              break;
              case 4: thunder.addImage(thunder4);
              break;
              default: break;
          }
          thunder.scale = random(0.3,0.6)
      }

      //destroying the thunder when it reaches a particular frame count
      if(thunderCreatedFrame + 20 === frameCount && thunder){
          thunder.destroy();
      }

      umbrella.display();

      //displaying rain drops
      for(var i = 0; i<maxDrops; i++){
          drops[i].display();
          drops[i].changePosition();
      }

      drawSprites();
}   
