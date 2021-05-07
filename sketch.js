const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var particles = [];
var plinkos = [];
var divisions =[];
var divisionsHeight = 300;
function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(240,795,4800,10);


  for(var k = 0; k <=width;k = k + 80) 
  {
    divisions.push(new Division(k,height-divisionsHeight/2,10,divisionsHeight));
  }

  for(var j = 40; j <=width; j = j+50)
  {
    plinkos.push(new Plinko(j,70));
  }

  for (var j = 15; j <=width-10; j = j+50)
  {
    plinkos.push(new Plinko(j,170));
  }
  for(var j = 40; j <=width; j = j+50)
  {
    plinkos.push(new Plinko(j,250));
  }

  for (var j = 15; j <=width-10; j = j+50)
  {
    plinkos.push(new Plinko(j,340));
  }
  for(var j = 40; j <=width; j = j+50)
  {
    plinkos.push(new Plinko(j,440));
  }

};

function draw() {
  background("#ff7ab2");  
  Engine.update(engine);
  drawSprites();

  for (var k = 0; k < divisions.length; k++)
  {
    divisions[k].display();
  }
  
  if(frameCount%60===0)
  {
    particles.push(new Particle(random(width/2-10,width/2+10),10,10));
  }
  for(var h = 0; h<particles.length; h++)
  {
    particles[h].display();
  }
  for(var j = 0; j < plinkos.length; j++)
  {
    plinkos[j].display();
  }


  ground.display();
};
