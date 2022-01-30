function preload(){
}
function setup(){
    canvas = createCanvas(800, 480);
    background(198)
    canvas.position(112, 160)
    video = createCapture(VIDEO);
    video.hide();
}
function draw(){
    image(video, 250, 100, 300, 300);
    let c = color('blue');
    fill(c);
    stroke(128, 0, 0);
    circle(80, 50, 60);
    circle(80, 450, 60);
    circle(740, 50, 60);
    circle(740, 450, 60);
    rect(60, 80, 40, 340);
    rect(720, 80, 40, 340);
    rect(110, 20, 600, 50);
    rect(110, 425, 600, 50);
}
function take_snapshot(){
    save("firstP5project.png");
}