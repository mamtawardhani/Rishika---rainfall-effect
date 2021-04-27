const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

var en ,  wo 
function setup() {
  createCanvas(800,400);

  en = Engine.create()

  wo = en.world
  console.log(wo)
 
}

function draw() {
  background(0);

  Engine.update(en)
  
  

  drawSprites();
}

//engine //world //bodies