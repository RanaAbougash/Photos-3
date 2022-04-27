let redd
let redd2

function preload(){
  
  redd = loadImage ("redd.jpg");
  redd2 = loadImage ("redd2.jpg");
}

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(220);
  
  image(redd,0,0,600,600);
  image(redd2,150,280,120,230);
  
  loadPixels(); 
  for (var y = 280; y< 510; y ++){
    for (var x = 150; x< 270;x++){
    var index = (x + y* width)*4;
    pixels[index +0] = 150;
    //pixels[index+1]= 100;
    //pixels[index + 2]= 180;
    //pixels[index + 3]= 200;
    }
  } 
  updatePixels();
  
    loadPixels(); 
  for (var y = 70; y< 400; y ++){
    for (var x = 200; x< 280;x++){
    var index = (x + y* width)*4;
    //pixels[index +0] = 150;
    pixels[index+1]= 0;
    pixels[index + 2]= 0;
    pixels[index + 3]= random(200,255);
    }
  } 
  updatePixels();
  
  loadPixels(); 
  for (var y = 70; y< 400; y ++){
    for (var x = 200; x< 280;x++){
    var index = (x + y* width)*4;
    //pixels[index +0] = 150;
    pixels[index+1]= 0;
    pixels[index + 2]= 0;
    pixels[index + 3]= random(200,255);
    }
  } 
  updatePixels();
  
  loadPixels(); 
  for (var y = 310; y< 350; y ++){
    for (var x = 230; x< 500;x++){
    var index = (x + y* width)*4;
    pixels[index +0] = 255;
    //pixels[index+1]= 0;
    pixels[index + 2]= 50;
    pixels[index + 3]= 200;
    }
  } 
  updatePixels();
  
  loadPixels(); 
  for (var y = 150; y< 180; y ++){
    for (var x = 80; x< 260;x++){
    var index = (x + y* width)*4;
    pixels[index +0] = 250;
    //pixels[index+1]= 1;
    //pixels[index + 2]= 180;
    pixels[index + 3]= 255;
    }
  } 
  updatePixels();
  
  loadPixels(); 
  for (var y = 380; y< 600; y ++){
    for (var x = 400; x< 440;x++){
    var index = (x + y* width)*4;
    pixels[index +0] = 150;
    //pixels[index+1]= x;
    //pixels[index + 2]= 40;
    pixels[index + 3]= random(150,255);
    }
  } 
  updatePixels();
  
  loadPixels(); 
  for (var y = 0; y< 60; y ++){
    for (var x = 250; x< 420;x++){
    var index = (x + y* width)*4;
    pixels[index +0] = 180;
    //pixels[index+1]= x;
    //pixels[index + 2]= 160;
    pixels[index + 3]= 255;
    }
  } 
  updatePixels();
  
  loadPixels(); 
  for (var y = 200; y< 230; y ++){
    for (var x = 340; x< 420;x++){
    var index = (x + y* width)*4;
    pixels[index +0] = 250;
    pixels[index+1]= 80;
    pixels[index + 2]= 70;
    pixels[index + 3]= 240;
    }
  } 
  updatePixels();
  
  
}