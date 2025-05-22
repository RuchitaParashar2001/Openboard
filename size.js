

//------------------------------------------------------size change--------------------------------------------------------------------------------

let sizeBoxArray = document.querySelectorAll(".size-box");  //saare size-box wale div uthaae 0th vala pencil ka hoga , 1st wala erasor ka and 3rd wala shapes ka
// console.log(sizeBoxArray);
sizeBoxArray.forEach(element => {     //ab har ke liye ek loop chalaya and element mein ith vala size-box ka div padaa hoga
    
    // console.log(element);

    element.addEventListener("click",function(e){
        
                console.log(currTool);
                console.log(parseInt(e.target.getAttribute("sizeval")));
                feature.lineWidth=parseInt(e.target.getAttribute("sizeval"))
    })
});

// sizeBox.addEventListener("click",function(e)
// {

//     
//    
// })
    
// });
