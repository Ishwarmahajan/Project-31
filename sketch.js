
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

var plinko = []
var particle = []
var divisions = []

var divisionHeight = 300

function preload()
{
	
}

function setup() {
	createCanvas(480, 750);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(240, 750, 480, 10)
	//divider = new Division(140, 300, 10, 100)
	plinko = new Plinko(200, 300, 20)
	particle = new Particle(200, 500, 20)

	for( k = 1; k <=width; k = k+80){
		divisions.push(new Division(k, height-divisionHeight/2, 10, divisionHeight))
    }

	for (var j = 0; j < particle.length; j = j+80) {
		particle[j].display()
	}

	/*for (var j = 40; j <= width; j = j+50){
		plinko.push(new Plinko(j, 75))
	}*/


	//Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  Engine.update(engine)

  for( k= 1; k < divisions.length; k = k+1) {
	 divisions[k].display()
  }


  /*for (var j = 40; j < plinko.length; j= j+1){
	plinko[j].display()
}*/
  
  //drawSprites();

  ground.display()
  //divider.display()
  //plinko.display()
  //particle.display()

 
}



