/*
     Name: Cathleen Carbonell
     Date: 07/09/2015
     Class & Section:  WIA- 1507
     Comments: "HTML5 Canvas Drawing"
 */


/*******************************************
HTML5 Shape Drawing Activity
    1.  Setup the canvas and 2d context
    2.  Draw out each shape in the sections below
     
********************************************/

/*******************************************
FILE SETUP

// Setup up 7 different Canvases in index.html one for each problem.
//Link Modernizr.js
// Link the main.js file
// Setup the call to that canvas and get it's 2d context
//Use Modernizr to verify that your browser supports canvas, include a fallback message


/*******************************************
PART 1

Draw a rectangle starting at point (0 ,0)
That has a width of 50 px and a heigh of 100px
Set the color of the rectangle to a shade of blue.
Set the stroke color to black and the dimension of the stroke are the same as the rectangle.

Reminder - set the style first then draw.
********************************************/

//Draw Rectangle here

window.onload = function() {

    var rect = document.getElementById('rectangle');
				if (rect && rect.getContext) {
					var ctx = rect.getContext("2d");
					if (ctx) {
					
						ctx.fillStyle = 'rgb(50 , 0, 230)';
						ctx.strokeStyle = 'rgb(0 , 0, 0)';
						
						ctx.fillRect(0, 0, 50, 100);
						ctx.strokeRect(0, 0, 50, 100);
					}
				}
			


/*******************************************
PART 2

Draw a circle starting at point (50 ,50)
That has a radius of 20 px 
Set the color of the circle to a shade of red and set the alpha to .5
Set the stroke color to black and use a radius of 30px for this circle.

Reminder - set the style first then draw.
Use the arc method
********************************************/


//Draw Circle here
  
    var circ = document.getElementById('circle');
				if (circ && circ.getContext) {
					var ctx2 = circ.getContext("2d");
					
					if (ctx2) {
					
						ctx2.fillStyle = 'rgba(255, 0, 0, 0.5)';
						ctx2.strokeStyle = 'rgb(0, 0, 0)';
						
						ctx2.beginPath();
						ctx2.arc(50, 50, 20, 2*Math.PI, false);
						ctx2.lineWidth = 30;
						ctx2.fill();
						ctx2.stroke();
					}
				}
			




/*******************************************
PART 3

Practice using Path drawing.
Create a 5-point star shaped pattern using the lineTo method.
Begin this shape at (100, 100)

Height and width and color are up to you.

********************************************/

    //Draw Star here
	
	var star = document.getElementById('star');
	
			if (star && star.getContext) {
	             var ctx3 = star.getContext("2d");
	             
	             if (ctx3) {
	             
	             	ctx3.fillStyle = 'rgba(255, 250, 205, 0.8)';
	             	ctx3.strokeStyle = 'rgb(255, 205, 0)';
	             	ctx3.linewidth = 3;
	             	
	             	ctx3.beginPath();
	             	ctx3.moveTo(100,100);
	             	ctx3.lineTo(130, 50);
	             	ctx3.lineTo(160, 100);
	             	ctx3.lineTo(205, 100);
	             	ctx3.lineTo(160, 145);
	             	ctx3.lineTo(185, 195);
	             	ctx3.lineTo(130, 160);
	             	ctx3.lineTo(80, 195);
	             	ctx3.lineTo(100, 145);
	             	ctx3.lineTo(60, 100);
	             	ctx3.lineTo(100, 100);
	             	
	             	ctx3.fill();
	             	ctx3.stroke();
	             	
	             	}
	             }
	             
	    
	             	



/*******************************************
PART 4

Practice drawing with Bezier curves.
Try drawing the top to an umbrella.
This should have one large arc (a half circle) on the top and scalloped edges on the bottom.

Position, height, width and color are your choice.
Do not overlap any other object.

********************************************/

//Draw Umbrella top here

	var umbr = document.getElementById('umbrella');
	
			if (umbr && umbr.getContext) {
	             var ctx4 = umbr.getContext("2d");
	             
	             if (ctx4) {
	                 
	                 ctx4.strokeStyle = 'rgba(102, 205, 170, 0.5)';
	                 ctx4.fillStyle = 'rgba(32, 178, 170, 0.8)';
	             
	                 ctx4.lineWidth = 10;
	                 
	                 ctx4.beginPath();
	                 ctx4.moveTo(100, 100);
                     ctx4.bezierCurveTo(140, 10, 300, 10, 300, 170);
                     ctx4.bezierCurveTo(245, 110, 240, 135, 195, 135);
					 ctx4.bezierCurveTo(195, 110, 120, 90, 100, 103);
					 ctx4.moveTo(100, 100);
					 ctx4.lineTo(95, 110);
	                 
	                 ctx4.stroke(); 
	                 ctx4.fill();
	             
	             
	             }
	             
	    	}
	
	
	

/*******************************************
PART 5

Practice using text.
Draw text into your canvas.  It can said whatever you would like in any color.

********************************************/

//Draw text here
	var txt = document.getElementById('txt');
	
			if (txt && txt.getContext) {
	        	var ctx5 = txt.getContext("2d");
				
				if (ctx5) {
					var yay = "Yay!";
					
					ctx5.fillStyle = 'rgb(188, 143, 143)';
					ctx5.font = '50px Raleway';
				
					ctx5.fillText( yay, 50, 100);
					
		
			}
		}
	}

/*******************************************
PART 6

Pixel manipulation.
Draw the image logo.png into the canvas in the following 3 ways.
1. The image exactly as it is.
2. Shrink the image by 50%
3. Slice a section of the logo out and draw that onto the canvas.

Reminder to use the drawImage method for all 3 of the ways.

********************************************/

//Draw images here



/*******************************************
PART 7

Putting it all together. 

Using a combination of all the methods. 
Create a complex scene.
You must use at least 3 different methods.

********************************************/

// Draw scene here


