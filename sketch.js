// EXAMPLES OF DATA TYPES IN JAVASCRIPT

//string
var name = "Kaiden Paul"
//console.log(name)

// number
var num = 246
//console.log(num)

//boolean
var bool = true
//console.log(bool)

//undefined
var object;
//console.log(object)

object=null;
//console.log(object)

var arr1 = [1,2,3,4,5]
//console.log(arr1)
//console.log(arr1[4])

var arr2 = ["KJ",56,false]
//console.log(arr2[0])

var arr3 = [[1,2],[5,6],[7,8]]

console.log(arr3[1][1])

const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var score=0

var gameState = "onSling"

function preload() {

   // backgroundImg = loadImage("sprites/bg.png");
   getBgImage();
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    clog = new Log(200,200,100, PI/2);
    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 318, 300,200);

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1 = new Pig(810, 350);
    log1 = new Log(810,260,300, PI/2);

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig3 = new Pig(810, 220);

    log3 =  new Log(810,180,300, PI/2);

    box5 = new Box(810,160,70,70);
    log4 = new Log(760,120,150, PI/7);
    log5 = new Log(870,120,150, -PI/7);

    bird = new Bird(200,50);
    
     slingshot = new Slingshot(bird.body,{x:200,y:50}) //JSON - JAVASCRIPT OBJECT NOTATION


}

function draw(){
    if(backgroundImg)
      background(backgroundImg);

      noStroke()
      textSize(35)
      fill (255)
      text("Score: "+score,width-300,50)
    Engine.update(engine);
    //console.log(box2.body.position.x);
    //console.log(box2.body.position.y);
    //console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    pig1.score();
    log1.display();

    box3.display();
    box4.display();
    pig3.display();
    pig3.score();

    log3.display();

    box5.display();
    log4.display();
    log5.display();

    bird.display();
    platform.display();

   // clog.display();
    slingshot.display();

   // getTime();
   // strokeWeight(4);
   // line(bird.body.position.x,bird.body.position.y,clog.body.position.x,clog.body.position.y)
}
function mouseDragged(){
    //if(gameState !== "launched"){
    Matter.Body.setPosition(bird.body,{x:mouseX,y:mouseY});
  //  }


}
function mouseReleased(){
    slingshot.fly();
    gameState = "launched"
}
function keyPressed(){
    if(keyCode===32&&bird.body.speed<1){
        bird.trajectory=[]
        Matter.Body.setPosition(bird.body,{x:200,y:50});
        slingshot.attach(bird.body)
    }
    
}
async function getBgImage(){
        var response = await fetch("http://worldtimeapi.org/api/timezone/America/Chicago")
        var responseJSON = await response.json();
        //console.log(responseJSON.datetime)
        var datetime = responseJSON.datetime
        var hour=datetime.slice(11,13)
        console.log(hour)

        if(hour >= 6 && hour <= 18){
            bg="sprites/bg.png"
        }
        else{   
            bg="sprites/bg2.jpg" 
        }
        backgroundImg = loadImage(bg)
}