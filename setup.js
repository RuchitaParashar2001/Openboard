let board = document.querySelector("canvas");       //getting the canvas element to allow the user interface
let feature = board.getContext("2d"); 
            //getContext() provides you tools and features for drawing and graphics of the canvas board

//setting the width and height of board equal to the window inner width and height

board.height = window.innerHeight;       //you can give any custom ht & wdth like this "200"
board.width = window.innerWidth;
feature.strokeStyle="black";
feature.lineWidth = 1;    

// feature.fillRect(0,0,250,250)
// let lineTool = document.querySelector(".line");
// let RectTool = document.querySelector(".rect");


