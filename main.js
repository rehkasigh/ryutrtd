
function preload(){
 
} 
function setup(){
    canvas=createCanvas(300,400);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();
  
}
function modelLoaded(){
    console.log('poseNet is initilized');
}

function take_snapshot(){
    save('myfilterimage.png');
}