song="";
leftWristX=0;
leftWristY=0;
rightWristX=0;
rightWristY=0;

function preload(){
    song=loadSound("Musical.mp3");
}
function draw(){
image(video,0,0,500,600);
background()
}
function setup(){

canvas=createCanvas(500,500);
canvas.center();
video=createCapture(VIDEO);
video.hide();

poseNet=ml5.poseNet(video,Modelloaded);
poseNet.on('pose',gotresult);
 
    
}

function Modelloaded(){
console.log('Posenet is Initialized');
}

function Play(){
    btn_txt=document.getElementById("button").innerHTML;
    song.setVolume(0.5);
    song.rate(1);

    
 if (btn_txt == "Play" ){
     song.play();
     document.getElementById("button").innerHTML="Pause";
 }
 else {

song.pause();
document.getElementById("button").innerHTML="Play";
 }


}

function gotresult(results){
    if (results.length > 0){
        console.log(results);
        leftWristX=results[0].pose.leftWrist.x;
        leftWristY=results[0].pose.leftWrist.y;
        rightWristX=results[0].pose.rightWrist.x;
        rightWristY=results[0].pose.rightWrist.y;

        console.log("Left Wrist x= " + leftWristX + ",Left Wrist y= " + leftWristY);
        console.log("Right Wrist x=" + rightWristX + ", Right Wrist x= " + rightWristY );

        
         
    }
}

   