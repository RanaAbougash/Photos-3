let pic
let eye
let flower
let flower2


function setup() {
  createCanvas(600, 600);
  pixelDensity(1);
 // background(220);

  
}

function preload(){
  pic = loadImage('pic.jpg');
  eye = loadImage ('eye.jpg')
  flower = loadImage ('flower.jpg')
  flower2 = loadImage('flower2.jpg')
  
}


function draw() {
  
image(pic, 0,0,600,600);
  
loadPixels();
  for (var y = 0; y < height; y++) {
        for (var x = 0; x < width; x++) {
          var index = (x + y * width)*4;
        // pixels[index+0] = 190;
         // pixels[index+1] = 100;
         //pixels[index+2] = 50;
          pixels[index+3] = 230;      
        }
      }
updatePixels();
  
image(eye,110,70,55,110)
  loadPixels(); //blue for eye
  for (var y = 90; y< 190; y ++){
    for (var x = 120; x< 180;x++){
    var index = (x + y* width)*4;
    //pixels[index +0] = 200;
    pixels[index+1]= 150;
    pixels[index + 2]= 255;
    pixels[index + 3]= 200;
    }
  } 
  updatePixels();
  
  
  image(flower2, 230,300,320,130) //pink flower
  loadPixels();
  for (var y = 300; y< 439; y ++){
    for (var x = 230; x< 550;x++){
      var index = (x + y* width)*4;
      //pixels[index +0] = 200;
      pixels[index+1]= 1;
      //pixels[index + 2]= 255;
      pixels[index + 3]= random(150,255);
    }
  }
  
 updatePixels();
  
  image(flower, 190,240,310,145); 
  
  
   loadPixels(); // big blue
  for (var y = 200; y< 350; y ++){
    for (var x = 210; x< 530;x++){
      var index = (x + y* width)*4;
      //pixels[index +0] = 200;
      pixels[index+1]= 150;
      pixels[index + 2]= 255;
      pixels[index + 3]= 200;
    }
  }
  updatePixels();
  
   loadPixels();// pink for eye
  for (var y = 180; y< 230; y ++){
    for (var x = 60; x< 240;x++){
    var index = (x + y* width)*4;
    //pixels[index +0] = 200;
    pixels[index+1]= 1;
    //pixels[index + 2]= 255;
    pixels[index + 3]= random(150,255);
    }
  } 
  updatePixels();
}