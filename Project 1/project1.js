let girlImage1;

function preload() {
    girlImage1 = loadImage('https://michaellabuno.github.io/Project%201/lofigirl.gif');
}


function setup() {
    createCanvas(400, 400);
    brackground('gray');
    image(girlImage1, 0, 0);
}

function draw() {
    circle(200, 200, 50);


}
