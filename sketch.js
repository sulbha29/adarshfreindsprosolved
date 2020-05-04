const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1; 
var pig1;
var backgroundImg,platform;
var bird, slingshot;
var dbg="sprites/school.jpg";
var score=0;
var gameState = "onSling";
var pimg=[];


function preload() {
    backgroundImg = loadImage("sprites/school.jpg");
bg();
pimg[0]= loadImage("sprites/Abhishek.JPG")
pimg[1]= loadImage("sprites/Avinash.jpg")
pimg[2]= loadImage("sprites/suvedh.JPG")
pimg[3]= loadImage("sprites/Avinash.jpg")  
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
 
    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1 = new Pig(810, 350,pimg[0]);
    pig2=new Pig (615,300,pimg[1]);
    log1 = new Log(810,260,300, PI/2);

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig3 = new Pig(810, 220,pimg[2]);
    pig4=new Pig (1005,300,pimg[3]);
    log3 =  new Log(810,180,300, PI/2);

    box5 = new Box(810,160,70,70);
    box6=new Box(615,320,70,70);
    box7=new Box(1005,320,70,70)
    log4 = new Log(760,120,150, PI/7);
    log5 = new Log(870,120,150, -PI/7);

    bird = new Bird(200,50);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(bird.body,{x:200, y:50});
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    text("Score:"+score,650,50);
    //strokeWeight(4);
    box1.display();
    box2.display();
    ground.display();
   
    log1.display();

    box3.display();
    box4.display();
  
    pig1.display();
    pig2.display();
    pig3.display();
    pig4.display();
    log3.display();
pig3.score();
pig4.score();
pig1.score();
pig2.score();
    box5.display();
    box6.display();
    log4.display();
    log5.display();
    box7.display();

    bird.display();
    platform.display();
    //log6.display();
    slingshot.display(); 
   
}

function mouseDragged(){
    if (gameState!=="launched"){
        Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
    }
}


function mouseReleased(){
    slingshot.fly();
    gameState = "launched";
}

function keyPressed(){
    gameState="onSling";
    if(keyCode === 32){
       slingshot.attach(bird.body);
    }
}

async function bg(){
    var response= await fetch("http://worldtimeapi.org/api/timezone/Asia/kolkata");
    var Js=await response.json();
    console.log(Js);
    var date=Js.datetime;
    console.log(date);
    var time=date.slice(11,13);
    console.log(time);
    if(time>06&&time<19){
dbg="sprites/school.jpg"
    }
    else{
        dbg="sprites/home.jpg"
    }
    backgroundImg=loadImage(dbg);
}