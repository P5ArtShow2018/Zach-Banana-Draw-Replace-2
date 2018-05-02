var xpos;
var ypos;

function preload(){
  ban = loadImage('banana-clipart-emoji-3.png');
}

drawBan = function(){
  image(ban,xpos,ypos);
  imageMode(CENTER);
  
}
function setup() {
  createCanvas(windowWidth,windowHeight);
  frameRate(5);
  xpos = random(1,windowWidth);
  ypos = random(1,windowHeight);
  console.log("YEPPER PEPPER");
   console.log("YEPPER PEPPER");
    console.log("YEPPER PEPPER");
     console.log("YEPPER PEPPER");
      console.log("YEPPER PEPPER");
       console.log("YEPPER PEPPER");
        console.log("YEPPER PEPPER");
         console.log("YEPPER PEPPER");
          console.log("YEPPER PEPPER");
           console.log("YEPPER PEPPER");
            console.log("YEPPER PEPPER");
             console.log("YEPPER PEPPER");
              console.log("YEPPER PEPPER");
               console.log("YEPPER PEPPER");
}
 
function draw() {
 background(random(1,255),random(1,255),random(1,255));
 xpos = random(1,windowWidth);
 ypos = random(1,windowHeight);
  drawBan();

  
}