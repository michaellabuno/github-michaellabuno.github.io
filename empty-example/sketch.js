<html>

<head>

<script src="https://cdn.jsdelivr.net/npm/p5@1.4.0/lib/p5.js">
</script>

<script src="sketch.js"></script>

</head>

<body>
  
function setup() {
  createCanvas(400,400);
}

function draw() {
if (mouseIsPressed){
  fill(0);
} else {
  fill(255);
}
ellipse(mouseX,mouseY,80,80);
}
</body>

</html>
