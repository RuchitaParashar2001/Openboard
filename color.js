//----------------------------------------------------color change logic-----------------------------------------------------------------------------
let colors = document.querySelectorAll(".color");

// console.log(colors.length);

for(let i=0;i<colors.length;i++)
{
    colors[i].addEventListener("click",function(){
        
            if(currTool!="eraser"){
                if(isFillClicked)
                {
                    feature.fillStyle=colors[i].getAttribute("colorVal");
                }
                else{
                    feature.strokeStyle=colors[i].getAttribute("colorVal");
                }
               

            }

           

    })
}