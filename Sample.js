// Matter.js module aliases
var Engine = Matter.Engine,
    World = Matter.World,
    Bodies = Matter.Bodies;

// create a Matter.js engine
var engine = Engine.create(document.body);

var boxWidth = 800;
var boxHeight = 600;
var wallThickness = 40;

// create two boxes and a ground
var circleA = Bodies.circle(400, 200, 20);
var circleB = Bodies.circle(450, 50, 20);

var leftWall = Bodies.rectangle(wallThickness, boxHeight / 2, wallThickness, 
	boxHeight, { isStatic: true });
var rightWall = Bodies.rectangle(boxWidth - wallThickness, boxHeight / 2 , wallThickness, 
	boxHeight, { isStatic: true });
var topWall = Bodies.rectangle(boxWidth / 2, wallThickness, boxWidth, 
	wallThickness, { isStatic: true });
var bottomWall = Bodies.rectangle(boxWidth / 2, boxHeight - wallThickness, boxWidth,
	wallThickness, { isStatic: true });

// add all of the bodies to the world
World.add(engine.world, [circleA, circleB, leftWall, rightWall, topWall, bottomWall]);

// run the engine
Engine.run(engine);
