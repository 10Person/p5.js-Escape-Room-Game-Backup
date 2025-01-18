function levelTwo() {
  createCanvas(1200, 600, WEBGL);
  background(0);
  normalMaterial();
  cam = createCamera()
  
  // Creates a box
  translate(x, y, z);
  rotateX(rx);
  rotateY(ry);
  box(1000, 50, 5);
  
  if(enemy === true) {
    translate(100, 50, 100);
    fill(100);
    sphere(size); }
  
  if(lightswitch >= 0) {
    translate(-1200, 0, 10);
    rotateX(rx);
    rotateY(ry);
    fill(252, 238, 167);
    cylinder(50, 150);
  }
  
  //cam
  cam.lookAt(lookx, looky, lookz)
  
  // Movement for the box
  if(win === false) {
    if(canmove === true) {
      if(keyIsDown(87)) {
        z += 10;
      } else if(keyIsDown(83)) {
        z -= 10;
      } // Back & Forth
        else if(keyIsDown(68)) {
          x -= 10;
        } else if(keyIsDown(65)) {
          x += 10;
        } else if(keyIsDown(16)) {y += 10;} else if(keyIsDown(17)) {y -= 10;} else if(keyIsDown(90)) {
          lookx -= 20;
        } else if(keyIsDown(67)) {
          lookx += 20;
        }
    }
  }
  
  // Collisions
  if(z >= 420 && x <= 460 && x >= -510) {
    canmove = false;
    z--;
  } else {canmove = true;}
  
  if(x <= -10 && x >= -400 && z >= 100 && keyIsDown(81)) {
    enemy = false;
    text1 = false;
    for(let i = 0; i <= 1; i++) {
      lightswitch++;
    }
                   
    fill("#FFFFF");
    textFont(font);
    textSize(30); 
    text("Thou must press the lightswitch warm \n\ the same number of times as half a day \n\ over 4, then thou must press the symbol above /", -300, 10);
  } else if(x <= 1010 && x >= 800 && z >= 100) {
    light0 = true;
    if(light0 === true) {
      light1 = true;
    }
    if(light1 === true) {
      light2 = true;
    }
  } else {
    enemy = true;
    text1 = true;
  }
  
  // camera
  console.log(x, y, z);
  
  if(win === true) {
    text1 = false; 
    
    fill("#FFFFF");
    textFont(font);
    textSize(36);
    text("You Escaped", 0, 0);
    
    lookx = 0;
    looky = 0;
    
    level2 = false;
    level3 = true;
    levelThree();
  }
  
  if(text1 === true) {
    fill("#FFFFF");
    textFont(font);
    textSize(36);
    text("There Is No Escape", -120, -20); 
    textSize(12);
    text("Press Q to Interact, Z & C to look around", -119, -10);
  }
  
  if(keyIsDown(191) && light2 === true) {
    win = true;
  }
  
  if(lookx >= 5000 || lookx <= -5000) {lookx *= -1}
 
  console.log(lookx)
  console.log(lightswitch)
}

function openSound() {
  soundOpen.play();
}