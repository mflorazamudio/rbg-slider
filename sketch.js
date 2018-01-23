var redSlider, greenSlider, blueSlider;

function setup(){
    createCanvas(600, 400);
    background(0);
    
    //createSlider(min, max, default)
    redSlider = createSlider(0, 255, 255);
    //.position(x,y)
    redSlider.position(20, 20);
    
    greenSlider = createSlider(0, 255, 255);
    greenSlider.position(20, 50);
    
    blueSlider = createSlider(0, 255, 255);
    blueSlider.position(20, 80);
    
}

function draw(){
    var r = redSlider.value();
    var g = greenSlider.value();
    var b = blueSlider.value();
    
    background(r, g, b);
    
    textSize(12);
    textAlign(LEFT,BASELINE);
    text("red", 150, 25);
    text("green", 150, 55);
    text("blue", 150, 85);
    
    text(r, 200, 25);
    text(g, 200, 55);
    text(b, 200, 85);
    
    textSize(20);
    textAlign(CENTER,CENTER);
    text("rgb("+r+", "+g+", "+b+")", width/2, height/2);
    
}