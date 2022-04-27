let turtle

function preload(){
  turtle = loadImage("turtle.jpg")
}

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(220);
  image(turtle,0,0,600,600);
  
  loadPixels(); 
  for (var y = 270; y< 340; y ++){
    for (var x = 80; x< 300;x++){
    var index = (x + y* width)*4;
    pixels[index +0] = 10;
    pixels[index+1]= 110;
    //pixels[index + 2]= 200;
    pixels[index + 3]= random(230,255);
    }
  } 
  updatePixels();
  
   loadPixels(); 
  for (var y = 200; y< 230; y ++){
    for (var x = 250; x< 600;x++){
    var index = (x + y* width)*4;
    pixels[index +0] = 150;
    //pixels[index+1]= 10;
    pixels[index + 2]= 10;
    pixels[index + 3]= 240;
    }
  } 
  updatePixels();
  
  loadPixels(); 
  for (var y = 170; y< 360; y ++){
    for (var x = 410; x< 510;x++){
    var index = (x + y* width)*4;
    pixels[index +0] = 100;
    pixels[index+1]= 10;
    //pixels[index + 2]= 200;
    pixels[index + 3]= 240;
    }
  } 
  updatePixels();
  
  loadPixels(); 
  for (var y = 440; y< 570; y ++){
    for (var x = 490; x< 530;x++){
    var index = (x + y* width)*4;
    //pixels[index +0] = 100;
    pixels[index+1]= 150;
    //pixels[index + 2]= 200;
    pixels[index + 3]= random(200,240);
    }
  } 
  updatePixels();
  
  loadPixels(); 
  for (var y = 460; y< 470; y ++){
    for (var x = 340; x< 580;x++){
    var index = (x + y* width)*4;
    pixels[index +0] = 200;
    pixels[index+1]= 255;
    pixels[index + 2]= 180;
    pixels[index + 3]= 255;
    }
  } 
  updatePixels();
  
  loadPixels(); 
  for (var y = 100; y< 120; y ++){
    for (var x = 160; x< 370;x++){
    var index = (x + y* width)*4;
    pixels[index +0] = 200;
    pixels[index+1]= 150;
    pixels[index + 2]= 0;
    pixels[index + 3]= random(200,255);
    }
  } 
  updatePixels();
}