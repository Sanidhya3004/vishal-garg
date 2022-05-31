canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

//Define the width & height of the rover image.



background_image = "mars.jpg";

rover_image = "rover.png";
rover_width = 100;
rover_height = 90;
rover_x = 10;
rover_y = 10;

//Create "add()" function
 

 function add(){
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_image;
	                                                                        
    rover_imageTag =  new Image();  
    rover_imageTag.onload = uploadrover;
    rover_imageTag.src = rover_image; 
 }                                     
	                            

function uploadBackground() {
    ctx.drawImage(background_imgTag,  0, 0, canvas.width, canvas.height);
}
                          
function uploadrover() {
    ctx.drawImage(rover_imageTag,  rover_x,  rover_y, rover_width, rover_height);
}              




window.addEventListener("keydown", my_keydown);
function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
    if(keyPressed == '38') 
    {
        up();
        console.log("up");
    }
    if(keyPressed == '40') 
    {
        down();
        console.log("down");
    }
    if(keyPressed == '37') 
    {
        left();
        console.log("left");
    }
    if(keyPressed == '39') 
    {
        right();
        console.log("right");
    }
}

function up(){

}
function down(){
	
}
function right(){
	
}
function left(){
	
}


