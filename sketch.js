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
    
    text();
    
    
}