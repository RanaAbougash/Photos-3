let turkey;
let orang;

function preload() {
  turkey = loadImage("turkey.jpg");
  orang = loadImage("orang.jpeg");
}

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(220);

  image(turkey, 0, 0, 600, 600);

  //blues
  loadPixels(); //blue#4
  for (var y =360; y < 480; y++) {
    for (var x = 50; x < 150; x++) {
      var index = (x + y * width) * 4;
      pixels[index + 0] = 1;
      pixels[index + 1] = 1;
      pixels[index + 2] = 255;
      pixels[index + 3] = 215;
    }
  }
  updatePixels();

  loadPixels(); //blue#2
  for (var y = 250; y < 440; y++) {
    for (var x = 90; x < 150; x++) {
      var index = (x + y * width) * 4;
      pixels[index + 0] = 100;
      //pixels[index+1]= 5;
      pixels[index + 2] = 255;
      pixels[index + 3] = 100;
    }
  }
  updatePixels();

  loadPixels(); //blue#3
  for (var y = 300; y < 380; y++) {
    for (var x = 80; x < 200; x++) {
      var index = (x + y * width) * 4;
      //pixels[index +0] = 1;
      //pixels[index+1]= 1;
      pixels[index + 2] = 255;
      pixels[index + 3] = 255;
    }
  }
  updatePixels();

  loadPixels(); //blue#7
  for (var y = 460; y < 510; y++) {
    for (var x = 80; x < 230; x++) {
      var index = (x + y * width) * 4;
      pixels[index + 0] = 1;
      pixels[index + 1] = 1;
      pixels[index + 2] = 255;
      pixels[index + 3] = random(110, 255);
    }
  }
  updatePixels();

  loadPixels(); //blue#1
  for (var y = 260; y < 280; y++) {
    for (var x = 50; x < 120; x++) {
      var index = (x + y * width) * 4;
      pixels[index + 0] = 1;
      pixels[index + 1] = 1;
      pixels[index + 2] = 255;
      pixels[index + 3] = random(180, 255);
    }
  }
  updatePixels();
  
   loadPixels();//blue#5
  for (var y = 330; y < 480; y++) {
    for (var x = 165; x < 180; x++) {
      var index = (x + y * width) * 4;
      pixels[index + 0] = 1;
      pixels[index + 1] = 1;
      pixels[index + 2] = 255;
      pixels[index + 3] = 200;
    }
  }
  updatePixels();
  
  loadPixels(); //blue#8
  for (var y = 490; y < 580; y++) {
    for (var x = 130; x < 260; x++) {
      var index = (x + y * width) * 4;
      //pixels[index + 0] = 1;
      //pixels[index + 1] = 1;
      pixels[index + 2] = 255;
      pixels[index + 3] = 255;
    }
  }
  updatePixels();
  
  loadPixels(); //blue#8
  for (var y = 520; y < 530; y++) {
    for (var x = 30; x < 150; x++) {
      var index = (x + y * width) * 4;
      pixels[index + 0] = 10;
      pixels[index + 1] = 10;
      //pixels[index + 2] = 100;
      pixels[index + 3] = 230;
    }
  }
  updatePixels();
  
  //oranges
  image(orang, 480,320,90,160); //5
  
  loadPixels(); //6
  for (var y = 450; y < 480; y++) {
    for (var x = 430; x < 580; x++) {
      var index = (x + y * width) * 4;
      pixels[index + 0] = 160;
      //pixels[index + 1] = 60;
     // pixels[index + 2] = 1 ;
      pixels[index + 3] = 255;
    }
  }
  updatePixels();
  
  loadPixels();//5
  for (var y = 320; y < 465; y++) {
    for (var x = 480; x < 570; x++) {
      var index = (x + y * width) * 4;
      pixels[index + 0] = 140;
      //pixels[index + 1] = 60;
      pixels[index + 2] = 1 ;
      pixels[index + 3] = random(200,255);
    }
  }
  updatePixels();
  
  image(orang,450,280,90,110); //4
  
  loadPixels();//3
  for (var y = 160; y < 350; y++) {
    for (var x = 430; x < 490; x++) {
      var index = (x + y * width) * 4;
      pixels[index + 0] = 200;
      //pixels[index + 1] = 60;
      pixels[index + 2] = 1 ;
      pixels[index + 3] = 180;
    }
  }
  updatePixels();
   
  
   loadPixels();//2
  for (var y = 60; y < 300; y++) {
    for (var x = 480; x < 540; x++) {
      var index = (x + y * width) * 4;
      pixels[index + 0] = 255;
      //pixels[index + 1] = 1;
      pixels[index + 2] = 20 ;
      pixels[index + 3] = 210;
    }
  }
  updatePixels();  
  
  loadPixels();//1
  for (var y = 190; y < 250; y++) {
    for (var x = 460; x < 580; x++) {
      var index = (x + y * width) * 4;
      pixels[index + 0] = 180;
      pixels[index + 1] = 60;
      pixels[index + 2] = 0 ;
      pixels[index + 3] = random(200,255);
    }
  }
  updatePixels(); 
  
  loadPixels();//1
  for (var y = 50; y < 80; y++) {
    for (var x = 390; x < 510; x++) {
      var index = (x + y * width) * 4;
     //pixels[index + 0] = 0;
      pixels[index + 1] = 0;
      pixels[index + 2] = 0 ;
      pixels[index + 3] = 170;
    }
  }
  updatePixels(); 
  
  loadPixels();//1
  for (var y = 30; y < 130; y++) {
    for (var x = 470; x < 500; x++) {
      var index = (x + y * width) * 4;
     //pixels[index + 0] = 0;
      pixels[index + 1] = 0;
      pixels[index + 2] = 0 ;
      pixels[index + 3] = random(170,200);
    }
  }
  updatePixels(); 
  
}
