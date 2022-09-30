function preload() {                                                                             
}                                                                                                                                

function setup() {
    canvas = createCanvas(400, 400);
    canvas.position(100, 300);
    video = createCapture(VIDEO);
    video.hide();

    tint_color = "";
}

function draw() {
    image(video, 100, 100, 200, 200);
    tint(tint_color);
    fill("blue");
    circle(70,70,60);
    circle(76,350,60);
    circle(345,70,60);
    circle(350,350,60);
    fill("red");
    rect(100,53,215,40);
    rect(105,330,215,40);
    rect(53,100,40,220);
    rect(325,100,40,220);


}

function take_snapshot(){
    save('myFilterImage.png');
}