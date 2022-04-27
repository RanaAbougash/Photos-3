let shine
let green2
let shiny2

function preload(){
  shine = loadImage("shine.jpg");
  green2= loadImage("green2.png");
  shiny2 = loadImage("shiny2.png")
}

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(220);
  
  image(shine,0,0,600,600);
  
    loadPixels(); 
  for (var y = 250; y< 600; y ++){
    for (var x = 150; x< 220;x++){
    var index = (x + y* width)*4;
    pixels[index +0] = 10;
    //pixels[index+1]= 10;
    pixels[index + 2]= 70;
    pixels[index + 3]= 255;
    }
  } 
  updatePixels();  
  
  
  image(shiny2,180,360,250,260);
  
  
  loadPixels(); 
  for (var y = 100; y< 540; y ++){
    for (var x = 30; x< 100;x++){
    var index = (x + y* width)*4;
   // pixels[index +0] = 200;
    pixels[index+1]= 150;
    //pixels[index + 2]= 170;
    pixels[index + 3]= random(150,255);
    }
  } 
  updatePixels();
  
  loadPixels(); 
  for (var y = 230; y< 300; y ++){
    for (var x = 185; x< 460;x++){
    var index = (x + y* width)*4;
    pixels[index +0] = 110;
    pixels[index+1]= 160;
    //pixels[index + 2]= 110;
    pixels[index + 3]= random(200,255);
    }
  } 
  updatePixels();
  
  //image(green2, 160,150,240,180);
  
  loadPixels(); 
  for (var y = 230; y< 300; y ++){
    for (var x = 185; x< 460;x++){
    var index = (x + y* width)*4;
    pixels[index +0] = 110;
    pixels[index+1]= 160;
    //pixels[index + 2]= 110;
    pixels[index + 3]= random(200,255);
    }
  } 
  updatePixels();
  
  
    loadPixels(); 
  for (var y = 230; y< 300; y ++){
    for (var x = 185; x< 460;x++){
    var index = (x + y* width)*4;
    pixels[index +0] = 110;
    pixels[index+1]= 160;
    //pixels[index + 2]= 110;
    pixels[index + 3]= random(200,255);
    }
  } 
  updatePixels();
  
  image(green2, 140,150,240,180);
  
    loadPixels(); 
  for (var y = 230; y< 300; y ++){
    for (var x = 185; x< 460;x++){
    var index = (x + y* width)*4;
    pixels[index +0] = 110;
    pixels[index+1]= 160;
    //pixels[index + 2]= 110;
    pixels[index + 3]= random(200,255);
    }
  } 
  updatePixels();
  
  loadPixels(); 
  for (var y = 120; y< 500; y ++){
    for (var x = 280; x< 320;x++){
    var index = (x + y* width)*4;
    pixels[index +0] = 170;
    //pixels[index+1]= 10;
    pixels[index + 2]= 0;
    pixels[index + 3]= 200;
    }
  } 
  updatePixels();  
  
  
  image(green2,250,110,240,180);
  

  
  
  
  loadPixels(); 
  for (var y = 190; y< 200; y ++){
    for (var x = 150; x< 460;x++){
    var index = (x + y* width)*4;
    //pixels[index +0] = 1;
    pixels[index+1]= 100;
    pixels[index + 2]= 0;
    pixels[index + 3]= 200;
    }
  } 
  updatePixels();
   
  loadPixels(); 
  for (var y = 0; y< 280; y ++){
    for (var x = 350; x< 400;x++){
    var index = (x + y* width)*4;
    pixels[index +0] = 170;
    //pixels[index+1]= 10;
    pixels[index + 2]= 0;
    pixels[index + 3]= 200;
    }
  } 
  updatePixels();
  
   loadPixels(); 
  for (var y = 70; y< 110; y ++){
    for (var x = 370; x< 580;x++){
    var index = (x + y* width)*4;
    //pixels[index +0] = 180;
    pixels[index+1]= 140;
    pixels[index + 2]= 50;
    pixels[index + 3]= 255;
    }
  } 
  updatePixels();
  
    loadPixels(); 
  for (var y = 400; y< 600; y ++){
    for (var x = 350; x< 430;x++){
    var index = (x + y* width)*4;
    pixels[index +0] = 10;
    //pixels[index+1]= 10;
    pixels[index + 2]= 70;
    pixels[index + 3]= random(180,255);
    }
  } 
  updatePixels();  
  
  loadPixels(); 
  for (var y = 350; y< 370; y ++){
    for (var x = 330; x< 600;x++){
    var index = (x + y* width)*4;
    pixels[index +0] = 50;
    pixels[index+1]= 100;
    pixels[index + 2]= 80;
    pixels[index + 3]= 255;
    }
  } 
  updatePixels();
  
   loadPixels(); 
  for (var y = 50; y< 80; y ++){
    for (var x = 100; x< 200;x++){
    var index = (x + y* width)*4;
    pixels[index +0] = 50;
    pixels[index+1]= 100;
    pixels[index + 2]= 80;
    pixels[index + 3]= 255;
    }
  } 
  updatePixels();
  
  loadPixels(); 
  for (var y = 90; y< 110; y ++){
    for (var x = 150; x< 250;x++){
    var index = (x + y* width)*4;
    pixels[index +0] = 50;
    pixels[index+1]= 100;
    pixels[index + 2]= 80;
    pixels[index + 3]= random(180,255);
    }
  } 
  updatePixels();
  
   loadPixels(); 
  for (var y = 530; y< 550; y ++){
    for (var x = 450; x< 560;x++){
    var index = (x + y* width)*4;
    pixels[index +0] = 180;
    pixels[index+1]= 150;
    pixels[index + 2]= 0;
    pixels[index + 3]= 150;
    }
  } 
  updatePixels();
}