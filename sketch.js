
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

    
    var ball_options={
		isStatic:false,
		restitution:0.3,    
		friction:0,
		density:1.2
	    }

	engine = Engine.create();
	world = engine.world;
    
	

	//Create the Bodies Here.
    ball = Bodies.circle(300,698,7,ball_options);
    World.add(world,ball);

	ground1=new Ground(width/2,698,800,2)
	
	
	ground2=new Ground(799,444,200,2)
	
	
	ground3=new Ground(799,600,200,2)
	
	
	Engine.run(engine);
    
}


function draw() {
  rectMode(CENTER);
  background(200);
  
  fill(0,255,0);
  



  Engine.update(engine);
  
  
  ground1.display();
  ground2.display();
  ground3.display();

  ellipse(ball.position.x, ball.position.y,7,7); 
}


function keyPressed(){
   if (keyCode===UP_ARROW) {
	Matter.boddie.circle(6,6,)
   }



}



