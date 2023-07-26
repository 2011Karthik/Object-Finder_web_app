Status = "";

function setup() {
    canvas = createCanvas(480, 340);
    canvas.center();
    video.hide()
    video.size()
}

function start() {
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
    document.getElementById("Input_Box").value;
}

function modelLoaded() {
    document.getElementById("status").innerHTML = "Model Loaded!";
}
function draw() {
    image(video, 0, 0, 480, 380);
}
