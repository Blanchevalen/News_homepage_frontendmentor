const hamburger_icon=document.getElementById("menu-icon");
const icon_close=document.getElementById("menu-icon-close");
const Menu=document.getElementById("menu");


icon_close.addEventListener("mouseenter", function(){
    let deg=0;
    id=setInterval(frame,5);
    function frame(){
        if(deg===360){
          
           clearInterval(id);
           deg=0;
        } else {
            
            icon_close.style.transform = "rotate(" + deg + "deg)";
            
            deg++;
        }
    
    }
})




hamburger_icon.addEventListener("click", function(){
Menu.style.display="block";
icon_close.style.display="block";
let pos=-360;
let id2=null;
id2=setInterval(frame,5)

function frame(){
    if (pos==-80){
        pos=360;
        clearInterval(id2);
    }else {
        Menu.style.right=pos+'px';
        pos++;
    }
}
})

icon_close.addEventListener("click", function(){
    Menu.style.display="none";
    icon_close.style.transform="rotate(90deg)";
    icon_close.style.display="none";
})