let wind
let wind2

function preload(){
  wind = loadImage("wind.jpg");
  wind2 = loadImage("wind2.png");
}

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(220);
  
  image (wind,0,0,600,600);
  //image (wind2, 100,200,210,280)
  
  //image (wind2, 40,50,210,280);
  
  
  loadPixels();
  for (var y = 0; y < 300; y++) {
        for (var x = 170; x < 210; x++) {
          var index = (x + y * width)*4;
         pixels[index+0] = 0;
         pixels[index+1] = 0;
         pixels[index+2] = 0;
        pixels[index+3] = 230;      
        }
      }
updatePixels();
  
  
  loadPixels();
  for (var y = 0; y < 250; y++) {
        for (var x = 220; x < 260; x++) {
          var index = (x + y * width)*4;
         pixels[index+0] = 0;
         pixels[index+1] = 0;
         pixels[index+2] = 0;
        pixels[index+3] = random(210,233);      
        }
      }
updatePixels();
  
  
  
  loadPixels();
  for (var y = 370; y < 600; y++) {
        for (var x = 340; x < 370; x++) {
          var index = (x + y * width)*4;
         pixels[index+0] = 0;
         pixels[index+1] = 0;
         pixels[index+2] = 0;
        pixels[index+3] = 230;      
        }
      }
updatePixels();
  
  loadPixels();
  for (var y = 300; y < 600; y++) {
        for (var x = 380; x < 410; x++) {
          var index = (x + y * width)*4;
         pixels[index+0] = 0;
         pixels[index+1] = 0;
         pixels[index+2] = 0;
        pixels[index+3] = random(180,233);      
        }
      }
updatePixels();
  
  loadPixels();
  for (var y = 410; y < 440; y++) {
        for (var x = 80; x < 280; x++) {
          var index = (x + y * width)*4;
         pixels[index+0] = 233;
         pixels[index+1] = 70;
         //pixels[index+2] = 0;
        pixels[index+3] = 230;      
        }
      }
updatePixels();
  
  loadPixels();
  for (var y = 390; y < 420; y++) {
        for (var x = 30; x < 150; x++) {
          var index = (x + y * width)*4;
         pixels[index+0] = 233;
         pixels[index+1] = 100;
         //pixels[index+2] = 0;
        pixels[index+3] = random(200,233);      
        }
      }
updatePixels();
  
    loadPixels();
  for (var y = 140; y < 150; y++) {
        for (var x = 50; x < 100; x++) {
          var index = (x + y * width)*4;
         pixels[index+0] = 233;
         pixels[index+1] = 100;
         //pixels[index+2] = 0;
        pixels[index+3] = random(200,233);      
        }
      }
updatePixels();
  
    loadPixels();
  for (var y = 140; y < 150; y++) {
        for (var x = 360; x < 550; x++) {
          var index = (x + y * width)*4;
        pixels[index+0] = 0;
        pixels[index+1] = 80;
         pixels[index+2] = 120;
        pixels[index+3] = 200;      
        }
      }
updatePixels();
  
  
  
   loadPixels();
  for (var y = 160; y < 190; y++) {
        for (var x = 330; x < 530; x++) {
          var index = (x + y * width)*4;
         //pixels[index+0] = 233;
         pixels[index+1] = 170;
         pixels[index+2] = 150;
        pixels[index+3] = random(200,233);      
        }
      }
updatePixels();
  
  loadPixels();
  for (var y = 180; y < 210; y++) {
        for (var x = 400; x < 580; x++) {
          var index = (x + y * width)*4;
         pixels[index+0] = 0;
         pixels[index+1] = 100;
         //pixels[index+2] = 0;
        pixels[index+3] = 150;      
        }
      }
updatePixels();
  
    loadPixels();
  for (var y = 485; y < 500; y++) {
        for (var x = 460; x < 530; x++) {
          var index = (x + y * width)*4;
         //pixels[index+0] = 0;
         pixels[index+1] = 60;
         pixels[index+2] = 100;
        pixels[index+3] = 233;      
        }
      }
updatePixels();
  
  
   
  //image (wind2, 40,50,210,280);
  
  
   
}