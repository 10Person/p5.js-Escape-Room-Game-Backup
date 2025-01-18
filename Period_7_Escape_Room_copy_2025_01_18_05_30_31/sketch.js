var cnv;
var level0 = false;
var level1 = false;
var level2 = false;
var level3 = false;
var level4 = false;
var level5 = false;
var level6 = false;
var level7 = false;
var level8 = false;
var ihms;
let level = 0;
//level1 variables
let classroompd7;

//level2 variables
let size = 100;
let x = 100;
let y = 100;
let z = 100;
let rx = 0;
let ry = 0;
let cam;
let lookx = 0;
let looky = 0;
let lookz = 0;
let d;
let enemy = true;
let collisionx = [];
let collisiony = [];
let collisionz = [440];
let canmove = true;
let font;
let text1 = true;
let win = false;
let soundOpen;
let lightswitch = -1;
let light0 = false;
let light1 = false;
let light2 = false;

//level3 variables
var pd7group3

//level4 variables


//level5 variables
var librarypd7;

//level6 variables
var coreClass;

//level7 variables


//level8 variables


function preload() {
  ihms = loadImage("ihms.jpeg")
  //level1 assets
  classroompd7 = loadImage("classroompd7.jpeg");
  //level2 assets
  soundFormats(".mp3");
  soundOpen = loadSound("soundOpen.mp3");
  // ikh = loadImage("ikh.jpeg");
  //level3 assets
  pd7group3 = loadImage("pd7group3.jpeg");
  //level4 assets
  // classroom3 = loadImage("classroom3.jpeg");
//level5 assets
 librarypd7 = loadImage("librarypd7.jpeg");
  //level6 assets
  coreClass = loadImage("coreClass.jpeg");
  //level7 assets
  bus = loadImage("bus.png");

  //level 8 assets
  // LunchRoomBackground = loadImage("lunchroom.jpeg");
  // pizza = loadImage("pizza.png");
  // Burger2 = loadImage("burger.png");
}

function setup() {
  cnv = createCanvas(1200, 600);
  level0 = true;
  font = loadFont("Roboto-Black.ttf")
} //end setup

function draw() {
  if (level0 == true) {
    levelZero();
  }
  //check to see if start button is pressed then go to level 1
  if (
    level0 == true &&
    mouseIsPressed &&
    mouseX > 0 &&
    mouseX < 200 &&
    mouseY < 527 &&
    mouseY > 478
  ) {
    level0 = false;
    level1 = true;
    levelOne();
  }
  //check to see if level 1 is complete then go to level 2
  if (
    level1 == true &&
    mouseIsPressed &&
    mouseX > 200 &&
    mouseX < 400 &&
    mouseY < 527 &&
    mouseY > 478
  ) {
    level2 = true;
    level1 = false;
    levelTwo();
  }
  if (
    level2 == true &&
    mouseIsPressed && keyIsDown(81)) {
    level3 = true;
    level2 = false;
    levelThree();
  }
  if (
    level3 == true &&
    mouseIsPressed &&
    mouseX > 600 &&
    mouseX < 800 &&
    mouseY < 527 &&
    mouseY > 478
  ) {
    level4 = true;
    level3 = false;
    levelFour();
  }
  if (
    level4 == true &&
    mouseIsPressed &&
    mouseX > 800 &&
    mouseX < 1000 &&
    mouseY < 527 &&
    mouseY > 478
  ) {
    level5 = true;
    level4 = false;
    levelFive();
  }
  if (
    level5 == true &&
    mouseIsPressed &&
    mouseX > 1000 &&
    mouseX < 1200 &&
    mouseY < 527 &&
    mouseY > 478
  ) {
    level6 = true;
    level4 = false;
    levelSix();
  }
  if (
    level6 == true &&
    mouseIsPressed &&
    mouseX > 0 &&
    mouseX < 200 &&
    mouseY < 560 &&
    mouseY > 530
  ) {
    level7 = true;
    level5 = false;
    levelSeven();
  }
  // if (
  //   level7 == true &&
  //   mouseIsPressed &&
  //   mouseX > 00 &&
  //   mouseX < 200 &&
  //   mouseY < 560 &&
  //   mouseY > 530
  // ) {
  //   level8 = true;
  //   level6 = false;
  //   levelEight();
  // }
  
  if(level2 === true) {
    levelTwo();
  }
} //end draw
