function createStickyDiv(){
            let stickyDiv = document.createElement("div");
            stickyDiv.setAttribute("class","sticky");
            stickyDiv.innerHTML=`
        <div class="sticky-header">
            <div class="min">
            </div>
            <div class="close">
            </div>
        </div>
        <textarea name="" id="" cols="30" rows="10" class="textarea" isMin="false"></textarea>`
            body.appendChild(stickyDiv);


//-----------------------------------------------------------minimize - maximize logic and close ---------------------------------------------------------------
            let min = stickyDiv.querySelector(".min");
            let close = stickyDiv.querySelector(".close");
            let sticky = stickyDiv.querySelector(".sticky-header");
            min.addEventListener("click",function(){
                    let textarea = stickyDiv.querySelector(".textarea");
                    let isMin = textarea.getAttribute("isMin");
                    if(isMin=="false")
                    {
                        textarea.style.display="none";
                        textarea.setAttribute("isMin","true");
                    }
                    else{
                        textarea.style.display="block";
                        textarea.setAttribute("isMin","false");
                    }
                    
            })
            close.addEventListener("click",function(){
                stickyDiv.remove();
            })
//-------------------moving sticky logic ----------------------------------------------------------------------------------------------------------
            let initx=null;
            let inity=null;
            let isStickydown=false;
            sticky.addEventListener("mousedown",function(e){
             
                initx=e.clientX;
                inity=e.clientY;
                isStickydown=true;
                e.stopImmediatePropagation();
                
            })
            window.addEventListener("mousemove",function(e){
                if(isStickydown==true)
                {
                    let finalx=e.clientX;
                    let finaly=e.clientY;
                    let dx = finalx-initx;
                    let dy = finaly-inity;
                    let obj = stickyDiv.getBoundingClientRect();
                    let top = obj.top;
                    let left = obj.left;
                    stickyDiv.style.top=top+dy+"px";  // naya top position is: mousedown ke waqt jahaa tha + mouse move move mein jitna dist age badaa
                    stickyDiv.style.left=left+dx+"px";
                    initx=finalx;
                    inity=finaly;
                }
                
                
               
    
            })
            window.addEventListener("mouseup",function(e){
                isStickydown=false;
               
                
                
               
    
            })
        };

    
    