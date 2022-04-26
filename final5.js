let tower
let tower2

function preload(){
  tower = loadImage("tower.jpg");
  tower2= loadImage("tower2.jpg")
}

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(220);
  
  image(tower,0,0,600,600);
  image(tower2,220,210,100,100);
  
  image(tower2,310,250,100,100);
  loadPixels(); //blue for eye
  for (var y = 210; y< 310; y ++){
    for (var x = 220; x< 320;x++){
    var index = (x + y* width)*4;
    pixels[index +0] = 150;
    pixels[index+1]= 190;
    //pixels[index + 2]= 200;
    pixels[index + 3]= random(180,255);
    }
  } 
  updatePixels();
  
  image(tower2,190,180,100,100);
  
    loadPixels();
  for (var y = 180; y< 280; y ++){
    for (var x = 190; x< 290;x++){
    var index = (x + y* width)*4;
    //pixels[index +0] = 0;
   // pixels[index+1]= 180;
    pixels[index + 2]= 0;
    pixels[index + 3]= 130;
    }
  } 
  updatePixels();
  
  
    loadPixels(); 
  for (var y = 300; y< 340; y ++){
    for (var x = 280; x< 470;x++){
    var index = (x + y* width)*4;
    pixels[index +0] = 10;
    //pixels[index+1]= 130;
    //pixels[index + 2]= 200;
    pixels[index + 3]= 1905;
    }
  } 
  updatePixels();
  
   loadPixels(); 
  for (var y = 260; y< 290; y ++){
    for (var x = 100; x< 250;x++){
    var index = (x + y* width)*4;
    pixels[index +0] = 10;
    //pixels[index+1]= 130;
    //pixels[index + 2]= 200;
    pixels[index + 3]= random(190,255);
    }
  } 
  updatePixels();
  
  loadPixels(); 
  for (var y = 190; y< 220; y ++){
    for (var x = 50; x< 220;x++){
    var index = (x + y* width)*4;
    pixels[index +0] = 200;
    pixels[index+1]= 180;
    pixels[index + 2]= 0;
    pixels[index + 3]= 90;
    }
  } 
  updatePixels();
  
  
  loadPixels(); 
  for (var y = 130; y< 170; y ++){
    for (var x = 20; x< 100;x++){
    var index = (x + y* width)*4;
    pixels[index +0] = 250;
    //pixels[index+1]= 90;
    pixels[index + 2]= 200;
    pixels[index + 3]= 200;
    }
  } 
  updatePixels();
  
  loadPixels(); 
  for (var y = 230; y< 250; y ++){
    for (var x = 400; x< 480;x++){
    var index = (x + y* width)*4;
    pixels[index +0] = 200;
    pixels[index+1]= 180;
    pixels[index + 2]= 0;
    pixels[index + 3]= random(90,150);
    }
  } 
  updatePixels();
  
  
  
}