//-----------------------------------------logic for setting current tool and display or hide their tool options--------------------------------------------------

let pencilTool = document.querySelector("#pencil")
let eraser = document.querySelector("#eraser");
let body = document.querySelector("body");
let shapes = document.querySelector("#shapes");
let options = document.querySelectorAll(".options");
let RectTool = shapes.querySelector(".rect");
let lineTool = shapes.querySelector(".line");
let sticky = document.querySelector("#sticky");
let fill = document.querySelector(".fill-color")
let download = document.querySelector("#download")
let currTool = "pencil";
let isFillClicked=false;


pencil.addEventListener("click",function(){
    if(currTool=="pencil")
    {
        //already clicked tha, ab second time hua click, to show options
        options[0].style.display="flex";
    }
    else{
        //first time click hua h , so jo isse pehle clicked tha uska options hatana h aur isko current tool banana h
        feature.strokeStyle="black";
        for(let i=0;i<options.length;i++)
        {
            options[i].style.display="none";
        }
        currTool="pencil";

    }
})
eraser.addEventListener("click",function(){
    if(currTool=="eraser")
    {
        options[1].style.display="flex";
       
    }
    else{
        currTool="eraser";
        for(let i=0;i<options.length;i++)
    {
        options[i].style.display="none";
    }
        
        feature.strokeStyle="white";
    }
    
})
shapes.addEventListener("click",function(){
    for(let i=0;i<options.length;i++)
    {
        options[i].style.display="none";
    }
        options[2].style.display="inline";

        RectTool.addEventListener("click",function(){
            currTool="rect";
            feature.strokeStyle="black";
          
        })

        lineTool.addEventListener("click",function(){
            currTool="line";
            feature.strokeStyle="black";
        })

})
sticky.addEventListener("click",function(){
    for(let i=0;i<options.length;i++)
    {
        options[i].style.display="none";
    }
    currTool="sticky";
    console.log("sticky clicked");
    createStickyDiv();
})
// console.log("before fill is clicked: ",isFillClicked);
fill.addEventListener("click",function(){
    if(isFillClicked)
    {
        isFillClicked=!isFillClicked;
    }
    else{
        isFillClicked=true;
    }
    console.log("after fill is clicked: ",isFillClicked);
   
})


download.addEventListener("click",function(){

    let url = board.toDataURL('image/png');      //converts the present state of board along with its drawings into a url;
    let a = document.createElement("a");
    a.href = url;
    a.download = "board.jpg";       //download the url present in href
    a.click();             //stimulates mouseclick upon hovering
})






//--------------------------------------------------various tools logic ( pencil,line and rect)---------------------------------------------------------------------
let htDiff = board.getBoundingClientRect().top;
let left = board.getBoundingClientRect().left;
let ismd = false;
let ix ,fx,iy,fy;
body.addEventListener("mousedown",function(e){
    // console.log("mouse pressed");
    // console.log(currTool);
     ix = e.clientX - left;
     iy = e.clientY - htDiff;
     feature.beginPath();
     feature.moveTo(ix,iy);
     if(currTool=="pencil"||currTool=="eraser")
     ismd=true;
})

body.addEventListener("mousemove",function(e){

    if(ismd && (currTool=="pencil"||currTool=="eraser"))
    {
        if(currTool=="eraser")
        {
            feature.strokeStyle="white";
        }
        feature.lineTo(e.clientX - left,e.clientY-htDiff);
        feature.stroke();
   }
})



body.addEventListener("mouseup",function(e){
   
    fx = e.clientX - left;
    fy = e.clientY - htDiff;

    if(currTool=="rect")
    {
        if(isFillClicked==true)
        {
            feature.fillRect(ix,iy,fx-ix,fy-iy);
        }
        else{
            feature.strokeRect(ix,iy,fx-ix,fy-iy);
        }
     
      
    }
    else if(currTool=="pencil"||currTool=="eraser")
    {
        ismd=false;
    }
    else if(currTool=="line"){
        feature.lineTo(fx,fy);
        feature.stroke();
    }
})
