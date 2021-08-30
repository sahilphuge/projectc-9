var btn_red;
var btn_black;

var r = 0;
var g = 0;
var b = 0;

function setup() {
  createCanvas(400, 400);
  btn_red = createButton("RED");
  btn_red.position(100,50);
  btn_red.mousePressed(red_bg);
  
  
  btn_green = createButton("black");
  btn_green.position(250,50);
  btn_green.mousePressed(black_bg);
  
}

function draw() {
  background(r,g,b);
}


function red_bg()
{
  r = 255;
  g = 0;
  b =0;
}

function black_bg()
{
  r = 0;
  g = 0;
  b =0;
}