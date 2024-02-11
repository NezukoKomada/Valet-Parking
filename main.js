//Create a reference for canvas 
canvas=document.getElementById("mycanvas");
ctx=canvas.getContext("2d");
//Give specific height and width to the car image
greencar_width=75;
greencar_height=100;
background_image = "parkingLot.jpg";
greencar_image = "car2.png";

//Set initial position for a car image.
var greencarx=5;
var greencary=225;
function add() {
	//upload car, and background images on the canvas.
	backgroundimgtag=new Image();
	backgroundimgtag.onload=uploadbackground();
	backgroundimgtag.src=background_image;

	greencarimgtag=new Image();
	greencarimgtag.onload=uploadgreencar();
	greencarimgtag.src=greencar_image;
}
function uploadbackground() {
	//Define function ‘uploadBackground’
	console.log("inside background");
	ctx.drawImage(backgroundimgtag, 0, 0, canvas.width, canvas.height);
}

function uploadgreencar() {
	//Define function ‘uploadgreencar’.
	console.log("inside greencar");
	ctx.drawImage(greencarimgtag, greencarx, greencary, greencar_width, greencar_height);
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
    if(greencary>=10){
        greencary=greencary-10;
        console.log("When up arrow is pressed, x="+greencarx+"| y="+greencary);
        uploadbackground();
        uploadgreencar();
    }
}
function down(){
    if(greencary<=600){
        greencary=greencary+10;
        console.log("When down arrow is pressed, x="+greencarx+"| y="+greencary);
        uploadbackground();
        uploadgreencar();
    }
}
function left(){
    if(greencarx>=0){
        greencarx=greencarx-10;
        console.log("When left arrow is pressed, x="+greencarx+"| y="+greencary);
        uploadbackground();
        uploadgreencar();
    }
}
function right(){
    if(greencarx<=800){
        greencarx=greencarx+10;
        console.log("When right arrow is pressed, x="+greencarx+"| y="+greencary);
        uploadbackground();
        uploadgreencar();
    }
}
