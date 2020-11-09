const Engine =  Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world, ground;

var  stand1, stand2, box1, box2,poly, sling;

var boxGroup = [];
var boxdispFlag = true;

function setup() {
  createCanvas(800,400);
  var boxscenter = width/2;
  var boxnum1 = Math.floor((width/4)/30);
  var boxs1x_start =  boxscenter-boxnum1/2*30;
  var boxs1x_end = boxs1x_start+30*boxnum1;
  var stand1y = height - 100;
  var boxs1y=stand1y - 10;
  var j=0;

 
  engine = Engine.create();
  world= engine.world; 
  
 
  ground = new Ground(width/2,height-10,width,20)

  stand1 = new Ground(width/2,stand1y,width/4,10);
  stand2 = new Ground(width-40,height/2+20,width/5,10)

  for(var i = boxs1x_start; i<=boxs1x_end; i=i+30)
  {
    box1 = new Box(i,boxs1y,30,30);
    boxGroup[j] = box1;
    j ++;    
  }
  for (var k=boxs1x_start+30; k<=boxs1x_end-30; k=k+30)
  {
    box1 = new Box(k,boxs1y-30,30,30);
    boxGroup[j] = box1;
    j ++;    
  }
  for (var l=boxs1x_start+60; l<=boxs1x_end-60; l=l+30)
  {
    box1 = new Box(l,boxs1y-60,30,30);
    boxGroup[j] = box1;
    j ++;    
  }
  for (var m=boxs1x_start+90; m<=boxs1x_end-90; m=m+30)
  {
    box1 = new Box(m,boxs1y-90,30,30);
    boxGroup[j] = box1;
    j ++;    
  }
  poly = new Polygon(80,height-120,30);
  sling = new Sling(poly.body,{x:80,y:height-120})

}

function draw() {
  background(200,255,255);  
  Engine.update(engine);

  ground.display();
  stand1.display();
  stand2.display();
  
    for(var i=0; i< boxGroup.length;i++)
    {
      box1 = boxGroup[i];      
      box1.display();     
    }
    poly.display();
}

function mouseDragged()
{
  Matter.Body.setPosition(poly.body,{x:mouseX,y:mouseY});
}

function mouseReleased()
{
  sling.fly();
}
function keyPressed()
{
  if(keyCode===32)
  {
  sling.attach(poly.body);
  }
}